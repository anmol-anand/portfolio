import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import './css/App.css';

function App() {
  const location = useLocation();
  const filterTags = new URLSearchParams(location.search).get('filter_tags');
  const filterTagsArray = filterTags ? filterTags.split(',') : [];

  return (
    <div className="outer-wrapper">
      <Navbar />
      <div className="content-section">
        <Portfolio filter_tags={filterTagsArray} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
