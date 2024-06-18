import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

const UploadButton = () => {
    const[show, setShow] = useState(false);
    const [file, setFile] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleUpload = () => {
        console.log('Uploading File:', file);
        handleClose();
    };

    return(
        <>
        <Button variant='primary' onClick={handleShow}>
            Upload Image
            </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Upload Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='formFile'>
                        <Form.Label>Choose an image to upload</Form.Label>
                        <Form.Control type='file' onChange={handleFileChange}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                    Close
                </Button>
                <Button variant='primary' onClick={handleUpload}>
                    Upload
                </Button>
            </Modal.Footer>
        </Modal>
            </>
    );
};

export default UploadButton;