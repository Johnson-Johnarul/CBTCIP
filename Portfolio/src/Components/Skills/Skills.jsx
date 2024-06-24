import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills box" id="skill">
      <div className="skill">
        <h1>My Skills</h1>
        <div className="dash">
          <div className="dash1"></div>
          <div className="dash2"></div>
        </div>
      </div>
      <div className="skill-container">
        <div className="row">
          <div className="skill-box">
            <div className="title-group">
              <h1>HTML5</h1>
              <span>95%</span>
            </div>
            <div className="skill-progress">
              <span className="skill-bar"></span>
            </div>
          </div>
          <div className="skill-box">
            <div className="title-group">
              <h1>CSS3 & Tailwind CSS</h1>
              <span>85%</span>
            </div>
            <div className="skill-progress">
              <span className="skill-bar css"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="skill-box">
            <div className="title-group">
              <h1>JavaScript</h1>
              <span>80%</span>
            </div>
            <div className="skill-progress">
              <span className="skill-bar javascript"></span>
            </div>
          </div>
          <div className="skill-box">
            <div className="title-group">
              <h1>React JS</h1>
              <span>75%</span>
            </div>
            <div className="skill-progress">
              <span className="skill-bar react"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="skill-box">
            <div className="title-group">
              <h1>TypeScript</h1>
              <span>60%</span>
            </div>
            <div className="skill-progress">
              <span className="skill-bar typescript"></span>
            </div>
          </div>
          <div className="skill-box">
            <div className="title-group">
              <h1>Nest JS</h1>
              <span>70%</span>
            </div>
            <div className="skill-progress">
              <span className="skill-bar nextjs"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="skill-box">
            <div className="title-group">
              <h1>PhotoShop</h1>
              <span>80%</span>
            </div>
            <div className="skill-progress">
              <span className="skill-bar photoshop"></span>
            </div>
          </div>
          <div className="skill-box">
            <div className="title-group">
              <h1>SEO</h1>
              <span>65%</span>
            </div>
            <div className="skill-progress">
              <span className="skill-bar seo"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
