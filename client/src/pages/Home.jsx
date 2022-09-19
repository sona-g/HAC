import React from 'react';
import { Carousel,  Button, Card, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <>
         <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src= "https://via.placeholder.com/728x300.png?text=Slider+Image+1"
      alt="First slide"
    />
    <div className="carousel-caption d-none d-md-block">
        <h5>Heading 1</h5>
        <Link type="button" to="/about"><Button variant="info" size="lg">Know More</Button></Link>
      </div>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://via.placeholder.com/728x300.png?text=Slider+Image+2"
      alt="Second slide"
    />
    <div className="carousel-caption d-none d-md-block">
        <h5>Heading 2</h5>
        <Link type="button" to="/about"><Button variant="info" size="lg">Know More</Button></Link>
      </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://via.placeholder.com/728x300.png?text=Slider+Image+3"
      alt="Third slide"
    />
    <div className="carousel-caption d-none d-md-block">
        <h5>Heading 3</h5>
        <Link type="button" to="/about"><Button variant="info" size="lg">Know More</Button></Link>
      </div>
  </Carousel.Item>
  </Carousel>

    <div className="row p-5">
   
    <div className="col">
    <Figure>
        <Figure.Caption>
        <h5>About Us</h5>
        <p>SAMPLE TEXT TO SHARE FOR THE ABOUT PAGE....to be added here</p>
        <Link to='/about' type='button' className="btn btn-info">SEE OUR MANAGEMENT</Link>
      </Figure.Caption>
      </Figure>
      </div>
      <div className="col">
        <Figure>
      <Figure.Image
        // width={300}
        // height={180}
        alt="171x180"
        src="https://via.placeholder.com/1000x200"
      />
      </Figure>
      </div>
    
    {/* <div className="card">
      <div className="card-body">
        <h5 className="card-title">About Us</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link to='/about' type='button' className="btn btn-info">SEE OUR MANAGEMENT</Link>
      </div>
    </div> */}
 
  {/* <div className="col">
    <Card style={{width: '30rem'}}>
      <Card.Img variant="top" src="https://via.placeholder.com/100x100" />
    </Card>
  </div> */}
</div>
<div className="text-center p-4">
    <p>WHAT WE DO</p>
    <h3>OUR CORE SERVICES</h3>
</div>
{/* <div className='row p-4'> */}
{/* <Card className='mx-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/100x120" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info" size="lg">Know more</Button>
      </Card.Body>
    </Card>
    <Card className='mx-4'style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/100x120" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info" size="lg">Know more</Button>
      </Card.Body>
    </Card>
    <Card className='mx-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/100x120" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info" size="lg">Know more</Button>
      </Card.Body>
    </Card>
    <Card className='mx-4' style={{ width: '18rem' }}>
      <Card.Img classNmae="hover-zoom" variant="top" src="https://via.placeholder.com/100x120" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info" size="lg">Know more</Button>
      </Card.Body>
    </Card> */}
    <div class="container">
        <div class="d-lg-flex">
            <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                <div class="backgroundEffect">
                    </div>
                    <div class="pic">
                        <img class="" src="https://via.placeholder.com/100x100" alt=""/>
                                </div>
                                <div class="content">
                                    <p class="h-1 mt-4">Card Title</p>
                                    <p class="text-muted mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                        <div class="btn btn-info">Know More<span class="fas fa-arrow-right"></span>
                                        </div>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                <div class="backgroundEffect">
                    </div>
                    <div class="pic">
                        <img class="" src="https://via.placeholder.com/100x100" alt=""/>
                                </div>
                                <div class="content">
                                    <p class="h-1 mt-4">Card Title</p>
                                    <p class="text-muted mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                        <div class="btn btn-info">Know More<span class="fas fa-arrow-right"></span>
                                        </div>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                <div class="backgroundEffect">
                    </div>
                    <div class="pic">
                        <img class="" src="https://via.placeholder.com/100x100" alt=""/>
                                </div>
                                <div class="content">
                                    <p class="h-1 mt-4">Card Title</p>
                                    <p class="text-muted mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                        <div class="btn btn-info">Know More<span class="fas fa-arrow-right"></span>
                                        </div>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                <div class="backgroundEffect">
                    </div>
                    <div class="pic">
                        <img class="" src="https://via.placeholder.com/100x100" alt=""/>
                                </div>
                                <div class="content">
                                    <p class="h-1 mt-4">Card Title</p>
                                    <p class="text-muted mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                        <div class="btn btn-info">Know More<span class="fas fa-arrow-right"></span>
                                        </div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
    {/* </div> */}
</>
    );
};

export default Home;