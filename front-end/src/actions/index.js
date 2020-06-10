import {
  NEW_BTN,
  LIST_BTN,
  LOGO_BTN,
  SEARCH_VALUE,
  FETCH_RECIPE,
  FETCH_RECIPES,
  CREATE_RECIPE,
  FETCH_RECIPES_BY_TYPE,
} from "./types";
import recipes from "../apis/recipes";
import history from "../history";

export const newBtn = () => {
  return {
    type: NEW_BTN,
  };
};

export const listBtn = () => {
  return {
    type: LIST_BTN,
  };
};

export const logoBtn = () => {
  return {
    type: LOGO_BTN,
  };
};

export const searchValue = (input) => {
  return {
    type: SEARCH_VALUE,
    payload: input,
  };
};

export const fetchRecipe = (id) => async (dispatch) => {
  const response = await recipes.get(`/recipes/${id}`);

  dispatch({ type: FETCH_RECIPE, payload: response.data });
};

export const fetchRecipesByType = (type) => async (dispatch) => {
  const response = await recipes.get(`/recipes/type/${type}`);

  dispatch({ type: FETCH_RECIPES_BY_TYPE, payload: response.data });
};

export const fetchRecipes = () => async (dispatch) => {
  const response = await recipes.get("/recipes/all");

  dispatch({ type: FETCH_RECIPES, payload: response.data });
};

export const createRecipe = (formValues) => async (dispatch) => {
  const response = await recipes.post("/recipes/create", { ...formValues });
  console.log(formValues);
  dispatch({ type: CREATE_RECIPE, payload: response.data });
  history.push("/");
};
