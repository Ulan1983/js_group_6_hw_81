import axiosApi from "../../axiosApi";

export const CREATE_LINK_SUCCESS = 'CREATE_LINK_SUCCESS';

export const createLinkSuccess = data => ({type: CREATE_LINK_SUCCESS, data});

export const createLink = linkData => {
	return async (dispatch) => {
		try {
			const response = await axiosApi.post('/links', linkData);
			dispatch(createLinkSuccess(response.data));
		} catch (e) {
			console.error(e);
		}
	}
};
