import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { deletePost,detailPost } from '../Actions/postsActions'

function PostCard({ Post }) {
	const dispatch=useDispatch()

	const deleteClicked = (id) => {
		dispatch(deletePost(id))
	}

	const editClicked = (id) => {
		dispatch(detailPost(id))
	}

	return (
		<Card className='my-2'>
			<Card.Body>
				<Card.Title>{Post.title}</Card.Title>
				<Link to={`detail/${Post.id}`}>
					<Button className='m-3' variant='primary'>
						Detail
					</Button>
				</Link>

				<Link to={`edit/${Post.id}`}>
					<Button variant='primary' className='m-3' onClick={()=>{editClicked(Post.id)}} >Edit</Button>
				</Link>
				<Button variant='primary' className='m-3' onClick={() => { deleteClicked(Post.id) }}>Delete</Button>
			</Card.Body>
		</Card>
	);
}

export default PostCard;
