import React, { PropTypes } from 'react'
//import { ENODATA } from 'constants';
import {Grid, Row, Col, Image,Thumbnail, Button, ControlLabel, Panel, FormControl, FormGroup} from 'react-bootstrap'
import { Link } from "react-router-dom";
import FieldGroup from "../routes/FieldGroup"


class ImageView extends React.Component{
      
    state = {
       
            name: this.props.img.text,
            link: this.props.img.link,
            zoom_link: this.props.img.zoom_link,
            title:  this.props.img.text,           
            img: this.props.img.zoom_link,
      }

   
  
      handleChange = event => {
          //debugger
          this.setState({
              [event.target.name]: event.target.value
          })
        }
          
  
        handleClick = event=>{
         this.setState({
           title: this.state.name,
           img: this.state.zoom_link
         })        
        }

    render(){
        //debugger
        return(
            <Panel bsStyle="info">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{this.state.title}</Panel.Title>
              </Panel.Heading>
            <Panel.Body>
            
              <Grid>
                 <Row>
                   <Col mxs={12} md={6} >
                   <Image src={this.state.img} responsive></Image>
                   </Col>
                   <Col xs={12} md={6} >
                   <form onSubmit={event=>this.props.change(event)}>
                        <FieldGroup
                            id="formControlsText"
                            type="text"
                            label="Author"
                            name="name"     
                            value={this.state.name}                       
                            placeholder={this.props.img.text}
                            onChange={this.handleChange}
                        />
                        <FieldGroup
                            id="formControlsEmail"
                            type="link"
                            name="link"
                            label="Link"
                            value={this.state.link}   
                            placeholder={this.props.img.link}
                            onChange={this.handleChange}
                        />

                         <FieldGroup
                            id="formControlsEmail"
                            type="link"
                            name="zoom_link"
                            label="zoom_Link"
                            value={this.state.zoom_link}
                            placeholder={this.props.img.zoom_link}
                            onChange={this.handleChange}
                        />
                  
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Description</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="textarea" />
                        </FormGroup>
                        <Button type="submit" onClick={event=>this.handleClick(event)} >Submit Changes</Button>
                    </form>
                   </Col>
                   </Row>
              </Grid>
              </Panel.Body>
            </Panel>

            
        )
}
componentDidMount(){
    //debugger
    this.setState({ name: this.props.img.text, link: this.props.img.link });
   
//    const zoom_link=this.props.img.zoom_link
//     // debugger
//      this.setState({name: this.props.img.text, link: this.props.img.link})
 }

 componentWillReceiveProps(nextProps){
    if(nextProps.img !== this.props.img){
        this.setState({ name: nextProps.img.text, link: nextProps.img.link, zoom_link: nextProps.img.zoom_link, title: nextProps.img.text, img: nextProps.img.zoom_link });
    }
}

}


ImageView.defaultProps={
    img: {text: "", link: "", zoom_link: ""}    
}

export default ImageView