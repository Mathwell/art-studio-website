import React from 'react'
//import { ENODATA } from 'constants';
import {Thumbnail, Button, Image, Col} from 'react-bootstrap'
import { Link } from "react-router-dom";


class GalleryImage extends React.Component{
    state={
        enlarge: false
    }
    
    handleClick=()=>{
        this.setState({enlarge: !this.state.enlarge})

    }

    render(){

        const link="/view?id="+this.props.img.id
        //const Test = () => { return( <div> hi </div> ) };
        const Img= () => { 
        if ( this.state.enlarge) {
            return(
            <div className="large-img">
                 <Image  src={this.props.img.zoom_link} responsive onClick={this.handleClick}/>
            </div>
            )            
       }
       else {
           return(
            <Thumbnail src={this.props.img.link} alt="242x200" onClick={this.handleClick}>
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
       //debugger
        return(

        //  <Thumbnail src={this.props.img.link} alt="242x200" onClick={this.handleClick}>
        //       <h3>{this.props.img.text}</h3>
        //       <p>Description</p>
        //       <p>
        //           <Button bsStyle="primary" href={link}>View</Button>
        //           &nbsp;
        //           <Button bsStyle="default" id={this.props.img.id} onClick={event=>this.props.delete(event)} > Delete
        //           {/* <Link to='/comments'> Comments </Link> */}
        //           </Button> 
        //       </p>
        //   </Thumbnail>
       
        <Img />
       
         
        )
}
}

GalleryImage.defaultProps={
    img: [{text: ""}]    
}

export default GalleryImage