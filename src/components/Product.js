import React from "react";
import oneproducts from "../styles/oneproducts.css";

const Product = props => {
  return <article className="box-item">{props.description}</article>;
};

export default Product;
