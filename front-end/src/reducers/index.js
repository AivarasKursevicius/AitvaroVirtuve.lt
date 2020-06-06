import { combineReducers } from "redux";

import headerReducer from "./headerReducer";
import recipeReducer from "./recipeReducer";

export default combineReducers({
  header: headerReducer,
  recipe: recipeReducer,
});
