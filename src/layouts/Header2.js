import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/header.css";
// import zdj5 from "../images/zdj5.jpg";
import zdj3c from "../images/zdj3c.jpg";
import zdj4c from "../images/zdj4c.jpg";

const Header2 = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/contact"
          render={() => <img src={zdj4c} alt="palm leaves" />}
        />
        <Route
          exact
          path="/"
          render={() => <img src={zdj4c} alt="palm leaves" />}
        />
        <Route
          exact
          path="/admin"
          render={() => <img src={zdj3c} alt="leaf" />}
        />
        <Route
          exact
          path="/products"
          render={() => <img src={zdj3c} alt="leaf" />}
        />
        <Route render={() => <img src={zdj4c} alt="palm leaves" />} />
      </Switch>
    </>
  );
};

export default Header2;
