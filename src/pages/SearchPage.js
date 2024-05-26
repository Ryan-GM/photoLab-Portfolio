import React from 'react';
import {useLocation} from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const SearchPage = ({photos}) =>{
    const query =useQuery();
    const searchQuery = query.get('query');
    const filteredPhotos = photos.filter(photo =>
      photo.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div>
            <h1>Search Results</h1>
            <PhotoGallery photos={filteredPhotos}/>
        </div>
    );
}

export default SearchPage;