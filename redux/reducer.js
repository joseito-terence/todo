const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      };

    case "DELTE_TODO":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id),
      }

    case "LOAD_TODOS":
      return {
        ...state, 
        tasks: [...action.payload.tasks],
      }

    default:
      return state;
  }
};

export default reducer;
