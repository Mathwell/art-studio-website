import React from 'react'
//import { ENODATA } from 'constants';
import {Thumbnail, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";


class GalleryImage extends React.Component{
    
    handleClick(event){

    }

    render(){
        const link="/view?id="+this.props.img.id
        return(
         <Thumbnail src={this.props.img.link} alt="242x200">
              <h3>{this.props.img.text}</h3>
              <p>Description</p>
              <p>
                  <Button bsStyle="primary" href={link}>View</Button>
                  &nbsp;
                  <Button bsStyle="default" id={this.props.img.id} onClick={event=>this.props.delete(event)} > Delete
                  {/* <Link to='/comments'> Comments </Link> */}
                  </Button> 
              </p>
          </Thumbnail>
      
        )
}
}

GalleryImage.defaultProps={
    img: [{text: ""}]    
}

export default GalleryImage