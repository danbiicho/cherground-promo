const reducer = (state: React.ComponentState, action: any) => {
  switch (action.type) {
    case "ID_CHECK":
      return {
        ...state,
        email: action.value,
      };

    case "PASSWORD_CHECK":
      return {
        ...state,
        password: action.value,
      };

    case "ADD_ID_ERROR_MSG":
      // if (action.isError) {
      return {
        ...state,
        isError: action.isError,
        errorMsg: action.message,
        // };
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
