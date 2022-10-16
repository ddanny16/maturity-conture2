import "./HeroImgStyles.css";
// import IntroImj from "../assets/diego.jpg"


import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeroImg extends Component {
  render() {
    return <div className="hero">
      <div className="mask">
        <img className="into-img" src={this.props.trc} alt="IntroImg" />
      </div>
      <div className="content">
        <p>{this.props.text}</p>
        <h1>{this.props.heading}</h1>
        <div>
          <Link to={this.props.link1a} className="btn">{this.props.link1}</Link>
          <Link to={this.props.link2a} className="btn-light">{this.props.link2}</Link>
        </div>
      </div>
    </div>;
  }
};

export default HeroImg;
