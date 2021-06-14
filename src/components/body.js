import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whole from '../images/whole.png';
import '../components/navbar.css';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Body() {
    return (

        <div className="list">
        <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      </div>
    )
}


export default Body;