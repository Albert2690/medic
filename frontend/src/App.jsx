import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import './App.css';

function App() {
  return (
    <Router> 
    <Layout />
  </Router>
  );
}

export default App;
