import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "Produkty", path: "/products" },
  { name: "Kontakt", path: "/contact" },
  { name: "Panel logowania", path: "/admin" }
];

const Navigation2 = () => {
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation2;
