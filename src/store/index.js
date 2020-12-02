import { combineReducers } from "redux";
import characterReducer from './character/characterReducer';
import locationReducer from './location/locationReducer';
import episodeReducer from './episode/episodeReducer';
import taskReducer from './task/taskReducer';
export default combineReducers({
  characters: characterReducer,
  locations: locationReducer,
  episodes: episodeReducer,
  tasks: taskReducer,
});
