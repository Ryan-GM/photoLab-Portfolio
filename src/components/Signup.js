import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';

const Signup = () =>{
    return(
        <Container className='mt-5'>
            <h1>Signup</h1>
            <Form>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email'/>
                </Form.Group>

                <Form.Group controlId='formBasicPassword' className='mt-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password'/>
                </Form.Group>
                <Button variant='primary' type='submit' className='mt-3'>
                    Signup
                </Button>
            </Form>
        </Container>
    );
}

export default Signup;