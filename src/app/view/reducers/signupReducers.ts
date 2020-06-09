// interface SignupAction {
//   type: "PROCEED_STAGE" | "NAME_CHECK" | "ADD_USER_INFO" | "ADD_ERROR_MSG";
//   inputName: string;
//   stageIdx: number;
//   value: string;
//   message: string;
// }

const reducer = (state: React.ComponentState, action) => {
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
