import { createContext } from "react";

export const AppContext = createContext();
export const AppReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.payload.token,
        firstName: action.payload.firstName,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        firstName: null,
      };
    default:
      return state;
  }
};
