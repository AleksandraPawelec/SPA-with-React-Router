import React from "react";
import products from "../styles/products.css";
import { Link } from "react-router-dom";
import item1 from "../images/item1.jpg";
import item2 from "../images/item2.jpg";
import item3 from "../images/item3.jpg";

let productsList = [
  {
    id: 0,
    description: "item1",
    src: item1
  },
  {
    id: 1,
    description: "item2",
    src: item2
  },
  {
    id: 2,
    description: "item3",
    src: item3
  },
  {
    id: 3,
    description: "item4",
    src: item1
  },
  {
    id: 4,
    description: "item5",
    src: item2
  },
  {
    id: 5,
    description: "item6",
    src: item3
  }
];

// productsList.map(item => {
//   <Products key={item.id} {...item} />;
// });

const ProductPage = () => {
  const showProducts = productsList.map(item => (
    <Link to={`products/${item.description}`}>
      <div className="item">
        <img src={item.src} />
        <p>{item.description}</p>
      </div>
      {/* // <Products key={item.id} {...item} /> */}
    </Link>
  ));
  return <div className="products">{showProducts}</div>;
};

export default ProductPage;
