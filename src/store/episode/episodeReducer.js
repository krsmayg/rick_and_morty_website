import { FETCH_EPISODES, FETCH_FILTER_EPISODES} from "../actionTypes";
const initialState = {
  episodes: [],
  total: 0,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      return {
        ...state,
        episodes: action.payload.episodes,
        total: action.payload.total,
      };
    case FETCH_FILTER_EPISODES:
      return {
        ...state,
        episodes: action.payload.episodes,
        total: action.payload.total,
      };
    default:
      return state;
  }
};
