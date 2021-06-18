import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import DetailCard from "../Components/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { detailPost } from "../Actions/postsActions";
import MensajeAlerta from "../Components/MensajeAlerta";
import Loader from "../Components/Loader";

function DetailScreen({ match }) {
	const dispatch = useDispatch();

	const postDetails = useSelector((state) => state.postDetail);
	const { post, loading, error } = postDetails;

	useEffect(() => {
		dispatch(detailPost(parseInt(match.params.id)));
	}, [dispatch,match]);

	return (
		<Container>
			{loading ? (
				<Loader />
			) : error ? (
				<MensajeAlerta variant='danger'>{error}</MensajeAlerta>
			) : (
				<DetailCard Post={post}></DetailCard>
			)}
		</Container>
	);
}

export default DetailScreen;
