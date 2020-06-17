import React from "react";
import { Link } from "react-router-dom";
import getAllRecipes from "../../hooks/getAllRecipes";

const RecipeIntro = () => {
  const [recipes] = getAllRecipes();
  const renderRecipes = (recipes) => {
    return recipes.map((recipe) => {
      const styleForImg = {
        background: `url("${recipe.images[0].uri}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };

      return (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <Link to={`/recipes/${recipe.id}`}>
            <div className="imageWithDesc" style={styleForImg}>
              <span>{recipe.description}</span>
            </div>
          </Link>
          <div className="ui section divider"></div>
        </div>
      );
    });
  };
  return <div className="main ui segment">{renderRecipes(recipes)}</div>;
};

export default RecipeIntro;
