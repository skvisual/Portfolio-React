import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import reactLogo from '../assets/images/reactlogosmall.png'

const Footer = () => {
  return (    
    <MDBFooter className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <a href="https://github.com/skvisual" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x ghub"></i></a>
        <a href="https://www.linkedin.com/in/skvisual" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in fa-2x ghub"></i></a>
        <a href="https://www.twitter.com/_skvisual" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter fa-2x ghub"></i></a>
        </MDBContainer>
        {/* <br></br> */}
         
        <div className="footerLogo">
          made with&nbsp; <img src={reactLogo} alt="react-logo"/>
        </div>

      </div>
    </MDBFooter>
  );
}

export default Footer;