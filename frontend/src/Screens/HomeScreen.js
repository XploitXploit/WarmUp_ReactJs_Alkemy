import React, { useLayoutEffect, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../Actions/postsActions";
import PostCard from "../Components/PostCard";
import MensajeAlerta from "../Components/MensajeAlerta";
import Loader from '../Components/Loader'

function HomeScreen() {
	const dispatch = useDispatch();

	const postsList = useSelector((state) => state.postList);
	const { loading, posts, error } = postsList;

	useEffect(() => {
		dispatch(listPosts());
	}, [dispatch]);

	return (
		<Container xs={12}>
			<Row>
				<Row xs={8}>
					<h1>Posts</h1>
                    {loading ? (
                        <Loader />
                    ) : error ?
                        <MensajeAlerta variant='info'>
                        {error}
                        </MensajeAlerta> :
                            posts.length > 0 && (
                        posts.map((post) => <PostCard key={post.id} Post={post} />)
                    ) }
				</Row>
			</Row>
		</Container>
	);
}

export default HomeScreen;
