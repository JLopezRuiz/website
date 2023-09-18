import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Tutoring from './components/pages/tutoring/Tutoring';
import Footer from './components/footer/Footer';

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutoring" element={<Tutoring />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
