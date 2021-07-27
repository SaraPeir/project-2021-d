import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../client/App';
import serialize from "serialize-javascript";
import path from 'path';
import { ChunkExtractor } from '@loadable/server'
import { graphqlHTTP } from 'express-graphql'
import graphqlSchema from './data/schema'
import graphqlResolvers from './data/resolvers'
import mongoose from 'mongoose'

const fetch = require('node-fetch');
const app = express(); 
require('dotenv').config()
// require('custom-env').env()

app.use(express.static('assets'));

const databaseName = 'sample_todo'
const psw = process.env.DB_PASS
const user = process.env.DB_USER
const uri = `mongodb+srv://${user}:${psw}@cluster0.r4gtu.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
const options = {useNewUrlParser: true, useUnifiedTopology: true}
console.log('URI', uri)

mongoose.connect(uri, options)
.then(() => app.listen(4000, console.log('Server is running')))
.catch(error => { throw error })

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)

app.get("*", (req, res, next) => {
    const emptyArray = [];
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';
    const statsFile = path.resolve('./assets/loadable-stats.json')
    const extractor = new ChunkExtractor({ statsFile });

    let drinkData = []

    try {
      fetch(url)
      .then(response => response.json())
      .then(data => emptyArray.concat(data.drinks))
    } catch {
      console.log(error)
    }

    console.log('drinkData', drinkData)

    const jsx = extractor.collectChunks(<App arrayFromFetch={drinkData} />)
    const html = renderToString(jsx)
    const scriptTags = extractor.getScriptTags()

    res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR with React</title>
            <script>window.__INITIAL_ARRAYFETCH__ = ${serialize(drinkData)}</script>
          </head>
          <body>
            <div id="app">${html}</div>
            ${scriptTags}
          </body>
        </html>
      `) 
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})