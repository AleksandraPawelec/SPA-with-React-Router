import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import ProductPage from "../pages/ProductPage";
import LoginPage2 from "../pages/LoginPage2";
import OneProductPage from "../pages/OneProductPage";
import ErrorPage from "../pages/ErrorPage";
const Page2 = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={ProductPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/login" exact component={LoginPage2} />
        <Route path="/products/:description" component={OneProductPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page2;
