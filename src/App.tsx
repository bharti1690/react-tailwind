import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route, redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/about';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
     <Router>
       <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
       </Routes>
     </Router>
    </>
  );
}

export default App;
