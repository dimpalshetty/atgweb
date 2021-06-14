import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whole from '../images/whole.png';
import '../components/navbar.css';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Navbar() {
    return (

        <div className="header">
            <img src={whole} className="icon" />

            <div className="header_search">
                <SearchIcon className="search" />
                <input type="text" placeholder="Search For Your Favourite Groups In ATG" />
            </div>

          
            <p className="create">Create Account. <a href="#" className="free"> It's Free! <ArrowDropDownIcon className="arrow"/> </a></p>
          

        </div>
        // <>
        //     <div className="navbar">
        //         <div className="navbar-container.container" >
        //         <Link className="Link.navbar-logo">
        //         ATG.W
        //           <img src=  {Idk} className="icon"/>
        //           RLD
        //         </Link>

        //         </div>
        //         </div>
        // </>
    )
}


export default Navbar;