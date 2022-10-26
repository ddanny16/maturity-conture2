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
        <a href="https://www.facebook.com/maturitybrands" className="social-media_links">
          <i class="fa-brands fa-facebook-f" aria="hidden"></i>
        </a>
        <a href="https://wa.me/+2348033873112">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <i class="fa-regular fa-envelope"></i>
        </a>
        {/* <a href="/">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="/">
          <i class="fa-brands fa-skype"></i>
        </a>
        <a href="/">
          <i class="fa-brands fa-google-plus-g"></i>
        </a> */}
      </ul>

      <div className="mainFooter">
        <div className="footerLinks">
          <div className="surgicarelogo">
            <h1 className="linko">Maturity Couture</h1>
          </div>

          <div className="footerLink">
            <p> <Link className="linko" to="/">Home</Link></p>
            <ul className="ullink">
              <li><Link className="linko" to="/project">Product</Link></li>
              <li><Link className="linko" to="/about">About</Link></li>
              <li><Link className="linko" to="/contact">Contact</Link></li>
              <li><Link className="linko" to="/faqs">FAQs</Link></li>

            </ul>
          </div>

          <div className="footerLink">
            <p>Maturity Couture And Printing</p>
            <ul>
              <li className="linko"></li>
              <li className="linko"></li>
              <li className="linko"></li>
            </ul>
          </div>



        </div>
      </div>


    </footer>
  );
};

export default Footer;
