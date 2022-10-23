import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route, redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import About from './components/About/about';

function App() {
  return (
    <>
     <Router>
       <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
       </Routes>
     </Router>
    </>
  );
}

export default App;
