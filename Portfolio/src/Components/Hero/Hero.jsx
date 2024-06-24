import React from "react";
import Profile_img from "../../assets/img-2.jpg";
import "./Hero.css";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={Profile_img} alt="no_image" srcset="" />
      <h1>
        <span className="hide">Hello,</span> I'm
        <span className="text"> Johnson Johnarul</span>, <br />
        <ReactTyped
          strings={["Frontend Developer", "Programmer", "Coder"]}
          typeSpeed={120}
          loop
          backSpeed={20}
        />
      </h1>
      <p>
        As a seasoned frontend developer, I specialize in creating dynamic and
        responsive web applications using modern technologies.
      </p>
      <div className="hero-action">
        <a href="#contact">
          <div className="hero-connect">
            <Link
              className="txt"
              to="contact"
              smooth={true}
              offset={-150}
              duration={500}
            >
              Connect with me
            </Link>
          </div>
        </a>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1OC2Y-297g2fD-oyb33CM4jTiMLPoUfR8/view?usp=sharing"
            download
            target="blank"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
