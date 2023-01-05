import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './pagetitle.css';

const Whatwedo = () => {

  return (
    <div>
      <div class="hover hover-2 text-white"><img src={require("../images/commonheader.jpg")} alt="careers" />
        <div class="hover-overlay"></div>
        <div class="hover-2-content">
          <h2 class="hover-2-title text-uppercase font-weight-bold mb-0">What We Do</h2>
          {/* <p class="hover-2-description text-uppercase mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
        </div>
      </div>
      <Container className="p-5">
        <Row>
          <h3 className="col-7 text-center font-weight-bold m-4">TRADING</h3>
          </Row>
          <Row>
          <Col md={{ span: 3, offset: 3 }}>
            <img className="whatwedo-img" src={require("../images/trading.jpg")} alt="trading" />
          </Col>
          <Col md={{ span: 3 }}>
            <p>We trade in oil and petroleum products, working alongside with our strong partners.</p>
          </Col>
        </Row>
        <Row>
          <h3 className="col-7 text-center font-weight-bold m-4">SHIPPING</h3>
          </Row>
          <Row>
          <Col md={{ span: 3, offset: 3 }}>
            <img className="whatwedo-img" src={require("../images/shipping.jpg")} alt="shipping" />
          </Col>
          <Col md={{ span: 3 }}>
            <p>We operate spot and time chartered ships to support our trading activities across different regions.</p>
          </Col>
        </Row>
        <Row>
          <h3 className="col-7 text-center font-weight-bold m-4">STORAGE</h3>
          </Row>
          <Row>
          <Col md={{ span: 3, offset: 3 }}>
            <img className="whatwedo-img" src={require("../images/storage.jpg")} alt="storage" />
          </Col>
          <Col md={{ span: 3 }}>
            <p>Time to time we use short or long term storage options to deliver value to our partners.</p>
          </Col>
        </Row>
        <Row>
          <h3 className="col-9 text-center font-weight-bold m-4">MANAGEMENT CONSULTING</h3>
          </Row>
          <Row>
          <Col md={{ span: 3, offset: 3 }}>
            <img className="whatwedo-img" src={require("../images/consulting.jpg")} alt="consulting" />
          </Col>
          <Col md={{ span: 3 }}>
            <p>Professional consultation is extended to our partners to efficiently source energy.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Whatwedo;