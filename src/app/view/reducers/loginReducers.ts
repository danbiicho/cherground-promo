const reducer = (state, action) => {
  switch (action.type) {
    case "NAME_CHECK":
      return {
        ...state,
        userName: action.value,
      };

    case "PASSWORD_CHECK":
      return {
        ...state,
        userPw: action.value,
      };

    case "ADD_ID_ERROR_MSG":
      return {
        ...state,
        idErrorMsg: action.message,
      };

    case "ADD_PW_ERROR_MSG":
      return {
        ...state,
        pwErrorMsg: action.message,
      };

    default:
      return state;
  }
};

export default reducer;
