import "./Heroimage.css";

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import {Link} from "react-router-dom"
const Heroimage = () => {
  const resumeURL = "https://drive.google.com/file/d/16_WDQG2XQTTLllmaOr-D2zHEqSucXGuV/view?usp=sharing";
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A Developer.</p>
        <h1>Full-stack Developer.</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <a href={resumeURL} target="_blank" rel="noopener noreferrer" className="btn btn-light">
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Heroimage
