import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card1 from '../images/card1.png';
import Profile from '../images/profile.png';
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



function Body() {
  const [key, setKey] = useState('home');

  return (

    <Container style={{ paddingLeft: 10 }}  >
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
              <Card.Title style={{ fontSize: 10 }}>✍️ Article </Card.Title>
              <div class="row row-xs">
                <div>
                  <Card.Title style={{ paddingTop: 5, width: 500, fontWeight: 700, }} >What if famous brands had regular fonts? Meet RegulaBrands!</Card.Title> </div>
                <div className="more"><MoreHorizIcon /></div>
              </div>
              <Card.Text style={{ fontSize: 15, color: "#5C5C5C" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum...
              </Card.Text>
              <div class="container">
                <div class="row" >
                  {/* <img src={Profile} className="profile" /> */}
                  <h2>he</h2> </div> </div>
            </Card.Body>
          </Card>

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