import { GET_COOKS, CREATE_COOK, DELETE_COOK, EDIT_COOK } from "../constants/cookConstants";

const INITIAL_STATE = {
    cooks: []
}

const cookReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_COOKS:
			return {
				...state,
				cooks: action.payload,
			};
		case CREATE_COOK:
			return {
				...state,
				cooks: [...state.cooks, action.payload],
			};
		case DELETE_COOK:
				return {
					cooks: state.cooks.filter((c) => c._id !== action.payload._id),
				};
		case EDIT_COOK:
					return {
					  cook: action.payload,
					};
		default:
			return state;
	}
};
export default cookReducer;