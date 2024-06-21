import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Spinner, CardBody } from 'react-bootstrap';
import './ExplorePage.css';
import { FaHeart, FaSave } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const useQuery =() => {
    return new URLSearchParams(useLocation().search);
}

const ExplorePage = () => {
    const query = useQuery();
    const searchQuery = query.get('query') || '';
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);
            try{
                const url = searchQuery ? 'https://api.unsplash.com/search/photos' : 'https://api.unsplash.com/photos';
                const params =searchQuery ? {query: searchQuery, per_page: 12} : {per_page: 12};
                const response = await axios.get(url, {
                    params: params,
                    headers:{
                        Authorization: `Client-ID dAHxX41D_ACU3R1rTmuCDyxuUKxrZaJesPZCM6o4omA`
                    },
                });
                const data = searchQuery ? response.data.results : response.data;
                console.log('API Response:', response.data)
                setPhotos(data);
                setLoading(false);
            } catch(error){
                console.error('Error fetching photos:', error);
                setLoading(false);
            }
        };
        fetchPhotos();
    }, [searchQuery]);
    
    const filteredPhotos = searchQuery
        ? photos.filter(photo =>
              (photo.alt_description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
              (photo.description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
              (photo.title || '').toLowerCase().includes(searchQuery.toLowerCase())
          )
        : photos;

    console.log('Search Query:', searchQuery);
    console.log('Filtered Photos:', filteredPhotos);
    
    return (
        <Container className='mt-5'>
            <h2>Explore</h2>
            {loading ? (
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            ) : (
                <Row>
                    {filteredPhotos.map(photo => (
                        <Col key={photo.id} md='4' className='mb-4'>
                            <Card className='photo-card'>
                                <div className='image-container'>
                                   <Card.Img variant='top' src={photo.urls.small} alt={photo.alt_description} className='photo-img'/> 
                                   <div className='overlay'>
                                    <FaHeart className='icon'/>
                                    <FaSave className='icon'/>
                                   </div>
                                </div> 
                                <CardBody>
                                    <div className='user-info'>
                                        <img src={photo.user.profile_image.small} alt={photo.user.name}/>
                                        <span className='name'>{photo.user.name}</span>
                                    </div>
                                    <div className='metrics'>
                                        <div className='metric'>
                                            <FaHeart className='icon'/>
                                            <span>{photo.likes}</span>
                                        </div>
                                        <div className='metric'>
                                            <FaSave className='icon'/>
                                            <span>{photo.views || 'N/A'}</span>
                                        </div>
                                    </div>
                                    
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default ExplorePage;