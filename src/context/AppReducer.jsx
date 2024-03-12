// AppReducer.js
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
    case "REGISTER_SUCCESS":
      return {
        ...state,
        token: action.payload.token,
        firstName: action.payload.firstName,
      };
    default:
      return state;
  }
};
