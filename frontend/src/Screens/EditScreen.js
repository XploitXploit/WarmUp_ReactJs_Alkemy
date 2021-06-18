import React,{useState} from "react";
import { useFormik } from "formik";
import { Form, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editPost,detailPost } from "../Actions/postsActions";
import MensajeAlerta from "../Components/MensajeAlerta";
import ContenedorFormulario from "../Components/ContenedorFormulario";

const validate = (values) => {
	const errors = {};

	if (!values.title) {
		errors.title = "Required";
	} else if (values.title.length < 10) {
		errors.title = "Must be at least 10 caracters";
	}

	if (!values.body) {
		errors.body = "Required";
	} else if (values.body.length < 15) {
		errors.body = "Must be at least 15 caracters";
	}

	return errors;
};

function EditScreen({match}) {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const detailsPost = useSelector((state) => state.postDetail);
    const { post, loading, error } = detailsPost;

    const formik = useFormik({
        initialValues: {
        title: "",
        body: "",
    },
		validate,
		onSubmit: (values) => {
			dispatch(editPost(match.params.id,formik.values.title, formik.values.body));
			handleShow();
		},
	});

	return (
		<ContenedorFormulario>
			<h1>Edit a Post</h1>
			<Form onSubmit={formik.handleSubmit}>
				<Form.Group>
					<Form.Label htmlFor='title'>Title</Form.Label>

					<Form.Control
                        id='title'
                        name='title'
                        defaultValue={post.title}
                        onChange={formik.handleChange}
					/>
					{formik.errors.title && (
						<MensajeAlerta variant='info'>{formik.errors.title}</MensajeAlerta>
					)}
				</Form.Group>

				<Form.Group>
					<Form.Label htmlFor='body'>Body</Form.Label>

					<Form.Control
						id='body'
                        name='body'
                        defaultValue={post.body}
						onChange={formik.handleChange}
					/>
					{formik.errors.body && (
						<MensajeAlerta variant='info'>{formik.errors.body}</MensajeAlerta>
					)}
				</Form.Group>

				<Button type='submit'>Submit</Button>
			</Form>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Post Edited</Modal.Title>
				</Modal.Header>
				{error ? (
					<Modal.Body>An error happened: {error}</Modal.Body>
				) : (
					<Modal.Body>
						You Edited a post: <br /> Id:{post.id} <br /> Title:{formik.values.title}{" "}
						<br /> Body:{formik.values.body}
					</Modal.Body>
				)}

				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</ContenedorFormulario>
	);
}

export default EditScreen;
