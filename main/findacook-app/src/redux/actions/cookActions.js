import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
	SHOW_ERROR_MESSAGE,
	SHOW_SUCCESS_MESSAGE
} from '../constants/messageConstants';
import {
	GET_COOKS,
	CREATE_COOK,
	DELETE_COOK,
	EDIT_COOK
} from '../constants/cookConstants';
import axios from 'axios';

export const getCooks = () => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get('/api/cook');
		console.log(response);
		console.log('Hey1',response.data);
		dispatch({ type: STOP_LOADING });
		dispatch({ type: GET_COOKS, payload: response.data });
	} catch (err) {
		console.log('getCooks api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const createCook = formData => async dispatch => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		dispatch({ type: START_LOADING });
		const response = await axios.post('/api/cook', formData, config);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_SUCCESS_MESSAGE,
			payload: response.data.successMessage,
		});
		dispatch({ type: CREATE_COOK, payload: response.data.cook });
	} catch (err) {
		console.log('createCook api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const deleteCook = cookId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.delete(`/api/cook/${cookId}`);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: DELETE_COOK,
			payload: response.data,
		});
	} catch (err) {
		console.log('deleteCook API error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
}

export const editCook = cookId => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get(`/api/cook/${cookId}`);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: EDIT_COOK,
			payload: response.data,
		});
	} catch (err) {
		console.log('getCooks api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};