import React, { Component } from 'react';
import CommentInput from '../comments/commentInput';
import {Image, Thumbnail, Grid, Row, Col, Button} from 'react-bootstrap'

class Artwork extends Component {
  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_ARTWORK',
      id: this.props.artwork.id
    });
  }

  render() {
    return (
      <div>
        <li>
        <span> 

        <Grid>
            <Row>
                <Col xs={6} md={4}>
                    <Thumbnail src={this.props.artwork.link} alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                            <Button bsStyle="primary">Button</Button>
                            &nbsp;
                            <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                    <Thumbnail src={this.props.artwork.link} alt="242x200">
                        <h3>{this.props.artwork.text}</h3>
                        <p>Description</p>
                        <p>
                            <Button bsStyle="primary">Button</Button>
                            &nbsp;
                            <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                 </Col>
                <Col xs={6} md={4}>
                    <Thumbnail src={this.props.artwork.link} alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
    </Col>
  </Row>
</Grid>;    
            
            <Image src={this.props.artwork.link} responsive />
        <Thumbnail href="#" alt="171x180" src={this.props.artwork.link}/>       {/* <a data-flickr-embed="true"  href="https://www.flickr.com/photos/115389063@N04/34444995104/" title="Alex"> 
    <img src="https://farm5.staticflickr.com/4212/34444995104_0dcea9621b_k.jpg" width="2048" height="1641" alt="Alex"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"/> */}
        {/* </script> */}
        <a href={this.props.artwork.link}>{this.props.artwork.text} </a> {this.props.artwork.link}</span><button onClick={() => this.handleOnClick()}>DELETE</button>



          <CommentInput 
            store={this.props.store}
            artworkId={this.props.artwork.id} /> 
        </li>
      </div>
    );
  }
};

export default Artwork;