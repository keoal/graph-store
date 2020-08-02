import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ckda6ke6umbsr01xp7eaa4wy5/master"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();