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
      <span class="logo">
        <a href="/">
          <img src={logo} height="33" width="33" alt="logo" /></a>
      </span>
    );
    return (
      <div className="app_container">      
      <Grid className="container_main">
        <Row>
        <Navbar fluid collapseOnSelect>
            <Navbar.Header>
             <Navbar.Brand>
             {/* <Link to="/">
             <Image src={logo} circle />
             </Link>  */}
              
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
               <Link to="/theme">Theme</Link>
            </NavItem>                        
            <NavItem >
               <Link to="/gallery">Gallery</Link>
            </NavItem>        
            <NavItem >
               <Link to="/upload">Upload</Link>
            </NavItem>                        
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
      </Row>
      <Row className="image_container">
      </Row>
      </Grid> 
         {/* <ArtworkInput store={this.props.store} />
         <Artworks store={this.props.store}/>  */}
      </div>
    );
  }
}

export default App;
