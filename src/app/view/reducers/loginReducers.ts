const reducer = (state: React.ComponentState, action: any) => {
  switch (action.type) {
    case "ID_CHECK":
      return {
        ...state,
        userName: action.value,
      };

    case "PASSWORDVALUE_CHECK":
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
