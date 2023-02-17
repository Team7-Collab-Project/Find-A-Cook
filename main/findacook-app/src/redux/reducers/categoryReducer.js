import { GET_CATEGORIES, CREATE_CATEGORY } from "../constants/categoryConstants";

const INITIAL_STATE = {
    categories: []
}

const categoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
            // console.log(action.payload)
			return {
				...state,
				categories: action.payload,
			};
		default:
			return state;
	}
};
export default categoryReducer;