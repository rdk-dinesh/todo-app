import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Oops! Page not found.</p>
      <Link to="/" className="notfound-link">Go Back Home</Link>
    </div>
  );
};

export default NotFoundPage;
