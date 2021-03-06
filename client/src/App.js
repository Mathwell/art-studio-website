import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { Image,Nav, Navbar, NavItem, FormGroup, FormControl, Button, Grid, Row, Thumbnail} from "react-bootstrap";
import Routes from './components/routes/Routes';
import { connect } from 'react-redux';
import logo from './images/logo.jpg'

class App extends Component {
  render() {
    var icon = (
      <span className="logo">
        <a href="/">
          <img src={logo} height="33" width="33" alt="logo" /></a>
      </span>
    );
    return (
      <div className="app_container">      
      <Grid className="container_main">
        <Row>
        <Navbar fluid collapseOnSelect>
        <div class="container-wrap">
			  <div class="top-menu">
            <Navbar.Header>
             <Navbar.Brand>                           
              {icon} 
             </Navbar.Brand>
             <Navbar.Toggle />
            </Navbar.Header>            
        <Navbar.Collapse>
        <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button type="submit">Submit</Button>
        </Navbar.Form>
          <Nav pullRight>             
            <NavItem >
               <Link to="/about">About</Link>
            </NavItem>            
            <NavItem >
               <Link to="/login">Login</Link>
            </NavItem>            
            
            <NavItem >
               <Link to="/gallery">Gallery</Link>
            </NavItem>  
            
            <NavItem >
               <Link to="/contact">Contact</Link>
            </NavItem>                         
          </Nav>
        </Navbar.Collapse>
     
      </div>
      </div>
       </Navbar>
      <Routes />
      </Row>
      <Row className="image_container">
      </Row>
      </Grid> 
       
      </div>
    );
  }
}

export default App;
