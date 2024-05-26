import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';

const Contact = () => {
    return (
       <Container className='mt-5'>
        <h1>Contact</h1>
        <Form>
            <Form.Group controlId='formName'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Enter your name' required />
            </Form.Group>
            <Form.Group controlId='formEmail' className='mt-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter your email' required/>
            </Form.Group>
            <Form.Group controlId='formMessage' className='mt-3'>
                <Form.Label>Message</Form.Label>
                <Form.Control as='textarea' rows={3} placholder='Enter your message' required/>
            </Form.Group>
            <Button variant='primary' type='submit' className='mt-3'>
                Send
            </Button>
        </Form>
       </Container>
    );
};

export default Contact;
