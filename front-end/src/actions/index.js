import { NEW_BTN, LIST_BTN, LOGO_BTN, SEARCH_VALUE } from "./types";

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
