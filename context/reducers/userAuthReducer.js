const userAuthReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_USER_NULL":
      return {
        ...state,
        user: null,
      };
    case "SET_USER_STATE":
      return {
        ...state,
        user: action.state,
      };
    default:
      return state;
  }
};

export default userAuthReducer;
