import React from "react";
import "./FooterStyles.scss";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="footerText">
        <p> For more info, please follow us on the following platforms:</p>
      </div>

      <ul className="social-media">
        <a href="/" className="social-media_links">
          <i class="fa-brands fa-facebook-f" aria="hidden"></i>
        </a>
        <a href="/">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <a href="/">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="/">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="/">
          <i class="fa-brands fa-skype"></i>
        </a>
        <a href="/">
        <i class="fa-brands fa-google-plus-g"></i>       
         </a>
      </ul>

      <div className="mainFooter">
        <div className="footerLinks">
          <div className="surgicarelogo">
            <h1>Maturity Couture</h1>
          </div>

          <div className="footerLink">
            <p> <Link to="/">Home</Link></p>
            <ul>
              <li><Link to="/project">Product</Link></li>
              <li><Link to="/about">About</Link></li>              
              <li><Link to="/contact">Contact</Link></li>              
              <li><Link to="/faqs">FAQs</Link></li>              
              
            </ul>
          </div>

          <div className="footerLink">
            <p>Working Hours: 9:00AM-6:00PM (Monday – Friday)</p>
            <ul>
              <li>Find your type </li>
              <li>Partners & co.</li>
              <li>Stores</li>
            </ul>
          </div>

        
        </div>
      </div>


    </footer>
  );
};

export default Footer;
