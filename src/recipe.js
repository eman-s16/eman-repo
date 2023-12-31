import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <div className={style.recipe}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h1>{title}</h1>
      </a>
      <small>
        <strong>Calorie count:</strong> {calories.toFixed(2)}
      </small>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
