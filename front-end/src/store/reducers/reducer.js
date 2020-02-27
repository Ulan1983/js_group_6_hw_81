import {CREATE_LINK_SUCCESS} from "../actions/actions";

const initialState = {
	shortURL: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_LINK_SUCCESS:
			return {
				...state,
				shortURL: action.data.shortURL
			};
		default:
			return state;
	}
};

export default reducer;