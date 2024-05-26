import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa';

const NavigationBar = () =>{
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) =>{
        e.preventDefault();
        if(searchQuery.trim()){
            navigate(`/search?query=${searchQuery}`);
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
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                    <Form className='d-flex' onSubmit={handleSearch}>
                        <FormControl type='search' placeholder='Search' className='me-2' aria-label='Search'
                        value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                        <Button variant='outline-success'><FaSearch/></Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;