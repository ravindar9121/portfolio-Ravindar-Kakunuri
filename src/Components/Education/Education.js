import React from "react";
import "./Education.css";
import VEL from "../../assets/veltech logo.jpg";
import USF from "../../assets/USF.png";

const Education = () => {
  const velLink = () => {
    window.location.href = "https://www.veltech.edu.in/";
  };

  const usfLink = () => {
    window.location.href = "https://www.usf.edu";
  };

  return (
    <div id="education" className="eduaction">
      <h1 className="education_heading">Education</h1>
      <div className="education_container">
        <div className="education">
          <div className="education_sru">
            <img src={VEL} alt="" onClick={velLink}></img>
            <h3 onClick={velLink}>Vel Tech University</h3>
            <h4>Bachelors in Computer Science & Engineering</h4>
            <p>Jul 2017- Jul 2021</p>
            <h4>
              Coursework: Java, C Programming, Data Structures, Computer
              Networks, Entrepreneurship, Project Management, Computer
              Organization, Network Analysis
            </h4>
          </div>
          <div className="education_usf">
            <img src={USF} alt="" onClick={usfLink}></img>
            <h3 onClick={usfLink}>University of South Florida</h3>
            <h4>Masters in Computer Science</h4>
            <p>Aug 2023 - May 2025</p>
            <h4>
              Coursework: Operating Systems, Data Structures and Algorithms,
              Computer Architecture
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
