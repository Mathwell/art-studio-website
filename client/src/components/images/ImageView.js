import React from 'react'
//import { ENODATA } from 'constants';
import {Grid, Row, Col, Image,Thumbnail, Button, ControlLabel, Panel, FormControl, FormGroup} from 'react-bootstrap'
import { Link } from "react-router-dom";
import FieldGroup from "../routes/FieldGroup"


class ImageView extends React.Component{
    
    state = {
        enterName: "",
        link: ""        
      }
  
      handleChange = event => {
          //debugger
          this.setState({
              [event.target.name]: event.target.value
          })
        }
          
  
        handleInput = event=>{
          event.preventDefault()
          const jsonData=Object.assign({}, this.state.newArtwork, {title: event.target.children[1].value, url_s: event.target.children[3].value });            
          this.props.postImage(jsonData)       
          this.setState({link: "",
          enterName: "",})
          //debugger
          //add artwork to store
        }

    render(){
        //debugger
        const link="/view?id="+this.props.img.id
        return(
            <Panel bsStyle="info">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{this.props.img.text}</Panel.Title>
              </Panel.Heading>
            <Panel.Body>
            
              <Grid>
                 <Row>
                   <Col mxs={12} md={6} >
                   <Image src={this.props.img.zoom_link} responsive></Image>
                   </Col>
                   <Col xs={12} md={6} >
                   <form>
      <FieldGroup
        id="formControlsText"
        type="text"
        label="Author"
        placeholder={this.props.img.text}
      />
      <FieldGroup
        id="formControlsEmail"
        type="link"
        label="Email address"
        placeholder={this.props.img.link}
      />
            
      
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Description</ControlLabel>
        <FormControl componentClass="textarea" placeholder="textarea" />
      </FormGroup>
      <Button type="submit">Submit Changes</Button>
  </form>
                   </Col>
                   </Row>
              </Grid>
              </Panel.Body>
            </Panel>

            // <Grid>
            // <Row>
            //     <Col sm="4" md= "8">
            // <h1> {this.props.img.text} </h1>
            // <Image src={this.props.img.zoom_link} responsive></Image>
            // </Col>
            // <Col sm="4" md="4">
                
           
            // <form onSubmit={event=>this.handleInput(event)}>
            // <Row>
            //       <ControlLabel>Titile</ControlLabel>{' '}
            //       <input type="text" name="enterName" onChange={event => this.handleChange(event)} value={this.state.enterName} /> 
            //  </Row>     
            //  <Row>
                   
                  
            //             <ControlLabel>Link</ControlLabel>{' '}
            //             <input type="text" name="link" onChange={event => this.handleChange(event)} value={this.state.link} />     
            //             {/* <FieldGroup id="formControlsFile" type="file" label="File"  />                         */}
            //             </Row>
            //             <Row>
            //              <Button type="submit" bsSize="small">Add To Gallery</Button>                    
            //              </Row>
            // </form>        
            // </Col>
            // </Row>
            // </Grid>
            
      
        )
}
}

ImageView.defaultProps={
    img: [{text: ""}]    
}

export default ImageView