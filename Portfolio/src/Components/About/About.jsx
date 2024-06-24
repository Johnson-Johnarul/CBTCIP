import React from "react";
import "./About.css";
import profile_img from "../../assets/img-1.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutTitle">
        <h1>About Me</h1>
        <div className="dash">
          <div className="dash1"></div>
          <div className="dash2"></div>
        </div>
      </div>
      <div className="aboutSections">
        <div className="aboutLeft">
          <img src={profile_img} alt="" />
        </div>
        <div className="aboutRight">
          <div className="aboutPara">
            <p>
              As a skilled Front-End Developer, I bring expertise in crafting
              dynamic and visually appealing web interfaces. Proficient in HTML,
              CSS, and JavaScript, I have a keen eye for design and user
              experience.
            </p>
            <p>
              My experience includes building responsive websites, optimizing
              performance, and ensuring cross-browser compatibility. Familiar
              with modern front-end frameworks like React, I am passionate about
              creating seamless and intuitive user interactions. Strong
              collaboration and problem-solving skills empower me to contribute
              effectively to cross-functional teams, delivering high-quality,
              user-centric web solutions.
            </p>
          </div>
          <div className="aboutDetails">
            <table>
              <tr>
                <th>Name:</th>
                <td>Johnson Johnarul</td>
              </tr>
              <tr>
                <th>Date of birth:</th>
                <td>15/12/1997</td>
              </tr>
              <tr>
                <th>Address:</th>
                <td>Ambernath, Thane, Maharashtra</td>
              </tr>
              <tr>
                <th>Zip code:</th>
                <td>421504</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>johnsonjohnarul245@gmail.com</td>
              </tr>
              <tr>
                <th>Phone:</th>
                <td>9370885492</td>
              </tr>
            </table>
          </div>
          <div className="resumeDown">
            <a
              href="https://drive.google.com/file/d/1OC2Y-297g2fD-oyb33CM4jTiMLPoUfR8/view?usp=sharing"
              download
              target="blank"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
