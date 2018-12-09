import React from 'react'
//import {Form, FormControl, FormGroup, HelpBlock, Checkbox, ControlLabel, Radio, Button} from 'react-bootstrap'
import FieldGroup from './FieldGroup'
import {Thumbnail, Button} from 'react-bootstrap'
import { connect } from 'react-redux';

class Upload extends React.Component {
   render(){
   
    const id=this.props.location.search.slice(4)  
    const artwork=this.props.artworks.find(art => art.id == id);
    console.log(this.props.artworks)
    //debugger
    
     return(
      <Thumbnail src={artwork.link} alt="242x200">
              <h3>{artwork.text}</h3>
              <p>Description</p>
              <p>
                  <Button bsStyle="primary" href={artwork.link}>View</Button>
                  &nbsp;
                  <Button bsStyle="default" id={id} > Delete
                  {/* <Link to='/comments'> Comments </Link> */}
                  </Button> 
              </p>
          </Thumbnail>
      )
  };
}

const mapStateToProps = state => {
  return {
      artworks: state.artworks      
  };
};

Upload.defaultProps={
  artworks: [{text: "", link: "", id: ""}]    
}



export default connect(mapStateToProps)(Upload);