import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { BlogProvider } from './context/BlogContext';
import HomePage from './pages/HomePage';
import MyPostsPage from './pages/MyPostsPage';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <UserProvider>
        <BlogProvider>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/myposts">My Posts</Link>
          </nav>
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/myposts" element={<MyPostsPage />} />
            </Routes>
          </div>
        </BlogProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
