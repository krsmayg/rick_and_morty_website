import { combineReducers } from "redux";
import characterReducer from './character/characterReducer';
import locationReducer from './location/locationReducer';
import episodeReducer from './episode/episodeReducer';
export default combineReducers({
  characters: characterReducer,
  locations: locationReducer,
  episodes: episodeReducer,
});
