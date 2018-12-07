import React from 'react'
//import { ENODATA } from 'constants';
import {Form, FormGroup, FormControl, ControlLabel, Button, Jumbotron, Col, Grid, Row} from 'react-bootstrap'
import GalleryImages from '../images/GalleryImages'
import { fetchImages } from '../actions/fetchImages'
import { connect } from 'react-redux';
import FieldGroup from './FieldGroup'


class Gallery extends React.Component {
    state = {
      imgs: []
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
     
      handleClick=event=>{
        let imgs=[]
        fetch('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=d8685da58d328c30a1e78b2a68d64131&photoset_id=72157672941005002&user_id=115389063%40N04&extras=license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_m%2C+url_o&format=json&nojsoncallback=1&api_sig=795a4b5bac61c5f94a20c0603670bf6f')
        //fetch('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=b11db2a17a833d9b1ac4c504bef12f4e&photoset_id=72157672941005002&user_id=115389063%40N04&extras=url_sq&format=json&nojsoncallback=1&auth_token=72157702865537141-e259f6d49b8aace1&api_sig=e6208f757c94c9103c5ea1ccafcfa312')
        //fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=b11db2a17a833d9b1ac4c504bef12f4e&photoset_id=72157672941005002&user_id=115389063%40N04&extras=url_o&format=json&nojsoncallback=1&auth_token=72157702865537141-e259f6d49b8aace1&api_sig=98ac424798281298c08bc52960409b68`)
          .then(res => res.json()).catch(err=>console.log(err))        
          .then(data => {
              imgs=data.photoset.photo.map(img=>({link: img.url_m, text: img.title}))
              //this.state=Object.assign({}, this.state, { imgs })
              this.setState({imgs: imgs})
              console.log(this.state.imgs.length)
              //console.log(imgs1)             
            // this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })           
          }).catch(err=>console.log(err))  
          //debugger        
      }
      
    render() {
      return (
        // <form onSubmit={event => this.handleSubmit(event)}>
        //   <input type="text" name="firstName" onChange={event => {this.handleChange(event)}} value={this.state.firstName} />
        //   <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
        //   <input type='submit' value="Enter"/>
        // </form>
        //{this.fetchIMGs()}
        <div>
          <Grid>
            <Row>
              <Col xs={6} md={6}>
        
        <Form inline>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>{' '}
          <FormControl type="text" placeholder="Alex" />
          </FormGroup>{' '}
  

          <Button type="submit" onClick={this.handleClick}>Search by Name</Button>
        </Form>;
        
        </Col>
        <Col xs={6} md={6}>
        <FieldGroup
        id="formControlsFile"
        type="file"
        label="File"
        help="Example block-level help text here."
      />
      </Col>
      </Row>
      </Grid>

        {/* <button onClick={this.handleClick}>Click to Fetch!</button>         */}
         {/* <GalleryImages imgs={this.state.imgs}/>   */}
         <Jumbotron>
            <GalleryImages imgs={this.props.artworks}/> 
          </Jumbotron>
        </div>
      )
    }

    fetchIMGs(){
        //let imgs=[]
        this.props.fetchImages()
        // fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=d8685da58d328c30a1e78b2a68d64131&photoset_id=72157672941005002&user_id=115389063%40N04&extras=license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_m%2C+url_o&format=json&nojsoncallback=1&api_sig=795a4b5bac61c5f94a20c0603670bf6f`)
        //   .then(res => res.json()).catch(err=>console.log(err))        
        //   .then(data => {
        //       const imgs=data.photoset.photo.map(img=>({link: img.url_s, text: img.title, zoom_link: img.url_o, id: img.id}))
        //       this.setState({imgs: imgs})
        //       //console.log(this.state)                       
        //   }).catch(err=>console.log(err))  
          //debugger        
         // debugger
      }

     

      componentDidMount(){
        //this.fetchIMGs()
        //this.displayIMGs()        
      }
      

  }

  //export default Gallery

  const mapStateToProps = state => {
    return {
        artworks: state.artworks,
        comments: state.comments
    };
  };
  
  
  export default connect(mapStateToProps, {fetchImages})(Gallery);