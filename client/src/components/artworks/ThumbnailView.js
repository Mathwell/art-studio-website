import React, {PureComponent} from 'react'
//import { ENODATA } from 'constants';
import {Thumbnail, Button, Image, Col} from 'react-bootstrap'
import { Link } from "react-router-dom";


class ThumbnailView extends PureComponent{
render(){
    const link="/view?id="+this.props.img.id
return(
    <Thumbnail src={this.props.img.link} alt="242x200" onClick={this.props.click}>
    <h3>{this.props.img.text}</h3>
    <p>Description</p>
    <p>
        <Button bsStyle="primary" href={link}>View</Button>
        &nbsp;
        <Button bsStyle="default" id={this.props.img.id} onClick={event=>this.props.delete(event)} > Delete </Button> 
    </p>
</Thumbnail>
)
}
}

ThumbnailView.defaultProps={
    img: [{}]    
}


export default ThumbnailView