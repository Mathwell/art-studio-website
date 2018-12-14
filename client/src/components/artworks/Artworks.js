import React from 'react'
//import { ENODATA } from 'constants';
import {Grid, Row, Col} from 'react-bootstrap'
import GalleryImage from './Artwork'


class Artworks extends React.Component{
    

    render(){
        let i=0
        const galleryImages = this.props.imgs.map((img, index) => {
            return (
            <Col xs={6} md={4}>
                 <GalleryImage key={index} img={img} delete={this.props.delete} />
            </Col>)
          });
        //debugger
        return(
            <div className=".thumbnail">
             <Grid>
                <Row>
                {galleryImages}
                </Row>
             </Grid>
             </div>

)    

}}

Artworks.defaultProps={
    imgs: [{link: "", text: ""}, {}, {}]
}

export default Artworks