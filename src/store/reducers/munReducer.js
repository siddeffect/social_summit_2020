const initState = {
  munRegisterError: null
};

const munReducer = (state = initState, action) => {
  switch (action.type) {
    case "MUN_REGISTER_SUCCESS":
      console.log("mun registration successful");
      return { ...state, munRegisterError: null };

    case "MUN_REGISTER_ERROR":
      return {
        ...state,
        munRegisterError: action.err.message
      };

    default:
      return state;
  }
};

export default munReducer;
