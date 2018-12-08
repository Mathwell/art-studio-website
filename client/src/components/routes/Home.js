import React from 'react'
import {Jumbotron, Grid, Row, Col, Image} from 'react-bootstrap'
import elena from './Elena.jpg'

class Home extends React.Component {
    render() {
      return (
        <div>
          <Grid>
            <Row>
              <Col sm={6} md={8}>
          <Jumbotron>
          <p><h2>Welcome to Draw To Grow Art Studio!</h2></p>
          </Jumbotron>
          </Col>
          <Col sm={6} md={6}>
          <Image src={elena} circle ></Image>
          </Col>
          </Row>
          </Grid>
          
        </div>
      )
    }
  }

  export default Home