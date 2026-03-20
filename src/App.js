import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GiftCardPage from './pages/GiftCardPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/om-mig" element={<AboutPage />} />
        <Route path="/koeb-gavekort" element={<GiftCardPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
