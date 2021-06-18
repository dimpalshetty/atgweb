import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card1 from '../images/card1.png';
import Card2 from '../images/card2.png';
import Card3 from '../images/card3.png';
import Profile from '../images/profile.png';
import Profile2 from '../images/profile2.png';
import Profile3 from '../images/profile3.png';
import Profile4 from '../images/profile4.png';
import '../components/body.css';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import useScript from '../useScript';
import { Tab } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MediaQuery from 'react-responsive'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import CreateIcon from '@material-ui/icons/Create';
import TodayIcon from '@material-ui/icons/Today';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));




function Body() {
  const classes = useStyles();
  const [key, setKey] = useState('home');
  

  return (
   
    <Container className="PostLink" style={{ paddingLeft: 40, paddingTop: 20 }}  >
      <Row>
        <Col>
          <Tabs
            id="controlled-tab"
            style={{ flex: 1, }}
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >

            <Tab tabClassName="ok" eventKey="home" title="All Posts(32)" >
              <br />
              <Card bsPrefix="postCard" style={{ width: '40rem', objectFit: 'cover' }}>
                <Card.Img   variant="top" src={Card1} />
                <Card.Body >
                  <Card.Title  style={{ paddingTop: 5, width: 480, fontWeight: 500, fontSize: 14, paddingLeft: 8 }}>✍️ Article </Card.Title>
                  <Container>
                    <Row>
                      <Col lg={11}>
                        <Card.Title style={{ paddingTop: 5, width: 500, fontWeight: 700, }} >What if famous brands had regular fonts? Meet RegulaBrands!</Card.Title>
                      </Col>
                      <Col lg={1} >
                        <Dropdown>
                          <Dropdown.Toggle className="buttons" variant="none" id="dropdown-basic">
                            <MoreHorizIcon />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>
                  </Container>
                  <Card.Text style={{ fontSize: 15, color: "#5C5C5C", paddingLeft: 15, overflow: 'hidden' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum...
                  </Card.Text>
                  <Row style={{ justifyContent: 'space-between', paddingTop: 5 }}>
                    <Col lg={1} sm={1}>    <img className="sarthak" src={Profile} />
                    </Col>
                    <Col  lg={7} sm={11} style={{ alignItems: 'center', paddingTop: 8, fontWeight: 700, fontSize: 15 }}>Sarthak Kamra</Col>
                    <Col md={{ span: 1, offset: 1 }}> </Col>
                    <Col lg={3} style={{ paddingTop: 5 }}><Row lg={1}><VisibilityIcon style={{ color: 'grey', marginRight: -30, paddingTop: 5, }} />
                      <p className="Views">1.4k Views</p></Row>
                    </Col>
                    <Col lg={1}>


                      <Button size="sm" style={{ backgroundColor: '#EDEEF0', width: 40 }} variant="contained"><ShareIcon style={{ color: 'black' }} />

                      </Button></Col>
                  </Row>
                </Card.Body>
              </Card>
              
           

              <br />
              <Card className="postCard" style={{ width: '40rem', objectFit: 'cover' }}>
                <Card.Img variant="top" src={Card2} />
                <Card.Body>
                  <Card.Title style={{ paddingTop: 5, width: 480, fontWeight: 700, fontSize: 14, paddingLeft: 8 }}>🔬 Education </Card.Title>
                  <Container>
                    <Row>
                      <Col>
                        <Card.Title style={{ paddingTop: 5, width: 480, fontWeight: 700, }} >Tax Benefits for Investment under National Pension Scheme launched by Government</Card.Title>
                      </Col>
                      <Col lg={1} ></Col>
                      <Dropdown>
                        <Dropdown.Toggle className="buttons" variant="none" id="dropdown-basic">
                          <MoreHorizIcon />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Col />
                    </Row>
                  </Container>
                  <Card.Text style={{ fontSize: 15, color: "#5C5C5C", paddingLeft: 15, overflow: 'hidden' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum...
                  </Card.Text>
                  <Row style={{ justifyContent: 'space-between', paddingTop: 5 }}>
                    <Col lg={1}>    <img src={Profile2} />
                    </Col>
                    <Col lg={7} style={{ alignItems: 'center', paddingTop: 8, fontWeight: 700, fontSize: 15 }}><p>Sarah West</p></Col>
                    <Col lg={3} style={{ paddingTop: 5 }}><Row lg={1}><VisibilityIcon style={{ color: 'grey', marginRight: -30, paddingTop: 5, }} />
                      <p className="Views">1.4k Views</p></Row>
                    </Col>
                    <Col lg={1}>


                      <Button size="sm" style={{ backgroundColor: '#EDEEF0', width: 40 }} variant="contained"><ShareIcon style={{ color: 'black' }} />

                      </Button></Col>
                  </Row>
                </Card.Body>
              </Card>
              <br />
              <Card className="postCard" style={{ width: '40rem', objectFit: 'cover' }}>
                <Card.Img variant="top" src={Card3} />
                <Card.Body>
                  <Card.Title style={{ fontSize: 14,  fontWeight: 700, paddingLeft: 8 }}>📆 Meetup </Card.Title>
                  <Container>
                    <Row>
                      <Col>
                        <Card.Title style={{ paddingTop: 5, width: 480, fontWeight: 700, }} >Finance & Investment Elite Social Mixer @Lujiazui</Card.Title>
                      </Col>
                      <Col lg={1} ></Col>
                      <Dropdown>
                        <Dropdown.Toggle className="buttons" variant="none" id="dropdown-basic">
                          <MoreHorizIcon />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Col />
                    </Row>
                    <Row>

                      <Col lg={6}>  <TodayIcon /> Fri, 12 Oct 2018 </Col>
                      <Col lg={6}>
                        <TodayIcon /> Fri, 12 Oct 2018
                      </Col>

                    </Row>
                  </Container>
                  <Card.Text style={{ marginTop: 15, borderRadius: 20, borderWidth: 2, borderColor: '#000000' }}>
                    <Button style={{ color: '#E56135' }} variant="outline-secondary" size="lg" block>
                      Block level button
                    </Button>
                  </Card.Text>
                  <Row style={{ justifyContent: 'space-between', paddingTop: 5 }}>
                    <Col lg={1}>    <img src={Profile3} />
                    </Col>
                    <Col lg={7} style={{ alignItems: 'center', paddingTop: 8, fontWeight: 700, fontSize: 15 }}><p>Ronal </p></Col>
                    <Col lg={3} style={{ paddingTop: 5 }}><Row lg={1}><VisibilityIcon style={{ color: 'grey', marginRight: -30, paddingTop: 5, }} />
                      <p className="Views">1.4k Views</p></Row>
                    </Col>
                    <Col lg={1}>


                      <Button size="sm" style={{ backgroundColor: '#EDEEF0', width: 40 }} variant="contained"><ShareIcon style={{ color: 'black' }} />

                      </Button></Col>
                  </Row>
                </Card.Body>
              </Card>
              <br />
              <Card className="postCard" style={{ width: '40rem', objectFit: 'cover' }}>
              
                <Card.Body>
                  <Card.Title style={{ fontSize: 14,  fontWeight: 700, paddingLeft: 8 }}>💼 Job </Card.Title>
                  <Container>
                    <Row>
                      <Col>
                        <Card.Title style={{ paddingTop: 5, width: 480, fontWeight: 700, }} >Software Developer</Card.Title>
                      </Col>
                      <Col lg={1} ></Col>
                      <Dropdown>
                        <Dropdown.Toggle className="buttons" variant="none" id="dropdown-basic">
                          <MoreHorizIcon />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Col />
                    </Row>
                  </Container>
                  <Card.Text style={{ fontSize: 15, color: "#5C5C5C", paddingLeft: 15, overflow: 'hidden' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum...
                  </Card.Text>
                  <Row style={{ justifyContent: 'space-between', paddingTop: 5 }}>
                    <Col lg={1}>    <img src={Profile4} />
                    </Col>
                    <Col lg={7} style={{ alignItems: 'center', paddingTop: 8, fontWeight: 700, fontSize: 15 }}><p> Joseph Gray</p></Col>
                    <Col lg={3} style={{ paddingTop: 5 }}><Row lg={1}><VisibilityIcon style={{ color: 'grey', marginRight: -30, paddingTop: 5, }} />
                      <p className="Views">1.4k Views</p></Row>
                    </Col>
                    <Col lg={1}>


                      <Button size="sm" style={{ backgroundColor: '#EDEEF0', width: 40 }} variant="contained"><ShareIcon style={{ color: 'black' }} />

                      </Button></Col>
                  </Row>
                </Card.Body>
              </Card>
              <br />
            </Tab>


            <Tab tabClassName="All" eventKey="profile" id="delete" title="Events">
              Hi
            </Tab>

            <Tab tabClassName="All" eventKey="articles" title="Articles">
              Hi
            </Tab>
            <Tab tabClassName="All" eventKey="edu" title="Education">
              Hi
            </Tab>
            <Tab tabClassName="All" eventKey="job" title="Job">
              Hi
            </Tab>


          </Tabs>

        </Col>

        <Col className="coldissapear">
          <Row>

            <Dropdown>
              <Dropdown.Toggle style={{ fontWeight: 500, fontSize: 15 }} variant="light" id="dropdown-basic">
                Write A Post <ArrowDropDownIcon />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>


            <Col><button class="btn btn-primary" type="submit"><GroupAddIcon />  Join Group</button> </Col>

          </Row>



          <Col>
            <Row> <br /> <br /> <br /></Row>
            <Row styles={{ paddingTop: 100 }}>
              <Container styles={{ paddingTop: 50000 }}>

                <LocationOnIcon />
                <TextField
                  className="textfield"
                  fullWidth={false}
                  id="standard-helperText"
                  defaultValue="Noida, India"

                />
                <Button variant="none" ><CreateIcon /> </Button>
                <Row>
                  <Col lg={1}><ErrorOutlineOutlinedIcon style={{ color: '#808080 ' }} /> </Col>
                  <Col lg={8}> <p className="helpertext">  Your location will help us serve better and extend a personalised experience.</p> </Col> </Row>

              </Container>
            </Row>
          </Col>



        </Col>


      </Row>
      <Box display={{ xs: 'block', md: 'none' }}>     <Fab  className={classes.fab} display="none" color="secondary" aria-label="edit">
        <EditIcon />
      </Fab> </Box>
    </Container>

  );
}





export default Body;