import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";

import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import ProductsPage from "./pages/Products";

export default function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:slug" component={ProductPage} />
        <Route path="/products/:slug" component={ProductsPage}/>
      </Switch>
    </div>
  );
};