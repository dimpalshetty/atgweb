import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Header from './components/header.js';
import Body from './components/body.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (

<div className="app">
  <Navbar/>
  <Header/>
  <Body/>
</div>
  );
}

export default App;
