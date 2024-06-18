import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <NavigationBar isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>
      <Routes>
          <Route path="/" element={<HomePage isAuthenticated={isAuthenticated} />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/contact" element={<ContactPage/>}/> 
          <Route path="/login" element={<LoginPage handleLogin={handleLogin}/>} />
      </Routes>
    </Router>
  );
}

export default App;
