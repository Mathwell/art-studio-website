import React from 'react'
import {Jumbotron, Grid, Row, Col, Image} from 'react-bootstrap'
import pic from './paint.jpg'

class Home extends React.Component {
    render() {
      return (
        <div>
          <Grid>
            <Row>
              <Col sm={6} md={7}>
              <Jumbotron>
        <h2>"A picture is a poem without words."</h2>
        <p align="right"><h3>                        Horace    </h3></p>
        </Jumbotron>
					</Col>
          <Col sm={6} md={5}>
          <Image src={pic} responsive ></Image>
         </Col>
          </Row>
          </Grid>
        
         </div>

// <div class="container-wrap">
// 		<aside id="fh5co-hero">
// 			<div className="flexslider">
// 				<ul className="slides">
// 			   	<li className="home">
// 			   		<div className="overlay-gradient"></div>
// 			   		<div className="container-fluid">
// 			   			<div className="row">
// 				   			<div className="col-md-6 col-md-offset-3 col-md-pull-3 slider-text">
// 				   				<div className="slider-text-inner">
// 				   					<h1>Not Every Project Needs To Be Perfect</h1>
// 										<h2>Free html5 templates Made by <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a></h2>
// 										<p><a class="btn btn-primary btn-demo" href="#">View Demo</a> <a class="btn btn-primary btn-learn">Learn More</a></p>
// 				   				</div>
// 				   			</div>
// 				   		</div>
// 			   		</div>
// 			   	</li>
			   	
// 			  	</ul>
// 		  	</div>
//         </aside>
//         </div>
      )
    }
  }

  export default Home