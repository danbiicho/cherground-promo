const reducer = (state: React.ComponentState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default reducer;
