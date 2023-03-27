import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import { SHOW_ERROR_MESSAGE } from '../constants/messageConstants';

import { GET_PRODUCTS } from '../constants/productConstants';
import { GET_COOKS } from '../constants/cookConstants';

export const getProductsByFilter = arg => async dispatch => {
	try {
		const response = await axios.post('/api/filter/search', arg);

		dispatch({
			type: GET_PRODUCTS,
			payload: response.data.products,
		});
	} catch (err) {
		console.log('getProductsByFilter api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const getCooksByFilter = (specialty, dish) => async dispatch => {
	try {
	  const response = await axios.post('/api/filter/search', { specialty, dish });
  
	  dispatch({
		type: GET_COOKS,
		payload: response.data.cooks,
	  });
	} catch (err) {
	  console.log('getCooksByFilter api error: ', err);
	  dispatch({ type: STOP_LOADING });
	  dispatch({
		type: SHOW_ERROR_MESSAGE,
		payload: err.response.data.errorMessage,
	  });
	}
  };