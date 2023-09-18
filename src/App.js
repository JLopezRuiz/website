import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Tutoring from './components/pages/tutoring/Tutoring';
import Footer from './components/footer/Footer';

const App = () => (
  <div className="App">
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/website" exact element={<Home />} />
        <Route path="/website/about" element={<About />} />
        <Route path="/website/tutoring" element={<Tutoring />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
