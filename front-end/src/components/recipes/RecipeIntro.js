import React from "react";
import faker from "faker";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecipes } from "../../actions";

class RecipeIntro extends React.Component {
  state = { img: "" };

  componentDidMount() {
    this.props.fetchRecipes();
  }

  renderRecipes() {
    return this.props.recipes.map((recipe) => {
      return (
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <h2>{recipe.name}</h2>

            <img
              className="fakeimg text"
              src={faker.image.food()}
              alt="a"
              style={{ height: "200px" }}
            />
          </Link>
          <p style={{ marginBottom: "50px" }}>{recipe.description}</p>
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
