import { FETCH_LOCATIONS, FETCH_FILTER_LOCATIONS } from "../actionTypes";
const initialState = {
  locations: [],
  total: 0,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return {
        ...state,
        locations: action.payload.locations,
        total: action.payload.total,
      };
    case FETCH_FILTER_LOCATIONS:
      return {
        ...state,
        locations: action.payload.locations,
        total: action.payload.total,
      };
    default:
      return state;
  }
};
