export default (state, action) => {
  console.log(state);
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        posts: action.payload
      };

    default:
      return state;
  }
};
