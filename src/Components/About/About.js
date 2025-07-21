import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { MdOutlineFolderCopy } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import Me from "../../assets/Me2.jpeg";

const About = () => {
  return (
    <div id="about" class="about">
      <h1 className="about_heading">About Me</h1>
      <div className="about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt=""></img>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>4 years experience</small>
            </article>

            <article className="about_card">
              <MdOutlineFolderCopy className="about_icon"></MdOutlineFolderCopy>
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>

            <article className="about_card">
              <FaUserGraduate className="about_icon"></FaUserGraduate>
              <h5>Education</h5>
              <small>M.Sc. Masters Degree</small>
              <br />
              <small>B.Sc. Bachelors Degree</small>
            </article>
          </div>
          <p>
            Software Engineer with 4 years of experience in designing and
            developing scalable, high-performance backend systems using Spring
            Boot, Hibernate, and Microservices architecture. Proficient in
            building robust RESTful APIs and integrating Spring Security, OAuth
            2.0, and JWT authentication. Skilled in JPA, Hibernate, SQL, and
            Apache Maven for efficient database management and build automation.
            <br />
            <br />
            Experienced in developing reactive, event-driven services using
            Spring WebFlux and Apache Kafka, enabling real-time data streaming
            and asynchronous messaging for large-scale systems. Additionally,
            sexperienced in unit testing with JUnit 5 and Mockito and Surefire.
            <br />
            <br />
            Strong knowledge of Agile/Scrum with expertise in HTML, CSS,
            JavaScript, Angular, React, and Chart.js for responsive UI
            development. Experienced in AWS (EC2, S3, RDS, Lambda, IAM,
            CloudWatch), Docker, Kubernetes, and CI/CD pipelines for scalable
            deployments and automated delivery.
            <br />
            <br />
            Successfully delivered full-stack and data-driven projects,
            including the E-Commerce, Crowd Funding,
            Pose Detection, Online Voting System,Notes Sharing, Sign Language Detection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
