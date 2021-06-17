import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card1 from '../images/card1.png';
import Card2 from '../images/card2.png';
import Profile from '../images/profile.png';
import Profile2 from '../images/profile2.png';
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
import DropdownButton from 'react-bootstrap/DropdownButton'


function Body() {
  const [key, setKey] = useState('home');

  return (

    <Container style={{ paddingLeft: 40 }}  >
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
              <Card className="postCard" style={{ width: '40rem', objectFit: 'cover' }}>
                <Card.Img variant="top" src={Card1} />
                <Card.Body>
                  <Card.Title style={{ fontSize: 10, paddingLeft: 15, }}>✍️ Article </Card.Title>
                  <Container>
                    <Row>
                      <Col lg={11}>
                        <Card.Title style={{ paddingTop: 5, width: 500, fontWeight: 700, }} >What if famous brands had regular fonts? Meet RegulaBrands!</Card.Title>
                      </Col>
                      <Col lg={1} > 
                      <div class="dropdown">

  
 
  <a  type="button" id="dropdownMenu2" data-toggle="dropdown"
  aria-haspopup="true" aria-expanded="false">hey</a>
    

  <div class="dropdown-menu dropdown-primary">
    <a class="dropdown-item" href="#">hey&nbsp;&nbsp;Pay</a>
    <a class="dropdown-item" href="#">hey&nbsp;&nbsp;Disable alertss</a>
    <a class="dropdown-item" href="#">hey&nbsp;&nbsp;Check mail</a>
  </div>
</div>
                      </Col>
                    </Row>
                  </Container>
                  <Card.Text style={{ fontSize: 15, color: "#5C5C5C", paddingLeft: 15, overflow: 'hidden' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum...
                  </Card.Text>
                  <Row style={{justifyContent:'space-between', paddingTop: 5}}>
                    <Col lg={1}>    <img src={Profile} />
                    </Col>
                    <Col lg={3} style={{ alignItems: 'center', paddingTop:8, fontWeight: 700, fontSize: 15 }}><p>Sarthak Kamra</p></Col>
                    <Col md={{ span:1, offset: 1 }}> </Col>
                    <Col lg={4} style={{paddingTop: 5}}><Row lg={2}><VisibilityIcon style={{ color: 'grey' , marginRight: -30, paddingTop: 5, }} />
                      <p className="Views">1.4k Views</p></Row>
                    </Col>
                    <Col lg={2}><Button style={{ backgroundColor: '#EDEEF0', fontSize: 10}} variant="contained"><ShareIcon style={{ color: 'black' }} /></Button></Col>
                  </Row>
                </Card.Body>
              </Card>

              <br/>
              <Card className="postCard" style={{ width: '40rem', objectFit: 'cover' }}>
                <Card.Img variant="top" src={Card2} />
                <Card.Body>
                  <Card.Title style={{ fontSize: 10, paddingLeft: 15, }}>🔬 Education </Card.Title>
                  <Container>
                    <Row>
                      <Col>
                        <Card.Title style={{ paddingTop: 5, width: 500, fontWeight: 700, }} >Tax Benefits for Investment under National Pension Scheme launched by Government</Card.Title>
                      </Col>
                      <Col> <MoreHorizIcon /> </Col>
                    </Row>
                  </Container>
                  <Card.Text style={{ fontSize: 15, color: "#5C5C5C", paddingLeft: 15, overflow: 'hidden' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum...
                  </Card.Text>
                  <Row style={{justifyContent:'space-between', paddingTop: 5}}>
                    <Col lg={1}>    <img src={Profile2} />
                    </Col>
                    <Col lg={7} style={{ alignItems: 'center', paddingTop:8, fontWeight: 700, fontSize: 15 }}><p>Sarah West</p></Col>
                    <Col lg={3} style={{paddingTop: 5}}><Row lg={1}><VisibilityIcon style={{ color: 'grey' , marginRight: -30, paddingTop: 5, }} />
                      <p className="Views">1.4k Views</p></Row>
                    </Col>
                    <Col lg={1}>

                    
                    <Button size="sm" style={{ backgroundColor: '#EDEEF0', width: 40}} variant="contained"><ShareIcon style={{ color: 'black' }} />
                    
                    </Button></Col>
                  </Row>
                </Card.Body>
              </Card>
              <br/>
              <Card className="postCard" style={{ width: '40rem', objectFit: 'cover' }}>
                <Card.Img variant="top" src={Card1} />
                <Card.Body>
                  <Card.Title style={{ fontSize: 10, paddingLeft: 15, }}>✍️ Article </Card.Title>
                  <Container>
                    <Row>
                      <Col>
                        <Card.Title style={{ paddingTop: 5, width: 500, fontWeight: 700, }} >Finance & Investment Elite Social Mixer @Lujiazui</Card.Title>
                      </Col>
                      <Col> <MoreHorizIcon /> </Col>
                    </Row>
                  </Container>
                  <Card.Text style={{ fontSize: 15, color: "#5C5C5C", paddingLeft: 15, overflow: 'hidden' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum...
                  </Card.Text>
                  <Row style={{justifyContent:'space-between', paddingTop: 5}}>
                    <Col lg={1}>    <img src={Profile} />
                    </Col>
                    <Col lg={3} style={{ alignItems: 'center', paddingTop:8, fontWeight: 700, fontSize: 15 }}><p>Sarthak Kamra</p></Col>
                    <Col md={{ span:1, offset: 1 }}> </Col>
                    <Col lg={4} style={{paddingTop: 5}}><Row lg={2}><VisibilityIcon style={{ color: 'grey' , marginRight: -30, paddingTop: 5, }} />
                      <p className="Views">1.4k Views</p></Row>
                    </Col>
                    <Col lg={2}><Button style={{ backgroundColor: '#EDEEF0', fontSize: 10}} variant="contained"><ShareIcon style={{ color: 'black' }} /></Button></Col>
                  </Row>
                </Card.Body>
              </Card>
              <br/>
              <Card className="postCard" style={{ width: '40rem', objectFit: 'cover' }}>
                <Card.Img variant="top" src={Card1} />
                <Card.Body>
                  <Card.Title style={{ fontSize: 10, paddingLeft: 15, }}>✍️ Article </Card.Title>
                  <Container>
                    <Row>
                      <Col>
                        <Card.Title style={{ paddingTop: 5, width: 500, fontWeight: 700, }} >What if famous brands had regular fonts? Meet RegulaBrands!</Card.Title>
                      </Col>
                      <Col> <MoreHorizIcon /> </Col>
                    </Row>
                  </Container>
                  <Card.Text style={{ fontSize: 15, color: "#5C5C5C", paddingLeft: 15, overflow: 'hidden' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum...
                  </Card.Text>
                  <Row style={{justifyContent:'space-between', paddingTop: 5}}>
                    <Col lg={1}>    <img src={Profile} />
                    </Col>
                    <Col lg={3} style={{ alignItems: 'center', paddingTop:8, fontWeight: 700, fontSize: 15 }}><p>Sarthak Kamra</p></Col>
                    <Col md={{ span:1, offset: 1 }}> </Col>
                    <Col lg={4} style={{paddingTop: 5, right: 20,}}><Row lg={2} style={{paddingRight: 10}}><VisibilityIcon style={{ color: 'grey' , marginRight: -30, paddingTop: 5, }} />
                      <p className="Views">1.4k Views</p></Row>
                    </Col>
                    <Col lg={2}><Button style={{ backgroundColor: '#EDEEF0', fontSize: 10}} variant="contained"><ShareIcon style={{ color: 'black' }} /></Button></Col>
                  </Row>
                </Card.Body>
              </Card>
              <br/>
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

        <Col className="coldissapear"> <h2>hi</h2></Col>

      </Row>
    </Container>

  );
}





export default Body;