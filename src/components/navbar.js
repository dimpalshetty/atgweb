import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whole from '../images/whole.png';
import atg from '../images/atg.png';
import google from '../images/google.png';
import facebook from '../images/facebook.png';
import '../components/navbar.css';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { FaSistrix } from 'react-icons/fa';
import { Container } from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import SignIn from '../components/sigin';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';




function Navbar() {



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [show, setShow] = useState(false);

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    return (

        <nav class="navbar navbar-expand-md ">
            <div class="container-fluid">
                <div class="navbar-collapse collapse w-100 order-4 order-md-0 dual-collapse2">
                    <img src={whole} className="icon" /> </div>

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

                       <p className="para">Create Account. </p>  <a className="Dropdown" href="#" >



                            <Dropdown>
                                <Dropdown.Toggle style={{ fontWeight: 500, fontSize: 15, marginBottom:10  }} onClick={handleShow} variant="none" id="dropdown-basic">
                                    It's Free <ArrowDropDownIcon />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </a> 


                    </div>



                </div>
            </div>

            <Modal size="lg" show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: 14, color: '#008A45', justifyContent: 'center', textAlign: 'center', alignItems: 'center', paddingLeft: 30 }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <h2>Create Account</h2>
                            <Row className="justify-content-lg-center">

                                <Col lg={6}><TextField fullWidth id="filled-full-width" label="First Name" variant="outlined" /> </Col>
                                <Col lg={6}><TextField id="outlined-basic" label="First Name" variant="outlined" /> </Col>


                            </Row>
                            <Row>
                                <Col lg={12}><TextField fullWidth id="outlined" label="First Name" variant="outlined" /> </Col>
                            </Row>
                            <Row>
                                <Col lg={12}> <FormControl fullWidth variant="outlined">
                                    <InputLabel >Password</InputLabel>
                                    <OutlinedInput
                                        id="filled-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                </Col>

                            </Row>
                            <Row>
                                <Col lg={12}> <FormControl fullWidth variant="outlined">
                                    <InputLabel >Confirm Password</InputLabel>
                                    <OutlinedInput
                                        id="filled-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                </Col>

                            </Row>
                            <br />
                            <Row styles={{ paddingTop: 50 }}>
                                <Col><Button styles={{ borderRadius: 20, paddingTop: 20 }} variant="primary" size="md" block>
                                    Create Account
                                </Button></Col>
                            </Row>
                            <br />
                            <Row>
                                <Col><Button styles={{ fontSize: 20 }} variant="outline-secondary" size="md" block>
                                    <img src={facebook} /> Sign Up With Facebook
                                </Button></Col>
                            </Row>
                            <br />
                            <Row>
                                <Col><Button styles={{ borderRadius: 20 }} variant="outline-secondary" size="md" block>
                                    <img src={google} /> Sign Up With Google
                                </Button></Col>
                            </Row>
                        </Col>
                        <Col>
                            <p>  Already have an account? Sign In </p>
                            <img src={atg} />
                            <p>By signing up, you agree to our Terms & conditions, Privacy policy </p>
                        </Col>


                    </Row>


                </Modal.Body>

            </Modal>
        </nav>



    )
}


export default Navbar;