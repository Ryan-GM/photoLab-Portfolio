import React, {useState} from 'react';
import { Container, Row, Col, Button, Tabs, Tab, Card, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UploadButton from '../components/UploadButton';
import { FaHeart, FaSave, FaComment } from 'react-icons/fa';


const initialFeaturedProjects = {
    people: [
        { id: 1, title: 'People Photo 1', imgUrl: '/assets/imgs/people/images.jpg' },
        { id: 2, title: 'People Photo 2', imgUrl: '/assets/imgs/people/kenia-strassenszene-nairobi-1920-data.jpg' },
        { id: 3, title: 'People Photo 3', imgUrl: '/assets/imgs/people/Malaika-Firth-Prada.jpg' },
        { id: 4, title: 'People Photo 4', imgUrl: '/assets/imgs/people/People-walk-at-a-taxi-rank-JBG.jpeg' },
        { id: 5, title: 'People Photo 3', imgUrl: '/assets/imgs/people/unnamed.jpg' },
        { id: 6, title: 'People Photo 4', imgUrl: '/assets/imgs/people/zulu-kids.jpg' },
    ],
    nature: [
        { id: 7, title: 'Nature Photo 1', imgUrl: '/assets/imgs/nature/6-Lake-nakuru.jpg' },
        { id: 8, title: 'Nature Photo 2', imgUrl: '/assets/imgs/nature/386104-svetik.jpg' },
        { id: 9, title: 'Nature Photo 3', imgUrl: '/assets/imgs/nature/Aberdare.jpeg' },
        { id: 10, title: 'Nature Photo 4', imgUrl: '/assets/imgs/nature/istockphoto-1074106404-612x612.jpg' },
        { id: 11, title: 'Nature Photo 5', imgUrl: '/assets/imgs/nature/kenya-2110743_1280.jpg' },
        { id: 12, title: 'Nature Photo 6', imgUrl: '/assets/imgs/nature/Walk in Masai Mara-mobile.jpg' },
    ],
    adventure: [
        { id: 13, title: 'Adventure Photo 1', imgUrl: '/assets/imgs/adventure/kayacking.jpg' },
        { id: 14, title: 'Adventure Photo 2', imgUrl: '/assets/imgs/adventure/kenyan-adventures.jpeg' },
        { id: 15, title: 'Adventure Photo 1', imgUrl: '/assets/imgs/adventure/many-people.jpeg' },
        { id: 16, title: 'Adventure Photo 2', imgUrl: '/assets/imgs/adventure/motor-tours.jpg' },
        { id: 17, title: 'Adventure Photo 1', imgUrl: '/assets/imgs/adventure/paragliding.jpg' },
        { id: 18, title: 'Adventure Photo 2', imgUrl: '/assets/imgs/adventure/sun-jumping.jpg' },
    ],
};

const HomePage = () =>{
    const [key, setKey] = useState('people');
    const [featuredProjects, setFeaturedProjects] = useState(initialFeaturedProjects);
    const [likes, setLikes] = useState({});
    const [favorites, setFavorites] = useState({});
    const [comments, setComments] = useState({});
    const [showModal, setShowModal] = useState({});
    const [newCategory, setNewCategory] = useState('');
    const [newCategoryImage, setNewCategoryImage] = useState(null);
    const [showComments, setShowComments] = useState({});

    const handleLike = (id) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [id]: (prevLikes[id] || 0) +1,
        }));
    };

    const handleFavorite = (id) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [id]: !prevFavorites[id],
        }));
    };

    const handleComment = (id, comment) =>{
        setComments((prevComments)=> ({
            ...prevComments,
            [id]: [...(prevComments[id] || []), comment]
        }));
    };

    const handleAddCategory = () =>{
        setFeaturedProjects((prevProjects) => ({
            ...prevProjects,
            [newCategory]: [],
        }));
        setKey(newCategory);
        setShowModal(false);
        setNewCategory('');
    };

    const handleUploadImage = (category) =>{
        if(newCategoryImage){
            setFeaturedProjects((prevProjects) => ({
                ...prevProjects,
                [category]: [
                    ...prevProjects[category],
                    {id: Date.now(), title: `${category} Photo,`, imgUrl: URL.createObjectURL(newCategoryImage)},
                ],
            }));
            setNewCategoryImage(null);
        }
    };

    const handleToggleComments = (id) => {
        setShowComments((prevShowComments) => ({
            ...prevShowComments,
            [id]: !prevShowComments[id],
        }));
    };

    const renderCard = (project) => (
        <Col key={project.id} md={4} className="mb-4">
            <Card>
                <Card.Img variant="top" src={project.imgUrl} onError={(e) => console.error(`Error loading image: ${e.target.src}`)} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Button variant="link" onClick={() => handleLike(project.id)}>
                        <FaHeart className="me-2 mr-1" /> {likes[project.id] || 0}
                    </Button>
                    <Button variant="link" onClick={() => handleFavorite(project.id)}>
                        <FaSave className={favorites[project.id] ? 'text-success' : ''} />
                    </Button>
                    <Button variant='link' onClick={() => handleToggleComments(project.id)}>
                        <FaComment/>
                    </Button>
                    {showComments[project.id] && (
                        <>
                        <Form className="mt-3" onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.target;
                                const comment = form.elements.comment.value;
                                handleComment(project.id, comment);
                                form.reset();
                            }}>
                                <Form.Group controlId={`comment-${project.id}`}>
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control type="text" name="comment" placeholder="Add a comment..." />
                                </Form.Group>
                                <Button type="submit" variant="primary" className="mt-2">Submit</Button>
                            </Form>
                            <div className="mt-3">
                                {comments[project.id]?.map((comment, index) => (
                                    <div key={index} className="mb-2">
                                        <strong>Comment {index + 1}:</strong> {comment}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    
                </Card.Body>
            </Card>
        </Col>
    );

    return (
        <Container className="mt-5">
            <Row className="align-items-center">
                <Col md={6}>
                    <h1>Welcome to Photo Lab</h1>
                    <p>Save your daily photo, create your special photobook.</p>
                    <p>
                        <Button as={Link} to="/login" variant="secondary" className="ms-2">Signed Up?</Button>
                    </p>
                </Col>
                <Col md={6}>
                    {/* <UploadButton /> */}
                </Col>
            </Row>
            <h2 className="mt-5">Featured Projects</h2>
            <Tabs id="featured-projects-tabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                {Object.keys(featuredProjects).map((category) => (
                    <Tab eventKey={category} title={category.charAt(0).toUpperCase() + category.slice(1)} key={category}>
                        <Row>
                            {featuredProjects[category].map(renderCard)}
                            <Col md={4} className="mb-4">
                                <Card>
                                    <Card.Body>
                                        <Form onSubmit={(e) => {
                                            e.preventDefault();
                                            handleUploadImage(category);
                                        }}>
                                            <Form.Group controlId={`upload-${category}`}>
                                                <Form.Label>Upload Image</Form.Label>
                                                <Form.Control type="file" onChange={(e) => setNewCategoryImage(e.target.files[0])} />
                                            </Form.Group>
                                            <Button type="submit" variant="primary" className="mt-2">Upload</Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Tab>
                ))}
                <Tab eventKey="add" title="Add Category">
                    <Button variant="outline-primary" onClick={() => setShowModal(true)}>Add New Category</Button>
                </Tab>
            </Tabs>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        handleAddCategory();
                    }}>
                        <Form.Group controlId="new-category">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                        </Form.Group>
                        <Button type="submit" variant="primary" className="mt-3">Add</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default HomePage;