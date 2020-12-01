import {FETCH_LOCATIONS} from '../actionTypes';
import fetchData from '../../api/axiosConfig';

export const fetchLocations = (page) => async (dispatch) => {
  try {
    let locations = await fetchData.get(`/location/?page=${page}`);
    const data = {
      locations: locations.data.results,
      total: locations.data.info.pages,
    }
    dispatch({type:FETCH_LOCATIONS, payload: data});
  } catch (err) {
    console.log(err);
  }
};