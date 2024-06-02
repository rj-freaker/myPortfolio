import "./AboutComponent.css";

import React from 'react'
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>I'm a JavaScript developer. I create responsive secure websites for my clients. </p>
            <p>A skilled developer proficient in Frontend Development, HTML, and Java Script, Node js, React js.</p>
            <p>Skilled in utilizing different tools and technologies to create computer software. Aspiring to develop innovative solutions to complex problems.</p>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"></img>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"></img>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
