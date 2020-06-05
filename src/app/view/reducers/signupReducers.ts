const reducer = (state, action) => {
  switch (action.type) {
    case "PROCEED_STAGE":
      return {
        ...state,
        stageIdx: ++action.stageIdx,
      };

    case "NAME_CHECK":
      return {
        ...state,
        userInput: {
          ...state.userInput,
          userNameVal: action.value,
        },
      };

    case "ADD_USER_INFO":
      return {
        ...state,
        userInput: {
          ...state.userInput,
          [action.inputName]: action.value,
        },
      };

    case "ADD_ERROR_MSG":
      return {
        ...state,
        errorMsg: action.message,
      };

    default:
      return state;
  }
};

export default reducer;
