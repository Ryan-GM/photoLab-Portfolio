import React from 'react';
import PhotoGallery from './PhotoGallery';

const Projects = ({ projects }) => {
    return (
        <div className="projects">
            {projects.map(project => (
                <div key={project.id} className="project">
                    <h2>{project.title}</h2>
                    <PhotoGallery photos={project.photos} />
                </div>
            ))}
        </div>
    );
};

export default Projects;
