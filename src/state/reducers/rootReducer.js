import initialState from "../store/initialState.js";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_CREATE":
      return {
        ...state,
        createArticle: true,
        firstPage: false,
        loginForm: false
      };
    case "ARTICLE_SUBMITTED":
      return {
        ...state,
        message: action.payload.message
      };
    case "HIDE_CREATE":
      return {
        ...state,
        createArticle: false,
        firstPage: true
      };
    case "LOGIN":
      return {
        ...state,
        ...action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
export default rootReducer;
