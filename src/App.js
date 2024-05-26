import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';

const photos = [
  {id: 1, url: '', title: ''},
  {id: 2, url: '', title: ''},
];

const projects = [
  { id: 1, title: 'Project 1', photos: [{ id: 1, url: 'path_to_photo1.jpg', title: 'Photo 1' }] },
    { id: 2, title: 'Project 2', photos: [{ id: 2, url: 'path_to_photo2.jpg', title: 'Photo 2' }] },
];

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage photos={photos}/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<ProjectsPage projects={projects}/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage photos={photos} />} />
      </Routes>
    </Router>
  );
}

export default App;
