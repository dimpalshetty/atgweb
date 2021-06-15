import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whole from '../images/whole.png';
import '../components/body.css';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Body() {
  return (


<div className="PostLink">
 <nav class="navbar navbar-expand-lg pl-md-5 ">
    <div class="container" id="link">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <a class="nav-link" href="#">ALL POSTS(32)</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="##">ARTICLE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="##">EVENT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link "  href="##">EDUCATION</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="##">JOB</a>
        </li>
      </ul>
    </div>
  </nav> 
  
</div> 
  
    
   
  )
}


export default Body;