import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ComparePage from './pages/ComparePage';
import SuperTrumpPage from './pages/SuperTrumpPage';

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/super_trump" element={<SuperTrumpPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
