import React from 'react';
import './pagetitle.css';

const About = () => {
    return (
        <div>
             <div class="hover hover-2 text-white"><img src={require("../images/haccareers.jpg")} alt="careers" />
          <div class="hover-overlay"></div>
          <div class="hover-2-content">
            <h2 class="hover-2-title text-uppercase font-weight-bold mb-0">The Company</h2>
            {/* <p class="hover-2-description text-uppercase mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
    </div>
  </div>
        </div>
    );
};

export default About;