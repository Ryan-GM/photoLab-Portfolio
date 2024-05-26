import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoGallery = ({ photos }) => {
    return (
        <div className="photo-gallery">
            {photos.map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </div>
    );
};

export default PhotoGallery;
