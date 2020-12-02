import { ADD_TASK_TO_STORAGE,GET_TASKS,UPDATE_TASK } from "../actionTypes";
const initialState = {
  tasks: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK_TO_STORAGE:
      return {
        ...state,
        tasks: action.payload,
      };
      case GET_TASKS:
        return {
          ...state,
          tasks: action.payload,
        };
        case UPDATE_TASK:
          return {
            ...state,
            tasks: action.payload,
          };
    default:
      return state;
  }
};
