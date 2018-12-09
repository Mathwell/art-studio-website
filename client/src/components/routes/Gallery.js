import React from 'react'
//import { ENODATA } from 'constants';
import {Form, FormGroup, FormControl, ControlLabel, Button, Jumbotron, Col, Grid, Row} from 'react-bootstrap'
import GalleryImages from '../images/GalleryImages'
import { fetchImages, postImage, deleteImage } from '../actions/fetchImages'
import { connect } from 'react-redux';
import FieldGroup from './FieldGroup'
import {AddArtwork} from '../actions/artworkActions'


class Gallery extends React.Component {
    state = {
      //imgs: []
      searchName: "",
      enterName: "",
      link: "",
      newArtwork: {author: "", description: "", url_s: "", url_o: "", title: "", photo_id: "", id: 10}
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
        const jsonData=Object.assign({}, this.state.newArtwork, {title: event.target.children[1].value, url_s: event.target.children[3].value });            
        this.props.postImage(jsonData)       
        this.setState({link: "",
        enterName: "",})
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
      return (        
        <div>

          <Grid>
            <Row>
              <Col xs={6} md={4}>
                  {/* search form */}
                  <form onSubmit={event=>this.handleClick(event)}>
                    <Form inline>
                      <FormGroup controlId="formInlineName">
                        <ControlLabel>Name</ControlLabel>{' '}
                            <input type="text" name="searchName" onChange={event => this.handleChange(event)} value={this.state.searchName} />
                      </FormGroup>{' '}
                      <Button type="submit" bsSize="small">Search</Button>
                    </Form>
                  </form>
        
              </Col>

              <Col xs={6} md={8}>
                  {/* new artwork input form */}
                  <form onSubmit={event=>this.handleInput(event)}>
                        <ControlLabel>Titile</ControlLabel>{' '}
                        <input type="text" name="enterName" onChange={event => this.handleChange(event)} value={this.state.enterName} /> 
                        <ControlLabel>Link</ControlLabel>{' '}
                        <input type="text" name="link" onChange={event => this.handleChange(event)} value={this.state.link} />     
                        {/* <FieldGroup id="formControlsFile" type="file" label="File"  />                         */}
                         <Button type="submit" bsSize="small">Add To Gallery</Button>                    
                  </form>        
                  
              </Col>
            </Row>
          </Grid>

         <Jumbotron>
           {/* gallery display */}
            <GalleryImages imgs={this.props.artworks} delete={this.handleDelete}/> 
          </Jumbotron>
        </div>
      )
    }
 
  

      componentDidMount(){
        //this.fetchIMGs()
        //this.displayIMGs()        
      }
      

  }
  

  const mapStateToProps = state => {
    return {
        artworks: state.artworks,
        comments: state.comments
    };
  };
  
  
  export default connect(mapStateToProps, {fetchImages, postImage, deleteImage})(Gallery);