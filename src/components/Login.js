import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';

const Login = () => {
    return(
        <Container className='mt-5'>
            <h1>Login</h1>
            <Form>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Control type='email' placeholder='Enter email'/>
                </Form.Group>
                <Form.Group controlId='formBasicPassword' className='mt-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password'/>
                </Form.Group>
            </Form>

            <Button variant='primary' type='submit' className='mt-3'>
                Login
            </Button>
        </Container>
    );
}

export default Login;