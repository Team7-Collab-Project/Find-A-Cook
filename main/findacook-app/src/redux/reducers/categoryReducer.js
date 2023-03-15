import { GET_CATEGORIES, CREATE_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY } from "../constants/categoryConstants";

const INITIAL_STATE = {
    categories: []
}

const categoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};
		case CREATE_CATEGORY:
			return {
				...state,
				categories: [...state.categories, action.payload],
			};
		case DELETE_CATEGORY:
				return {
					categories: state.categories.filter((c) => c._id !== action.payload._id),
				};
		case EDIT_CATEGORY:
					return {
					  category: action.payload,
					};
		default:
			return state;
	}
};
export default categoryReducer;