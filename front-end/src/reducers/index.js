import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import headerReducer from "./headerReducer";
import recipeReducer from "./recipeReducer";

export default combineReducers({
  header: headerReducer,
  recipe: recipeReducer,
  form: formReducer,
});
