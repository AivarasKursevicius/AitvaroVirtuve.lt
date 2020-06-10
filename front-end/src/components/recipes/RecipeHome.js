import React from "react";

import RecipeIntro from "./RecipeIntro";
import RecipeTypeItem from "./RecipeTypeItem";

const RecipeHome = () => {
  return (
    <div id="_recipeHome" className="row">
      <RecipeIntro />
      <div className="side">
        <h2 className="ui horizontal divider header">
          <i className="food icon"></i>
          Tipai
        </h2>

        <RecipeTypeItem />
      </div>
    </div>
  );
};

export default RecipeHome;
