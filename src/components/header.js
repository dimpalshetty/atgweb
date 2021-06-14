import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import header from '../images/header.png';
import '../components/header.css';

function Header() {
    return (
        
        <div className="imagehead">
        <div className="black">
            <img src={header} className="computerhead" />
            <h1 className="CS">Computer Engineering</h1>
            <h3 className="info">142,765 Computer Engineers follow this </h3>
            </div>
           
       
        </div>
    )
}


export default Header;
