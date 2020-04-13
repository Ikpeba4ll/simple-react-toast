const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, ...action.data];
    case "REMOVE":
      return state.filter((t) => t.id !== action.id);

    default:
      return state;
  }
};

export default todoReducer;
