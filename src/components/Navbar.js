import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa';

const NavigationBar = () =>{
    const [searchQuery, setSearchQuery] = useState(''); // necessary for managing the search query state.
    const navigate = useNavigate(); // used for navigation after performing a search.

    const handleSearch = (e) =>{
        e.preventDefault();
        if(searchQuery.trim()){
            navigate(`/explore?query=${searchQuery}`);
            setSearchQuery('');
        }
    };

    return(
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand as={Link} to="/">Photo Lab</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Form className='d-flex' onSubmit={handleSearch}>
                        <FormControl type='search' placeholder='Search' className='me-2' aria-label='Search'
                        value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                        <Button variant='outline-success'><FaSearch/></Button>
                    </Form>
                    <Nav>
                        
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;