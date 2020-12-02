import { v5 as uuidv5 } from "uuid";
import { ADD_TASK_TO_STORAGE,GET_TASKS, UPDATE_TASK } from "../actionTypes";

export const createTask = (taskInput) => (dispatch) => {
  const task = {
    id: '',
    name: '',
    marked: false
  };
  task.id =  uuidv5(`${taskInput} + ${Date.now()}`, uuidv5.DNS).split("-")[4];
  task.name = taskInput;
  let tasks = JSON.parse(localStorage.getItem("todoTasks"));
  tasks.push(task);
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
  dispatch({ type: ADD_TASK_TO_STORAGE, payload: tasks });
};

export const getTasks = () => (dispatch) => {
  let tasks = JSON.parse(localStorage.getItem("todoTasks"));
  dispatch({ type: GET_TASKS, payload: tasks });
};

export const updateTask = (taskId, marked,name) => (dispatch) => {
  let tasks = JSON.parse(localStorage.getItem("todoTasks"));
  const index = tasks.findIndex((el) => el.id === taskId);
  tasks[index] = {
    id: taskId, name:name, marked: marked
  }
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
  dispatch({ type: UPDATE_TASK, payload: tasks });
};