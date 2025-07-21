
import React from "react";
import "../Experience/Experience.css";

const Experience = () => {
  const thinkworks = () => {
    window.location.href = "https://thinkworks.co.in/";
  };

  return (
    <div id="experience" className="experience-section">
      <h1 className="work_heading">Work Experience</h1>
      <div className="container">
        <div className="experience-content">
          <div className="experience-item">
            <h6>
              <b onClick={thinkworks}>ThinkWorks Infotech, Banglore, IND</b>
            </h6>
            <h4>Full Time</h4>
            <h5>Dec 2019 - July 2023</h5>
            <ul>
              <li>
                Involved in various phases of Software Development Life Cycle
                (SDLC) such as planning, requirements gathering, design,
                development, and testing.
              </li>
              <li>
                Developing interactive and user-friendly front-end applications
                using Angular, ensuring seamless user experiences.
              </li>
              <li>
                Maintained Interface compatibility and concurrency in the
                project using Java 1.8 new features like Lambda expressions,
                default, static methods, and Concurrency API.
              </li>
              <li>
                Developed the business layer components as Stateless Session
                Beans based on EJB API.
              </li>
              <li>
                Developed Angular 5 custom directives and used Routes and
                Factory validations in Angular.
              </li>
              <li>
                Designed, built, and deployed a multitude application utilizing
                almost all of AWS stack (Including EC2, S3,Lambda, Dynamo DB,
                SQS and RDS), focusing on high-availability, fault tolerance,
                and auto- scaling.
              </li>
              <li>
                I have used Apache Tomcat for the server-side work and did data
                streaming using Apache Kafka.
              </li>
              <li>
                Working in an Agile environment for a sprint of 2 weeks and
                achieved an average of 8 points a sprint.
              </li>
              <li>
                Used GitHub and source tree for version control processes also
                used Jenkins for CICD pipeline. OpenText and Confluence was used
                for document management for the whole application and client.
                For cloud side AWS was used in which EC2, S3, Lambda, and
                elastic beanstalk etc. Developed RESTful Web services for
                transmission of data in JSON format.
              </li>
              <li>
                Worked with enterprise web applications, with hands-on
                experience in data formats and service standards including XML,
                JSON, REST, SOAP.
              </li>
              <li>
                Developed the application with various Spring Framework modules
                like Spring Batch to process Batch Files.
              </li>
              <li>
                Used Spring MVC framework at the Web tier level to isolate each
                layer of the application so that complexity of integration will
                be reduced, and maintenance will be very easy.
              </li>
              <li>
                Used Spring AOP for solving crosscutting concerns like keeping
                customer log data and transactions details.
              </li>
              <li>
                Deployed Spring Boot based Micro services Docker container using
                Amazon EC2 container services and using AWS admin console.
              </li>
              <li>
                Developed the persistence layer using Hibernate Framework by
                configuring the various mappings in Hibernate files and created
                DAO layer.
              </li>
              <li>
                Designed and integrated the full-scale Hibernate persistence
                solution with the application architecture.
              </li>
              <li>
                Involved in design and development of the Hibernate Domain Model
                for the service.
              </li>
              <li>
                Used Active MQ as Java Messaging Service for producing data
                between applications.
              </li>
              <li>
                Worked on RESTful Web services as well as Node Rest framework
                for backend services used Mongo DB (NoSQL) for database services
                and RESTful web services using Jersey for JAX-RS implementation.
              </li>
              <li>
                Designed and developed Middle-tier components for company's
                object framework using best practices and design Patterns and
                used in Model-View-Controller (MVC).
              </li>
              <li>
                Secured the API's by implementing Oauth2 token-based
                authentication/authorization scheme using Spring Security.
              </li>
              <li>
                Create and configured the continuous delivery pipelines for
                deploying Micro Services by using Jenkins.
              </li>
              <li>
                Installed, monitored and maintained the development
                infrastructure including JIRA.
              </li>
              <li>
                Used SQL Server as the relational database to perform the CRUD
                operations on and along with I have developed Triggers, Stored
                procedures.
              </li>
              <li>
                Using SQL Developer IDE for query development, debugging, and
                performance optimization of database operations.
              </li>
              <li>
                Worked on Log4J to validate functionalities and Mockito
                framework JUnit for Unit testing and executed TDD framework.
              </li>
              <li>
                Designed and implemented automated test cases using TestNG
                framework, enabling regression and integration testing for REST
                APIs and enhancing test coverage by 40%.
              </li>
              <li>
                Designed and executed unit tests using JUnit and Mockito to
                ensure high code coverage and application reliability; validated
                RESTful APIs with Postman to verify end-to-end functionality.
              </li>
              <li>
                Used Git to maintain the version of the files and took the
                responsibility to do the code merges and creating new branch
                when new feature implementation starts.
              </li>
              <li>
                Used Maven as build automation tool for deploying the project on
                WebSphere Application Server.
              </li>
              <li>
                <p className="skills_experience">
                  <b>
                    Skills: Agile Methodology, SQL Server, Java/J2EE, HTML5, CSS3,
                    Ajax, Rest API's, Bootstrap, JavaScript, Angular 5, NodeJS,
                    Hibernate, Spring Framework, Kafka, Spring MVC, Spring IOC,
                    Spring Boot, Spring Security, OAuth, JAX-RS, GIT, JUnit,
                    Postman, Maven, Amazon Web Services (AWS), Micro Services,
                    Mongo DB, WebSphere, JIRA, Jenkins, Spring Tool Suite.
                  </b>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
