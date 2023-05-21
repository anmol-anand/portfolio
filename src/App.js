import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Portfolio from './Portfolio';
import Blogs from './Blogs';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='portfolio' element={<Portfolio/>} />
            <Route path='/blogs' element={<Blogs/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
