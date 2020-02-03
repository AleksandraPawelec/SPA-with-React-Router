import React from "react";
import { Link } from "react-router-dom";
import Product from "../components//Product";
import oneproduct from "../styles/oneproducts.css";
const OneProductPage = ({ match }) => {
  return (
    <div className="all">
      <Product description={match.params.description} />
      <Link to="/products" className="back">
        Powrót do produktów
      </Link>
    </div>
  );
};

export default OneProductPage;
