import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Header from './components/header.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (

<div className="app">
  <Navbar/>
  <Header/>
</div>
  );
}

export default App;
