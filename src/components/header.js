import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import header from '../images/header.png';
import '../components/header.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from 'react-bootstrap/Button';



const useStyles = makeStyles(theme => ({
    fab: {
      position: 'fixed',
      top: theme.spacing(2),
      left: theme.spacing(2),
      color: 'black',
      backgroundColor: 'yellow',
    },
  }));

function Header() {
    const classes = useStyles();
    return (
        
        <div class="container-fluid">
        
        <div className="black">
        <div className="CS1"><KeyboardBackspaceIcon></KeyboardBackspaceIcon> </div>
        <div className="follow"> <Button variant="outline-light">Join Group</Button></div>
        
            <img src={header} className="computerhead"  />
            {/* <Box display={{ xs: 'block', md: 'none' }}> <Fab color="default" aria-label="add" className={classes.fab}> 
            <KeyboardBackspaceIcon/>
    
  </Fab> 
  </Box> */}


  
            <h1 className="CS">Computer Engineering </h1>
            
            <h3 className="info">142,765 Computer Engineers follow this </h3>
            </div>
           
       
        </div>
    )
}


export default Header;
