import {FETCH_CHARACTERS} from '../actionTypes';
import fetchData from '../../api/axiosConfig';
export const fetchAllCharacters = (page) => async (dispatch) => {
  try {
    let characters = await fetchData.get(`/character/?page=${page}`);
    const data = {
      characters: characters.data.results,
      total: characters.data.info.pages,
    }
    dispatch({type:FETCH_CHARACTERS, payload: data});
  } catch (err) {
    console.log(err);
  }

};