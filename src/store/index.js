import { combineReducers } from "redux";
import characterReducer from './character/characterReducer'
export default combineReducers({
  characters: characterReducer,
});
