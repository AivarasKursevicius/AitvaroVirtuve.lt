import React from "react";
import { Link } from "react-router-dom";
import faker from "faker";

const RecipeTypeItem = () => {
  return (
    <div className="item">
      <img src={faker.image.avatar()} alt="a" className="ui tiny image" />
      <div className="content vb">
        <Link to="/recipes/:id" className="customText">
          Patiekalo Tipas
        </Link>
      </div>
    </div>
  );
};

export default RecipeTypeItem;
