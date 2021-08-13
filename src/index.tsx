import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";

import App from "./App";

import { GlobalStyle } from "./styles/Global";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "https://animazon.herokuapp.com/",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router basename="/">
      <GlobalStyle />
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);