import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { RECIPE_DETAILS, TEXTAREA_ROWS } from "../../constants";
import { Dropdown } from "semantic-ui-react";
import MyDropzone from "./RenderDropZoneInput";
import Service from "../../Service";

class RecipeForm extends React.Component {
  onSubmit = async (formValues) => {
    const response = await Service.upload(formValues.images);
    formValues.images = response.data;
    this.props.onSubmit(formValues);
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
    } else if (!meta.valid && meta.submitFailed === false) {
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
        {meta.touched && meta.error ? (
          <div className="ui error left pointing  prompt label err">
            <div className="header">{meta.error}</div>
          </div>
        ) : null}
      </>
    );
  };

  renderIngredientsList = ({ fields, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div style={{ marginBottom: "50px" }}>
        <div className={className}>
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
  };
  renderDropdown = ({ input, label, meta, options }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    const { type } = RECIPE_DETAILS;
    const multiDropdown =
      label === type.title
        ? { boolean: true, value: input.value || [] }
        : { boolean: false, value: input.value };
    return (
      <div style={{ marginBottom: "50px" }} className={className}>
        <div className="ui horizontal divider">
          <label>{label}</label>
        </div>
        <Dropdown
          key={options.key}
          selection
          {...input}
          fluid
          multiple={multiDropdown.boolean}
          options={options}
          value={multiDropdown.value}
          onChange={(param, data) => input.onChange(data.value)}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderImageUploader = (formValues) => {
    return (
      <React.Fragment>
        <div className="ui horizontal divider">
          <label>{formValues.label}</label>
        </div>
      </React.Fragment>
    );
  };

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
              label={description}
            />
            <FieldArray
              name="ingredients"
              label={ingredients}
              component={this.renderIngredientsList}
            />
            <Field
              props={time}
              name={time.name}
              label={time.title}
              component={this.renderDropdown}
            />
            <Field
              props={type}
              name={type.name}
              label={type.title}
              component={this.renderDropdown}
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

            <Field
              props={difficulty}
              name={difficulty.name}
              label={difficulty.title}
              component={this.renderDropdown}
            />
            <Field
              renderError={this.renderError}
              label={uploadImg}
              name="images"
              component={MyDropzone}
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

  if (!formValues.time) {
    errors.time = "Pasirinkite gaminimo laika";
  }

  if (!formValues.type) {
    errors.type = "Pasirinkite patiekalo tipa arba tipus";
  }

  if (!formValues.difficulty) {
    errors.difficulty = "Pasirinkite gaminimo sudetingumas";
  }
  if (!formValues.images || formValues.images === []) {
    errors.images = "Įkelkite patiekalo nuotrauka bent viena";
  }
  return errors;
};

export default reduxForm({
  form: "recipeForm",
  validate,
})(RecipeForm);
