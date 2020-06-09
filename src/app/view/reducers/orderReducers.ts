const reducer = (state: React.ComponentState, action) => {
  switch (action.type) {
    case "NAME_INFO":
      return {
        ...state,
        [action.name]: action.value,
      };

    case "ADD_USER_SELECTION":
      return {
        ...state,
        userInput: {
          ...state.userInput,
          [action.name]: action.value,
        },
      };

    case "CONFIRM_USER_SELECTION":
      return {
        ...state,
        isConfirmed: true,
        confirmedSelections: [
          ...state.confirmedSelections,
          { ...state.userInput },
        ],
      };

    case "RESET_CONFIRM_ACTION":
      return {
        ...state,
        isConfirmed: false,
      };

    case "PAINT_SELECTION":
      return {
        ...state,
        isSelectBoxOpened: !action.isSelectBoxOpened,
      };

    case "SET_ERROR_MSG":
      return {
        ...state,
        errorMsg: action.msg,
      };

    default:
      return state;
  }
};

export default reducer;
