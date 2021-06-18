import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function DetailCard({ Post }) {
	return (
		<Card className='my-2'>
			<Card.Body>
                <Card.Title>Title: {Post.title}</Card.Title>
                <Card.Subtitle>User Id: {Post.userId}</Card.Subtitle>
                <Card.Text>Post Id: { Post.id}</Card.Text>
				<Card.Body>{Post.body}</Card.Body>

				<Link to={"/"}>
					<Button variant='primary' className='m-3'>
						Go Back
					</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}

export default DetailCard;
