import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import header from '../images/header.png';
import '../components/header.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        
        <div class="container-fluid">
        <div className="black">
            <img src={header} className="computerhead" />
            <h1 className="CS">Computer Engineering</h1>
            <h3 className="info">142,765 Computer Engineers follow this </h3>
            </div>
           
       
        </div>
    )
}


export default Header;
