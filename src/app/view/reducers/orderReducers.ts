const reducer = (state: React.ComponentState, action) => {
  switch (action.type) {
    case "NAME_INFO":
      return {
        ...state,
        [action.name]: action.value,
      };

    case "ADD_COLOR_SELECTION":
      return {
        ...state,
        userInput: {
          ...state.userInput,
          name: [...state.userInput.color, action.value],
        },
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
          { color: action.color, quantity: action.quantity },
        ],
      };

    case "RESET_CONFIRM_ACTION":
      return {
        ...state,
        isConfirmed: false,
      };

    // case "PAINT_SELECTION":
    //   return {
    //     ...state,
    //     isSelectBoxOpened: !action.isSelectBoxOpened,
    //   };

    case "SET_ERROR_MSG":
      return {
        ...state,
        errorMsg: action.msg,
      };

    case "SAVE_IMG_PREVIEW":
      return {
        ...state,
        imgPreview: [...state.imgPreview, { ...action.PreviewFile }],
      };

    case "DELETE_IMG_PREVIEW":
      return {
        ...state,
        imgPreview: [...action.filteredFileList],
      };

    default:
      return state;
  }
};

export default reducer;
