import React from 'react';
import './pagetitle.css';

const About = () => {
    return (
        <div>
             <div class="hover hover-2 text-white"><img src={require("../images/commonheader.jpg")} alt="careers" />
          <div class="hover-overlay"></div>
          <div class="hover-2-content">
            <h2 class="hover-2-title text-uppercase font-weight-bold mb-0">The Company</h2>
            {/* <p class="hover-2-description text-uppercase mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
    </div>
  </div>
  <div className="container p-5">
            <div className="row justify-content-center">
                <div className="col-6 text-center">
            <h3 className="font-weight-bold">HAC CONSULTING</h3>
            <p>HAC Consulting Pte Ltd is a boutique energy trading and consultancy organisation, based in Singapore. Our management group has decades of experience in the fields of logistics, trading and banking. It is our mission to deliver excellence for our clients and consistently exceed expectations. Our dynamic, creative and outcome-oriented team adapts seamlessly to changing circumstances, ensuring the customer attains the results they expected. This is why our customers trust us to manage complex transactions with professionalism.</p>
            <p>Through our partnerships with top tier international banks, integrated oil majors, NOC’s, trading houses, leading ship owners and “Teapot” refiners, we are able to effectively cover a broad swathe of the Oil market from our base in South-East Asia.</p>
        </div>
        </div>
        </div>
        </div>
    );
};

export default About;