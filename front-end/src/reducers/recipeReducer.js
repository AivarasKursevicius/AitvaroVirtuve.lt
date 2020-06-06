import _ from "lodash";
import { FETCH_RECIPE, FETCH_RECIPES, CREATE_RECIPE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RECIPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_RECIPE:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_RECIPES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
