"use client";

import React, { useRef } from "react";
import "./MyProject.css";
import myprojects_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyProject = () => {
  return (
    <div className="myprojects" id="projects">
      <div className="myproject-title">
        <h1>My latest Projects</h1>
        <div className="dash">
          <div className="dash1"></div>
          <div className="dash2"></div>
        </div>
      </div>
      <div>
        <div className="myproject-container">
          {myprojects_data.map((project, index) => {
            return <img key={index} src={project.w_img} alt="" />;
          })}
        </div>
      </div>
      <div className="myproject-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyProject;
