const reducer = (state, action) => {
  switch (action.type) {
    case "NAME_INFO":
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
