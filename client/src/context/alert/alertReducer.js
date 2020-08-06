import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERTS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    case CLEAR_ALERTS:
      return [];
    default:
      return state;
  }
};
