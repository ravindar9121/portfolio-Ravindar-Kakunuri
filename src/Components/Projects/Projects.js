import React from "react";
import "../Projects/Projects.css";
import Crowd_Funding from "../../assets/Blood Bank System.png";

const Projects = () => {
  const moreLink = () => {
    window.location.href = "https://github.com/ravindar9121?tab=repositories";
  };
  return (
    <div id="projects" className="projects">
      <h1 className="projects_heading">Projects</h1>
      <div className="project_container">
        <article className="project_item">
          <div className="project_item_image">
            <img className="image" src={Crowd_Funding} alt=""></img>
          </div>
          <h3 className="project_title">Sea Monster Crowd Funding</h3>
          <p>
            Developed a full-stack Blood Bank Management System using Spring
            Boot and Angular to manage blood inventory, donor data, and
            real-time availability with role-based access and responsive UI.
          </p>
          <div className="project_item_cta">
            <a
              href="https://github.com/ravindar9121/E-Commerce"
              className="btn-git"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://drive.google.com/file/d/1-CDxl_qNO-8Qo5dtJ7KfCNQExyKdGLz7/view?usp=sharing"
              className="btn-report"
              target="_blank"
            >
              Report
            </a>
          </div>
        </article>
      </div>
      <div className="more">
        <h2 onClick={moreLink}>More on Github</h2>
      </div>
    </div>
  );
};

export default Projects;
