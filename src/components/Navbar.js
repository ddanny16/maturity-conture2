import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"
// import Img1 from "../assets/MCP_nobg.png"

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const[color,setColor]=useState(false);
  const changeColor = ()=>{
if(window.scrollY){
  setColor(true)
} else{
  setColor(false)
}
  } 

  window.addEventListener("scroll", changeColor );

   return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Maturity Conture</h1>
      </Link>
      <ul className={click ? "nav-menu active":"nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : 
        (<FaBars size={20} style={{ color: "#eef" }} />)}


      </div>
    </div>
  )
};

export default Navbar;
