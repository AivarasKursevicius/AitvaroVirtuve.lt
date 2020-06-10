import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { RECIPE_DETAILS, TEXTAREA_ROWS } from "../../constants";

class RecipeForm extends React.Component {
  onSubmit = (formValues) => {
    // this.props.onSubmit(formValues);
    console.log(formValues);
  };

  renderError(meta) {
    if ("touched" in meta) {
      if (meta.touched && meta.error) {
        return (
          <div className="ui error pointing prompt label err">
            <div className="header">{meta.error}</div>
          </div>
        );
      }
    } else if (meta.error && meta.submitFailed === true) {
      return (
        <div className="ui error pointing prompt label err">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  }

  renderInputText = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    const inputType =
      label === RECIPE_DETAILS.description ? (
        <textarea {...input} rows={TEXTAREA_ROWS} autoComplete="off" />
      ) : (
        <input {...input} autoComplete="off" />
      );
    return (
      <div style={{ marginBottom: "50px" }} className={className}>
        <div className="ui horizontal divider">
          <label>{label}</label>
        </div>
        {inputType}

        {this.renderError(meta)}
      </div>
    );
  };

  renderListInput = ({ input, label, meta }) => {
    return (
      <>
        <input placeholder={label} autoComplete="off" {...input} />
        {meta.touched ? (
          <div className="ui error left pointing  prompt label err">
            <div className="header">{meta.error}</div>
          </div>
        ) : null}
      </>
    );
  };

  renderIngredientsList = ({ fields, label, meta }) => (
    <div>
      <div className="field">
        <div className="ui field horizontal divider">
          <label>{label}</label>
          {this.renderError(meta)}
        </div>
        <div onClick={() => fields.push()} className="ui label addIcon">
          <i aria-hidden="true" className="plus icon"></i>
          Pridėti
        </div>
      </div>
      {fields.map((ingredient, index) => (
        <div className="ui field icon input listItem" key={index}>
          <Field
            name={`${ingredient}.ingredient`}
            type="text"
            component={this.renderListInput}
            label={index + 1}
            onClick={fields.remove}
          />

          <i
            onClick={() => fields.remove(index)}
            aria-hidden="true"
            className="trash alternate circular inverted link icon red aaa"
          ></i>
        </div>
      ))}
    </div>
  );

  render() {
    const {
      name,
      description,
      ingredients,
      time,
      type,
      difficulty,
      uploadImg,
      authorEmail,
      authorName,
      uploadForm,
    } = RECIPE_DETAILS;
    return (
      <form
        id="_form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <div className="row">
          <div className="main">
            <Field name="name" component={this.renderInputText} label={name} />
            <Field
              name="description"
              component={this.renderInputText}
              aaa={true}
              label={description}
            />
            <FieldArray
              name="ingredients"
              label={ingredients}
              component={this.renderIngredientsList}
            />
          </div>
          <div className="side">
            <Field
              name="authorName"
              component={this.renderInputText}
              label={authorName}
            />
            <Field
              name="authorEmail"
              component={this.renderInputText}
              label={authorEmail}
            />
          </div>
        </div>
        <button
          className="ui button"
          onClick={this.props.handleSubmit(this.onSubmit)}
        >
          {uploadForm}
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "Įveskite recepto pavadinima";
  }

  if (!formValues.description) {
    errors.description = "Įveskite recepto aprašymas";
  }
  if (!formValues.ingredients || !formValues.ingredients.length) {
    errors.ingredients = { _error: "Įveskite bent viena ingredienta" };
  } else {
    const ingredientsArrayErrors = [];
    formValues.ingredients.forEach((ingredient, index) => {
      const ingredientErrors = {};
      if (!ingredient || !ingredient.ingredient) {
        ingredientErrors.ingredient = "Tuščias";
        ingredientsArrayErrors[index] = ingredientErrors;
      }
    });
    if (ingredientsArrayErrors.length) {
      errors.ingredients = ingredientsArrayErrors;
    }
  }

  return errors;
};

export default reduxForm({
  form: "recipeForm",
  validate,
})(RecipeForm);