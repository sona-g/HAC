import React from 'react';
import { Carousel, Button, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div>
         <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 carousel-img"
      src={require("../images/carousel-1.jpg")}
      alt="First slide"
    />
    <div className="carousel-caption d-none d-md-block">
        <h1 class="font-weight-bold">Value Creation for our Partners</h1>
        <Link type="button" to="/about"><Button variant="outline-dark" size="lg">Know More&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
        </Button></Link>
      </div>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 carousel-img"
      src={require("../images/carousel-2.jpg")}
      alt="Second slide"
    />
    <div className="carousel-caption d-none d-md-block">
        <h1 class="font-weight-bold">Efficient Handling of Operations</h1>
        <Link type="button" to="/about"><Button variant="outline-dark" size="lg">Know More&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
        </Button></Link>
      </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src={require("../images/carousel-3.jpg")}
      alt="Third slide"
    />
    <div className="carousel-caption d-none d-md-block">
        <h1 class="font-weight-bold">Professionally Manager and Technology Enabled</h1>
        <Link type="button" to="/about"><Button variant="outline-dark" size="lg">Know More&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
        </Button></Link>
      </div>
  </Carousel.Item>
  </Carousel>

    <div className="row p-5">
    <div className="col">
    <Figure>
        <Figure.Caption>
        <h5>About Us</h5>
        <h3>HAC CONSULTING</h3>
        <p>HAC Consulting Pte Ltd is a boutique energy trading and consultancy organisation, based in Singapore. Our management group has decades of experience in the fields of logistics, trading and banking. It is our mission to deliver excellence for our clients and consistently exceed expectations. Our dynamic, creative and outcome-oriented team adapts seamlessly to changing circumstances, ensuring the customer attains the results they expected. This is why our customers trust us to manage complex transactions with professionalism.</p>
        <p>Through our partnerships with top tier international banks, integrated oil majors, NOC’s, trading houses, leading ship owners and “Teapot” refiners, we are able to effectively cover a broad swathe of the Oil market from our base in South-East Asia.</p>
        <Link to='/about' type='button'><Button variant="outline-dark" size="lg">SEE OUR MANAGEMENT&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
        </Button></Link>
      </Figure.Caption>
      </Figure>
      </div>
      <div className="col">
        <Figure>
      <Figure.Image className="about-img"
        src={require("../images/home-about.jpg")} alt="about"
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
        <div class="d-lg-flex justify-content-center">
            <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                <div class="backgroundEffect">
                    </div>
                    <div class="pic">
                        <img className="card-img" src={require("../images/trading.jpg")} alt="trading"/>
                                </div>
                                <div class="content">
                                    <p class="h-1 mt-4">TRADING</p>
                                    <p class="text-muted mt-3">We trade in oil and petroleum products, working alongside with our strong partners.</p>
                                    <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                        <Link style={{textDecoration: 'none'}} to="/whatwedo"><div class="btn btn-dark">Know More<span class="fas fa-arrow-right"></span>
                                        </div></Link>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                <div class="backgroundEffect">
                    </div>
                    <div class="pic">
                        <img className="card-img" src={require("../images/shipping.jpg")} alt="shipping"/>
                                </div>
                                <div class="content">
                                    <p class="h-1 mt-4">SHIPPING</p>
                                    <p class="text-muted mt-3">We operate spot and time chartered ships to support our trading activities across different regions.&nbsp;&nbsp;&nbsp;</p>
                                    <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                    <Link style={{textDecoration: 'none'}} to="/whatwedo"><div class="btn btn-dark">Know More<span class="fas fa-arrow-right"></span>
                                        </div></Link>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                <div class="backgroundEffect">
                    </div>
                    <div class="pic">
                        <img className="card-img" src={require("../images/storage.jpg")} alt=""/>
                                </div>
                                <div class="content">
                                    <p class="h-1 mt-4">STORAGE</p>
                                    <p class="text-muted mt-3">Time to time we use short or long term storage options to deliver value to our partners.</p>
                                    <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                    <Link style={{textDecoration: 'none'}} to="/whatwedo"><div class="btn btn-dark">Know More<span class="fas fa-arrow-right"></span>
                                        </div></Link>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="card border-0 me-lg-4 mb-lg-0 mb-4">
                <div class="backgroundEffect">
                    </div>
                    <div class="pic">
                        <img className="card-img" src={require("../images/consulting.jpg")} alt=""/>
                                </div>
                                <div class="content">
                                    <p class="h-1 mt-4">MANAGEMENT CONSULTING</p>
                                    <p class="text-muted mt-3">Professional consultation is extended to our partners to efficiently source energy.&nbsp;&nbsp;&nbsp;</p>
                                    <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                    <Link style={{textDecoration: 'none'}} to="/whatwedo"><div class="btn btn-dark">Know More<span class="fas fa-arrow-right"></span>
                                        </div></Link>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
    {/* </div> */}
</div>
    );
};

export default Home;