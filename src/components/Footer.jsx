import "./Footer.css";
import React from 'react';
import {FaHome,FaPhone,FaMailBulk, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                      <p>D-148 Alpha 1 Greater Noida Uttar Pradesh (201310)</p>
                      <p>India.</p>
                    </div>
                </div>
                <div className="phone">
                  <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                  +91-9720242705 </h4>
                </div>
                <div className="email">
                  <a href="mailto:rupeshthakur2705@gmail.com">
                    <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                      rupeshthakur2705@gmail.com
                  </a>
                </div>
            </div>
            <div className="right">
              <h4>About the Portfolio</h4>
              <p>Hi, I'm Rupesh Kumar. I have strong coding and problem-solving skills, along with a solid understanding of web development.</p>
              <div className="social">
                <a href="https://www.linkedin.com/in/rupesh-kumar-802b11195/">
                  <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>
                <a href="https://github.com/rj-freaker/">
                  <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>
                <a href="https://leetcode.com/rupeshkumar706011">
                  <SiLeetcode size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>
                <a href="https://codeforces.com/profile/_lone_wolf">
                  <SiCodeforces size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default footer
