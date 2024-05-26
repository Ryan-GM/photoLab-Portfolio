import React from 'react';
import PhotoGallery from '../components/PhotoGallery';

const HomePage = ({photos}) =>{
    return(
        <div>
            <h1>Welcome to My Photo Lab</h1>
            <PhotoGallery photos={photos}/>
        </div>
    )
}

export default HomePage;