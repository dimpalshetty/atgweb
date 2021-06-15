import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whole from '../images/whole.png';
import '../components/navbar.css';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { FaSistrix } from 'react-icons/fa';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <img src={whole} className="icon" />
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
             

          
                
                
                <form class="form-inline  my-lg-0">

                    <FaSistrix className="searchicon"/>
                    <input class="form-control mr-sm-2"  type="search " placeholder="Search for your ATG Groups" aria-label="Search " />
                   

                </form>

                <p className="createacc">Create Account. <a href ="#" className="free">Its Free! <ArrowDropDownIcon className="arrow" /></a></p>
            </div>
        </nav>

     
    )
}


export default Navbar;