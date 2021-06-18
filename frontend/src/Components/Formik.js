import React, {useEffect} from 'react'
import { Form, Button, Container,Alert} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory} from 'react-router-dom'

import ContenedorFormulario from './ContenedorFormulario'
import { useFormik } from 'formik';
import { login } from '../Actions/accionUser'
import Loader from '../Components/Loader'


const validate = values => {
    

    const errors = {};
 
    if (!values.password) {
      errors.password= 'Required';
    } else if (values.password.length < 3) {
      errors.password = 'Must be at least 3 caracters';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

  

function FormikLogin() {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {error,loading,userInfo} = userLogin

    const history=useHistory()
    
  useEffect(() => {
   if(userInfo){
     history.push('/')
   }
  }, [userInfo,history])

    const formik = useFormik({
        initialValues: {  
          email: '',
          password: '',
        },
        validate,
        onSubmit: values => {
            dispatch(login(values.email,values.password))
        },
      });
    return (
        
        <ContenedorFormulario>
          {loading ? <Loader/>:
          <Container>
          <h1>Login</h1>
          {error ? <Alert variant='danger'>Credenciales Inválidas</Alert>:null}
          <Form onSubmit={formik.handleSubmit}>
          <Form.Group >
              <Form.Label>Correo Électronico</Form.Label>
              <Form.Control 
                          id="email"
                          name="email"  
                          type="email" 
                          placeholder="Enter email" 
                          onChange={formik.handleChange} 
                          value={formik.values.email}
                          />
              <Form.Text className="text-muted">
              Nunca compartiremos tu email con nadie.
              </Form.Text>
              {formik.errors.email ? <Alert variant='info'>{formik.errors.email}</Alert> : null}
          </Form.Group>

          <Form.Group  className="py-2">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                  id="password"
                  name="password"   
                  type="password" 
                  placeholder="Password" 
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  />
          </Form.Group>
          {formik.errors.password ? <Alert variant='info'>{formik.errors.password}</Alert> : null}
          <Button  variant="primary" type="submit">
              Ok
          </Button>
          </Form>
         
      </Container>
          }
            
        </ContenedorFormulario>
        
        
    )
}

export default FormikLogin
