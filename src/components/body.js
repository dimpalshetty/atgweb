import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whole from '../images/whole.png';
import '../components/navbar.css';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Body() {
  return (


  
    <nav class="navbar navbar-expand-lg ">
    <div class="container ml-lg-5" >
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">ALL POSTS(32) <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ARTICLE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">EVENT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">EDUCATION</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">EDUCATION</a>
        </li>
      </ul>
    </div>
  </nav>

   
  )
}


export default Body;