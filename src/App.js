import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ComparePage from './pages/ComparePage';
import SuperTrumpPage from './pages/SuperTrumpPage'; // Ensure this import is correct

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/super_trump" element={<SuperTrumpPage />} /> {/* Ensure this route is correct */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
