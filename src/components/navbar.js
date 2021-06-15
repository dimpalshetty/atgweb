import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whole from '../images/whole.png';
import '../components/navbar.css';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { FaSistrix } from 'react-icons/fa';
import { Container } from '@material-ui/core';

function Navbar() {
    return (

        <nav class="navbar navbar-expand-md ">
            <div class="container-fluid">

                <img src={whole} className="icon" />


                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <div class="mx-auto order-0">
                        <form class="form-inline  my-lg-0">

                            <FaSistrix className="searchicon" />
                            <input class="form-control mr-sm-2" type="search " placeholder="Search for your ATG Groups" aria-label="Search " />
                        </form>
                    </div>
                </div>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" id="links">
                    <div class="navbar-nav ms-auto">
                        
                        <p className="para">Create Account. <a className="Dropdown" href="#" >Its Free <ArrowDropDownIcon className="arrow" /></a> </p>   
                        

                    </div>
                </div>
            </div>
        </nav>



    )
}


export default Navbar;