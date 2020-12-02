import {FETCH_EPISODES, FETCH_FILTER_EPISODES} from '../actionTypes';
import fetchData from '../../api/axiosConfig';

export const fetchEpisodes = (page) => async (dispatch) => {
  try {
    let episodes = await fetchData.get(`/episode/?page=${page}`);
    const data = {
      episodes: episodes.data.results,
      total: episodes.data.info.pages,
    }
    console.log(episodes);
    dispatch({type:FETCH_EPISODES, payload: data});
  } catch (err) {
    console.log(err);
  }
};

export const fetchFilterEpisodes = (page, filterStr) => async (dispatch) => {
  try {
    let episodes = await fetchData.get(`/episode/?page=${page}${filterStr}`);
    const data = {
      episodes: episodes.data.results,
      total: episodes.data.info.pages,
    }
    dispatch({type:FETCH_FILTER_EPISODES, payload: data});
  } catch (err) {
    console.log(err);
  }
};