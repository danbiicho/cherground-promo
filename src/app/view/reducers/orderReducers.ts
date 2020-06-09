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
        isConfirmed: !state.isConfirmed,
        confirmedSelections: [
          ...state.confirmedSelections,
          { ...state.userInput },
        ],
      };

    default:
      return state;
  }
};

export default reducer;
