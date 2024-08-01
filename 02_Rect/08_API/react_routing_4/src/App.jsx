// App.jsx


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Art from './components/Art';


const App = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/art/:id" element={<Art />} />
    </Routes>
  </Router>
);


export default App;