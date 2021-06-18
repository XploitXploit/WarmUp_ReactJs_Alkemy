import axios from "axios";
import {
	POSTS_PEDIDO,
	POSTS_EXITO,
	POSTS_FRACASO,
	POST_CREATE_PEDIDO,
	POST_CREATE_EXITO,
	POST_CREATE_FRACASO,
	POST_DELETE_PEDIDO,
	POST_DELETE_EXITO,
	POST_DELETE_FRACASO,
	POST_DETAIL_PEDIDO,
	POST_DETAIL_EXITO,
	POST_DETAIL_FRACASO,
	POST_EDIT_PEDIDO,
	POST_EDIT_EXITO,
	POST_EDIT_FRACASO,
} from "../Constants/postConstants";

export const listPosts = () => async (dispatch) => {
	try {
		dispatch({ type: POSTS_PEDIDO });

		const { data } = await axios.get("/posts");

		dispatch({
			type: POSTS_EXITO,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: POSTS_FRACASO,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const createPost = (title, body) => async (dispatch) => {
	try {
		dispatch({ type: POST_CREATE_PEDIDO });

		const { data } = await axios.post("/posts", { title: title, body: body });

		dispatch({
			type: POST_CREATE_EXITO,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: POST_CREATE_FRACASO,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		dispatch({ type: POST_DELETE_PEDIDO });

		const { data } = await axios.delete(`/posts/${id}`);

		dispatch({
			type: POST_DELETE_EXITO,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: POST_DELETE_FRACASO,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const detailPost = (id) => async (dispatch) => {
	try {
		dispatch({ type: POST_DETAIL_PEDIDO });
		const { data } = await axios.get(`/posts/${id}`);

		dispatch({
			type: POST_DETAIL_EXITO,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: POST_DETAIL_FRACASO,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const editPost = (id, title, body) => async (dispatch) => {
	try {
		dispatch({ type: POST_EDIT_PEDIDO });
		const { data } = await axios.put(`/posts/${id}`, {
			title: title,
			body: body,
		});

		dispatch({
			type: POST_EDIT_EXITO,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: POST_EDIT_FRACASO,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};
