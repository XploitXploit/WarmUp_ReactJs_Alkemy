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

export const postListReducer = (state = { posts: [] }, action) => {
	switch (action.type) {
		case POSTS_PEDIDO:
			return { loading: true, posts: [] };
		case POSTS_EXITO:
			return { loading: false, posts: action.payload };
		case POSTS_FRACASO:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const postCreateReducer = (state = { post: {} }, action) => {
	switch (action.type) {
		case POST_CREATE_PEDIDO:
			return { loading: true, post: {} };
		case POST_CREATE_EXITO:
			return { loading: false, post: action.payload };
		case POST_CREATE_FRACASO:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const postDeleteReducer = (state = { post:{} }, action) => {
	switch (action.type) {
		case POST_DELETE_PEDIDO:
			return { loading: true};
		case POST_DELETE_EXITO:
			return { loading: false, post: action.payload };
		case POST_DELETE_FRACASO:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const postDetailReducer = (state = { post: {} }, action) => {
	switch (action.type) {
		case POST_DETAIL_PEDIDO:
			return { loading: true, post: {} };
		case POST_DETAIL_EXITO:
			return { loading: false, post: action.payload };
		case POST_DETAIL_FRACASO:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const postEditReducer = (state = { post: {} }, action) => {
	switch (action.type) {
		case POST_EDIT_PEDIDO:
			return { loading: true, post: {} };
		case POST_EDIT_EXITO:
			return { loading: false, post: action.payload };
		case POST_EDIT_FRACASO:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
