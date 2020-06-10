import React from "react";
import { Link } from "react-router-dom";
import FOOD_TYPE, { PNG, FOOD_ICON_PATH } from "../../constants";
import recipes from "../../apis/recipes";

const RecipeTypeItem = () => {
  return FOOD_TYPE.map((item) => {
    const { id, name, icon, type } = item;

    const fetchRecipeByType = async (type) => {
      const response = await recipes.get(`/recipes/type:${type}`);
      return response;
    };
    return (
      <Link
        key={id}
        to={"/recipes/all"}
        onClick={() => fetchRecipeByType(type)}
      >
        <div className="ui divided animated middle aligned list">
          <div className="item">
            <img
              src={FOOD_ICON_PATH + icon + PNG}
              alt={name}
              className="ui tiny image"
            />
            <div className="content vb customText">{name}</div>
          </div>
        </div>
      </Link>
    );
  });
};

export default RecipeTypeItem;
