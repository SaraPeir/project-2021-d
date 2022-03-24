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
import cors from 'cors'

const fetch = require('node-fetch');
const app = express(); 

// allows the use of process variables, stored in .env file
require('dotenv').config()

app.use(express.static('assets'));

// to allow requests to domains different than localhost:3000
app.use(cors())

const databaseName = 'sample_todo'
const psw = process.env.DB_PASS
const user = process.env.DB_USER
const uri = `mongodb+srv://${user}:${psw}@cluster0.r4gtu.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose
.connect(uri, options)
.then(() => app.listen(4000, console.log('Server is running for GRAPHQL')))
.catch(error => { throw error })

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)

app.get("*", async (req, res, next) => {
    const weatherUrl = 'https://www.el-tiempo.net/api/json/v2/provincias'
    const statsFile = path.resolve('./assets/loadable-stats.json')
    const extractor = new ChunkExtractor({ statsFile });

    // As Express doesn't support promises, all rejections should be handled manually with async/await
    // https://stackoverflow.com/questions/53940043/unhandledpromiserejectionwarning-this-error-originated-either-by-throwing-insid
    try {
      const response = await fetch(weatherUrl);
      const data = await response.json()
      
      const jsx = extractor.collectChunks(<App provinces={data.provincias} />)
      const html = renderToString(jsx)
      const scriptTags = extractor.getScriptTags()
    
      res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with React</title>
          <script>window.__INITIAL_PROVINCES__ = ${serialize(data.provincias)}</script>
          <!-- Bootstrap CSS -->
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </head>
        <body>
          <div id="app">${html}</div>
          ${scriptTags}
        </body>
      </html>
    `)
    } catch(error) {
      console.log(error)

      const jsx = extractor.collectChunks(<App provinces={[]} />)
        const html = renderToString(jsx)
        const scriptTags = extractor.getScriptTags()
    
            res.send(`
            <!DOCTYPE html>
            <html>
              <head>
                <title>SSR with React</title>
                <script>window.__INITIAL_PROVINCES__ = ${serialize([])}</script>
                <!-- Bootstrap CSS -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
              </head>
              <body>
                <div id="app">${html}</div>
                ${scriptTags}
              </body>
            </html>
          `)
    }
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})