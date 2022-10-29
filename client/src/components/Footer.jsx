import React from 'react';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BackTop } from 'antd';

const Footer = () => {

  const style = {
    height: 50,
    width: 50,
    lineHeight: '50px',
    borderRadius: 4,
    backgroundColor: '#5bc0de',
    color: '#000000',
    textAlign: 'center',
    fontSize: 50,
  };
    return (
        <>
        <div className="bg-dark mt-5">
        <div className='container'>
            <div class="row justify-content-center">
            <div class="m-5">
            <ul class="list-group list-group-horizontal-sm text-center">
  <li class="col list-group-item p-4 bg-info">
  <h4><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 20 20">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>
&nbsp;HEAD OFFICE</h4>
    <p>Singapore 888888</p>
    </li>
  <li class="col list-group-item p-4 bg-info">
    <h4><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
&nbsp;CALL US</h4>
    <p>+65 1234 5678</p>
    </li>
  <li class="col list-group-item p-4 bg-info">
  <h4><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 20 20">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
&nbsp;EMAIL US</h4>
    <Link style={{textDecoration: 'none', color: 'black'}} to=""><p>contact@hacconsulting.com</p></Link>
  </li>
</ul>
</div>
</div>
        </div>
        <div className="container w-50" >
            <div className="row justify-content-center">
                <div className="col text-center">
        <Stack gap={0}>
      <h5 className="font-weight-bold" style={{color: "whitesmoke"}}>QUICK LINKS</h5>
      <Link to="/about" style={{textDecoration: "none", color: "whitesmoke"}}><p>About Us</p></Link>
      <Link to="/whatwedo" style={{textDecoration: "none", color: "whitesmoke"}}><p>What We do</p></Link>
      <Link to="/careers" style={{textDecoration: "none", color: "whitesmoke"}}><p>Careers</p></Link>
      <Link to="/contact" style={{textDecoration: "none", color: "whitesmoke"}}><p>Contact Us</p></Link>
    </Stack>
    </div>
    <div className="col text-center">
    <Stack gap={0}>
      <h5 className="font-weight-bold" style={{color: "whitesmoke"}}>OUR SERVICES</h5>
      <Link to="/whatwedo" style={{textDecoration: "none", color: "whitesmoke"}}><p>Trading</p></Link>
      <Link to="/whatwedo" style={{textDecoration: "none", color: "whitesmoke"}}><p>Shipping</p></Link>
      <Link to="/whatwedo" style={{textDecoration: "none", color: "whitesmoke"}}><p>Storage</p></Link>
      <Link to="/whatwedo" style={{textDecoration: "none", color: "whitesmoke"}}><p>Management Consulting</p></Link>
    </Stack>
    </div>
    </div>
    </div>
    <div className="container mt-4 font-weight-light" style={{color: "grey"}}>
<div className="row">
  <div className="col-md-4">
<p>CopyRight &nbsp;
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"/>
</svg>
&nbsp; 2020 HAC Consulting Pte. Ltd.</p>
<p>All rights reserved.</p>
  </div>
  <div className="col-md-4 offset-md-4 mt-4">
<p className="text-center"><Link to="/" style={{textDecoration: "none", color:"grey"}}>Terms of Use &nbsp; </Link>| &nbsp;<Link to="/" style={{textDecoration: "none", color:"grey"}}> Privacy Policy </Link>
  <div className="col offset-11">
    <BackTop>
      <div style={style}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
</svg></div>
    </BackTop>
    </div>
    </p>
  </div>
  
  </div>
    </div>
    
    </div>
        </>
    );
};

export default Footer;