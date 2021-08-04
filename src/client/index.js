import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import { loadableReady } from '@loadable/component';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

console.log('client', client)

client
  .query({
    query: gql`
      query getTasks {
          tasks {
            _id
            isDone
            task
          }
      }
    `
  })
  .then(result => console.log(result));

export default loadableReady(() => {
    hydrate(
      <ApolloProvider client={client}>
        <App arrayFromFetch={window.__INITIAL_ARRAYFETCH__} />
      </ApolloProvider>,
      document.getElementById('app'),
    );
});

 
