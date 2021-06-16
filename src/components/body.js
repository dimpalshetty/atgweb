import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whole from '../images/whole.png';
import '../components/body.css';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import useScript from '../useScript';
import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';





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
                <div class="card" >
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
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