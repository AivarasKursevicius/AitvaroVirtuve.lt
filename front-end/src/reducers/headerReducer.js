import { LIST_BTN, NEW_BTN, LOGO_BTN, SEARCH_VALUE } from "../actions/types";

const INITIAL_STATE = {
  listBtn: "",
  newBtn: "",
  searchValue: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_BTN:
      return {
        ...state,
        listBtn: "activeBtn",
        newBtn: "",
      };
    case NEW_BTN:
      return { ...state, listBtn: "", newBtn: "activeBtn" };
    case LOGO_BTN:
      return { ...state, listBtn: "", newBtn: "" };
    case SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};
