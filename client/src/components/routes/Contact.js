import React from 'react'
import {Panel, Grid, Row, Col, Image, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import Elena from "./Elena.jpg"
import FieldGroup from './FieldGroup'



  class Comments extends React.Component {
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
                 <form>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Name"
      placeholder="Enter text"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Town</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>

    </FormGroup>
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Subject</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
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