const getMoviesReducer = (state: any = [], action: { type: string }) => {
  console.log("state: ", state);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default getMoviesReducer;
