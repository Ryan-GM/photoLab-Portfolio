import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage = ({ projects }) => {
    return (
        <div>
            <Projects projects={projects} />
        </div>
    );
};

export default ProjectsPage;