import React from "react";
import article from "../styles/article.css";

const Article = ({ tittle, author, text }) => {
  return (
    <article>
      <h3> {tittle}</h3>
      <span> {author} </span>
      <p>{text}</p>
    </article>
  );
};

export default Article;
