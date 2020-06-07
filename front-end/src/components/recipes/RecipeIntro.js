import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecipes } from "../../actions";

class RecipeIntro extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  renderRecipes() {
    return this.props.recipes.map((recipe) => {
      console.log(recipe);
      const styleForImg = {
        background: `url("http://localhost:6039/image.jpeg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };

      console.log(recipe);
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
  }

  render() {
    return <React.Fragment>{this.renderRecipes()}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return { recipes: Object.values(state.recipe) };
};

export default connect(mapStateToProps, { fetchRecipes })(RecipeIntro);
