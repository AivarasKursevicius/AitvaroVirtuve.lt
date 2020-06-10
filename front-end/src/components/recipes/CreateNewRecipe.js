import React from "react";
import { connect } from "react-redux";
import { createRecipe } from "../../actions";

import RecipeForm from "./RecipeForm";

class CreateNewRecipe extends React.Component {
  onSubmit = (formValues) => {
    this.props.createRecipe(formValues);
  };

  render() {
    return (
      <div>
        <h2 style={{ fontWeight: "bolder", textAlign: "center" }}>
          Naujas receptas
        </h2>
        <RecipeForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createRecipe })(CreateNewRecipe);
