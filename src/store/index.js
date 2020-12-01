import { combineReducers } from "redux";
import characterReducer from './character/characterReducer';
import locationReducer from './location/locationReducer';
export default combineReducers({
  characters: characterReducer,
  locations: locationReducer,
});
