import React from 'react'
//import { ENODATA } from 'constants';
import {Image, Thumbnail, Form, FormGroup, FormControl, ControlLabel, Button, Jumbotron, Col, Grid, Row} from 'react-bootstrap'
import ImageView from '../images/ImageView'
import { fetchImages, postImage, deleteImage, editImage } from '../actions/fetchImages'
import { connect } from 'react-redux';
import FieldGroup from './FieldGroup'
import {AddArtwork} from '../actions/artworkActions'


class View extends React.Component {
    state = {          
          author: "", 
          description: "", 
          url_s: "", 
          url_o: "", 
          title: "", 
          photo_id: "",
        
        }

    handleChange = event => {
        //debugger
        this.setState({
            [event.target.name]: event.target.value
        })
      }

      handleSubmit = event => {
        event.preventDefault()
        //this.sendFormDataSomewhere(this.state)
      }

      handleInput = event=>{
        event.preventDefault()
        //debugger
        let title, url_s, url_o
        if (event.target.children[0].lastChild.value!==event.target.children[0].lastChild.placeholder){
            title=event.target.children[0].lastChild.value
        } else {title=event.target.children[0].lastChild.placeholder}

        if (event.target.children[1].lastChild.value!==event.target.children[1].lastChild.placeholder){
            url_s=event.target.children[1].lastChild.value
        } else {url_s=event.target.children[1].lastChild.placeholder}

        if (event.target.children[2].lastChild.value!==event.target.children[2].lastChild.placeholder){
            url_o=event.target.children[2].lastChild.value
        } else {url_o=event.target.children[2].lastChild.placeholder}

        const jsonData=Object.assign({}, this.state, {title: title, url_s: url_s, url_o: url_o, id: event.target.action.slice(30) });            
        this.props.editImage(jsonData)       
        this.setState({
            author: "", description: "", url_s: "", url_o: "", title: "", photo_id: ""
        })
        //debugger
        //add artwork to store
      }
     
      handleClick=event=>{
        event.preventDefault();
        //debugger
        this.props.fetchImages(event.target.firstChild.children[1].value ) 
        this.setState({searchName: ""})
                  
      }

      handleDelete=event=>{
        event.preventDefault();
        //debugger
        this.props.deleteImage(event.target.id)
      }
      
    render() {
      //debugger
      const id=this.props.location.search.slice(4)  
      const artwork=this.props.artworks.find(art => art.id == id);     
      //console.log(this.props.artworks)
      //console.log(artwork)
      return (        
        <div>

        
          <Jumbotron>
              
            <ImageView img={artwork} change={this.handleInput} /> 
            
          </Jumbotron>
        
          </div>
      )
    }
 
  

      componentDidMount(){
             
      }
      

  }
  

  const mapStateToProps = state => {
    return {
        artworks: state.artworks,
        comments: state.comments
    };
  };
  
  
  export default connect(mapStateToProps, {fetchImages, postImage, deleteImage, editImage})(View);