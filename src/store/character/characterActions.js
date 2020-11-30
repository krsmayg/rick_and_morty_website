import {FETCH_CHARACTERS, FETCH_FILTER_CHARACTERS} from '../actionTypes';
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
export const fetchFilteredCharacters = (page, filterStr) => async (dispatch) => {
  try {
    let characters = await fetchData.get(`/character/?page=${page}${filterStr}`);
    console.log(characters);
    const data = {
      characters: characters.data.results,
      total: characters.data.info.pages,
    }
    dispatch({type:FETCH_FILTER_CHARACTERS, payload: data});
  } catch (err) {
    console.log(err);
  }
};