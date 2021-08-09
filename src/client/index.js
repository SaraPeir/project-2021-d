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

export default loadableReady(() => {
    hydrate(
      <ApolloProvider client={client}>
        <App provinces={window.__INITIAL_PROVINCES__} />
      </ApolloProvider>,
      document.getElementById('app'),
    );
});

 
