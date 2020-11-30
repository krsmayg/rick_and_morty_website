import { FETCH_CHARACTERS } from "../actionTypes";
const initialState = {
  characters: [],
  total: 0
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload.characters,
        total: action.payload.total
      };
    default:
      return state;
  }
};
