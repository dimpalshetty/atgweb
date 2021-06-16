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
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';





function Body() {
  const [key, setKey] = useState('home');

  return (
    <div class="container">
      <div class="row">

        <div class="col col-auto" >
          <div className="feed">
            <div className="PostLink">
              <Tabs
                id="controlled-tab-example "
                className="hello"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="home" title="All Posts(32)">
                  <br />
                  <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={Card1} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: 10 }}>✍️ Article</Card.Title>
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
                      <img src={Profile} className="profile" />
                      <h2>he</h2> </div> </div>
                    </Card.Body>
                  </Card>
                </Tab>
                <Tab eventKey="profile" title="Events">
                  Hi
                </Tab>
                <Tab eventKey="articles" title="Articles">
                  Hi
                </Tab>
                <Tab eventKey="edu" title="Education">
                  Hi
                </Tab>
                <Tab eventKey="job" title="Job">
                  Hi
                </Tab>
              </Tabs>

            </div>
          </div>
        </div>
        <div class="col-sm">

          <div class="row">
            <div class="btn-group">
              <button class="btn btn-light btn-block dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Write A Post
              </button>
              <ul class="dropdown-menu">
                ...
              </ul>
            </div>

            <div className="singlebutton"><button type="button" data-toggle="collapse" class="btn btn-primary "> <GroupAddIcon /> Join A Group </button> </div>

          </div>
        </div>
      </div>
    </div>
  );
}



export default Body;