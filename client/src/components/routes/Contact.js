import React from 'react'
import {Panel, Grid, Row, Col, Image, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import Elena from "./Elena.jpg"
import FieldGroup from './FieldGroup'



  class Comments extends React.Component {
    state = {
      name: "Enter your name",
      email: "",
      town: "",
      message: ""
    }


    handleChange = event => {
      //debugger
      this.setState({
          [event.target.name]: event.target.value
      })
    }
      

    handleInput = event=>{
      event.preventDefault()
      console.log(this.state)
    }

    render() {
      return (
        <div className="container">
         <Panel bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Contact Us</Panel.Title>
            </Panel.Heading>
          <Panel.Body>
          <p>Swing by for a cup of coffee, or leave us a message:</p>
            <Grid>
               <Row>
                 <Col mxs={12} md={5} >
                   <Image src={Elena} responsive/>
                 </Col>
                 <Col xs={12} md={6} >
                 <form onSubmit={event=>this.handleInput(event)}>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Name"
      name="name"
      placeholder={this.state.name}
      onChange={this.handleChange}
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      name="email"
      placeholder="Enter email"
      onChange={this.handleChange}
    />
    
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Town</ControlLabel>
      
      <FormControl componentClass="select" name="town" placeholder="select"  onChange={this.handleChange}>
        <option value="select">select</option>
        <option value="other">Bedford</option>
        <option value="other">Woburn</option>
        <option value="other">Lexington</option>
        <option value="other">Other</option>        
        
      </FormControl>


    </FormGroup>
    <FormGroup controlId="formControlsTextarea" >
      <ControlLabel>Subject</ControlLabel>
      <FormControl componentClass="textarea" name="message" placeholder="textarea" onChange={this.handleChange} />
    </FormGroup>
    <Button type="submit">Submit</Button>
</form>
                 </Col>
                 </Row>
            </Grid>
            </Panel.Body>
          </Panel>
  
  
</div>
      )
    }
  }

  export default Comments