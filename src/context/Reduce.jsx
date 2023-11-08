function Reduce(state, action) {
  if (action.type === "Loading") {
    return {
      ...state,
      loading: true,
    };
  }

  return state;
}

export default Reduce;
