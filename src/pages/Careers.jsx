import React from 'react';
import { Link } from 'react-router-dom';
import './pagetitle.css';

const Careers = () => {
    return (
        <>
        <div class="hover hover-2 text-white"><img src={require("../images/haccareers.jpg")} alt="careers" />
          <div class="hover-overlay"></div>
          <div class="hover-2-content">
            <h2 class="hover-2-title text-uppercase font-weight-bold mb-0">Careers</h2>
            {/* <p class="hover-2-description text-uppercase mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
    </div>
  </div>
        <div className="container p-5">
            <div className="row justify-content-center">
                <div className="col-6 text-center">
            <h3 className="font-weight-bold">COME WORK WITH US</h3>
            <p>We are constantly looking out to hire competent and experience talent to be part of our team.</p>
            <p>If you have the relevant expereince and the passion to be part of our team, please feel free to drop an email to us at <Link to="/contact" style={{textDecoration: "none"}}><span className="text-info">contact@hacconsulting.com</span></Link></p>
        </div>
        </div>
        </div>
        </>
    );
};

export default Careers;