import React from 'react';
import { useRef, useEffect, useState } from "react";
import "./App.css";
import "./Columns.css"
import WelcomeText from "./WelcomeText";
import Carousel from "./Carousels";
import Navigation from "./Navigation";
import Columns from "./Columns";
import HtmlCssBadge from "./assets/Images/ITS-Badges_HTML-and-CSS_1200px.png"; 
import NothingForMoneyImage from "./assets/Images/NothingForMoney-project.png"; 
import SpaceProjectImage from "./assets/Images/S.P.A.C.E-project.png"; 
import MeImage from "./assets/Images/Me.png";
import Footer from "./Footer";

function App() {
  const dialogRef = useRef(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    console.log("Experience section:", document.querySelector("#experience-section"));
    console.log("Sivun kokonaiskorkeus App.jsx:ssä:", document.documentElement.scrollHeight);
  }, []);

  const openModal = () => {
    dialogRef.current.showModal();
  };

  const closeModal = () => {
    dialogRef.current.close();
  };

  const toggleLock = () => {
    setIsLocked((prev) => !prev);
  };

  return (
    <div style={{ minHeight: "300vh" }}>
      <Navigation />
      <WelcomeText />

      <section id="experience-section" className="content-section">
        <div className={`wrappers-container ${isLocked ? "locked" : ""}`}>
          <Carousel wrapperNumber={1} isLocked={isLocked}>
            <div className="container">
              <div className="container-blur"></div>
              <h1>
              <span id="last-letter">Hello,</span>              
                <span id="after-letter">I am currently developing this website.</span>
              </h1>
            </div>
            <div className="container">
              <div className="container-blur"></div>
              <h1>
                <span id="after-letter">I began making a new</span>
                <span id="last-letter"> portfolio.</span>
              </h1>
            </div>
            <div className="container">
              <div className="container-blur"></div>
              <h1>This one.</h1>
            </div>
          </Carousel>

          <Carousel wrapperNumber={2} isLocked={isLocked}>
            <div className="container">
              <div className="container-blur"></div>
              <h1>Here,</h1>
              <h1 id="after-letter">even though it is under construction</h1>
            </div>
            <div className="container">
              <div className="container-blur"></div>
              <h1>
                <span id="after-letter">There is also</span>
                <span id="after-letter"> a lock button for</span>
                <span id="last-letter"> unlock.</span>
              </h1>
            </div>
            <div className="container">
              <div className="container-blur"></div>
              <h1>
                <span id="last-letter">Cool.</span>
              </h1>
            </div>
          </Carousel>

          <Carousel wrapperNumber={3} isLocked={isLocked}>
            <div className="container">
              <div className="container-blur"></div>
              <h1>
                <span id="last-letter">This page</span>
              </h1>
              <h1><span id="after-letter">is done with React and custom CSS</span></h1>
            </div>
            <div className="container">
              <div className="container-blur"></div>
              <h1>
                <span id="after-letter">Take a look.</span>
              </h1>
            </div>
            <div className="container">
              <div className="container-blur"></div>
              <h1 id="last-letter">Go ahead.</h1>
            </div>
          </Carousel>
        </div>
        <div className="carousel-lock-container">
          <button className={`carousel-lock-btn ${isLocked ? "locked" : ""}`} onClick={toggleLock}>
            <svg
              className="unlock-icon"
              style={{ display: isLocked ? "none" : "inline" }}
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M240-640h360v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85h-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640Zm0 480h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM240-160v-400 400Z" />
            </svg>
            <svg
              className="lock-icon"
              style={{ display: isLocked ? "inline" : "none" }}
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" />
            </svg>
          </button>
        </div>
      </section>

      <section className="content-section">
  <div className="columns content-wrapper">
    <div className="content">
      <Columns label="Certifications" contentType="certifications">
        <div className="certifications-container">
          <div className="certification-item">
            <div className="certification-item-content">
              <div>
                <p style={{ color: "rgb(238, 245, 251)", fontSize: "1.5rem", fontWeight: "bold" }}>
                  HTML & CSS
                </p>
                <p>Ceriport Pearsons badge of completion HTML & CSS test.</p>
              </div>
              <div className="certification-item-image">
                {HtmlCssBadge && <img src={HtmlCssBadge} alt="HTML & CSS Badge" />}
              </div>
            </div>
          </div>

          <div className="certification-item">
            <div className="certification-item-content">
              <div>
                <p style={{ color: "rgb(238, 245, 251)", fontSize: "1.5rem", fontWeight: "bold" }}>
                  JAVASCRIPT
                </p>
                <p>I'm really bad at this.</p>
              </div>
              <div className="certification-item-image">
                {/* Renderöidään kuva vain jos src ei ole tyhjä */}
                {false && <img src="" alt="JavaScript Badge" />}
              </div>
            </div>
          </div>

          <div className="certification-item">
            <div className="certification-item-content">
              <div>
                <p style={{ color: "rgb(238, 245, 251)", fontSize: "1.5rem", fontWeight: "bold" }}>
                  React, Node.Js & TypeScript
                </p>
                <p>
                  I <span className="typed-text-certifications"></span>
                </p>
              </div>
              <div className="certification-item-image">
                {/* Renderöidään kuva vain jos src ei ole tyhjä */}
                {false && <img src="" alt="React Badge" />}
              </div>
            </div>
          </div>
        </div>
      </Columns>

      <Columns label="Projects" contentType="projects">
        <div className="certifications-container">
          <div className="certification-item">
            <p style={{ color: "rgb(238, 245, 251)", fontSize: "1.5rem", fontWeight: "bold", textDecoration: "none", fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
              <a
                href="https://aiche-h.github.io/WEB_15_group_3_project/"
                style={{ color: "inherit", textDecoration: "none", fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif' }}
              >
                S.P.A.C.E
              </a>
            </p>
            <p>A school group project about our solar system.</p>
            <a href="https://aiche-h.github.io/WEB_15_group_3_project/">
              <img src={SpaceProjectImage} alt="School project about our solar system" />
            </a>
          </div>

          <div className="certification-item">
            <p style={{ color: "rgb(238, 245, 251)", fontSize: "1.5rem", fontWeight: "bold", textDecoration: "none", fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
              <a
                href="https://aiche-h.github.io/WEB_15_group_3_project/"
                style={{ color: "inherit", textDecoration: "none", fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif' }}
              >
                Nothing For Money Homepage
              </a>
            </p>
            <p>A freelance project about a company that sells nothing for money.</p>
            <a href="https://aiche-h.github.io/WEB_15_group_3_project/">
              <img src={NothingForMoneyImage} alt="Freelance project about a company that sells nothing for money" />
            </a>
          </div>
        </div>
      </Columns>
    </div>
  </div>
</section>

      <section className="content-section about-section">
        <h1><span id="certifications-letter">About</span></h1>
        <div className="about-content">
          <div className="about-text">
            <p>I am Johannes, a software development student at Taitotalo. At Taitotalo, I have gained hands-on experience in web development and programming. In our team project, we follow the Scrum methodology, hold regular meetings, and use GitHub for version control. This has helped me understand structured development and enhanced my collaboration skills.</p>
            <p>This is the second version of my portfolio. I am currently working on it. The first one was made with HTML, CSS, and JavaScript. This one is built with React and Vite.</p>
            <p>I have implemented new features and added new projects. There is also a working MongoDB database and a backend. It's listening to you. There is a Login Page where you can register and log in to your own page. It's not much of a page yet. In the menu, you can find links to my LinkedIn, GitHub, and email. Or scroll down and send a direct message.</p>
            <p>Previously, I worked as a Logistics Specialist at a company called Kesko Oyj. A couple of years ago, I began learning to code. Why? Because it is fascinating to see how everything works and to create something that did not exist before. It's much like writing novels, which I have also done. It is still a hobby. I have learned a lot of new things and am still learning. I am looking forward to new challenges and opportunities.</p>
          </div>
          <div className="about-image">
            <img src={MeImage} alt="Johannes" />
          </div>
        </div>
        <div className="skills-flex">
          <div className="skill-category">
            <h2><span id="certifications-letter">Programming</span></h2>
            <ul>
              <li>JavaScript/TypeScript</li>
              <li>React</li>
              <li>Python</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h2><span id="certifications-letter">Skills</span></h2>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>Some?</li>
            </ul>
          </div>
        </div>
        <div className="ai-text">
          <h3><span id="ai-letter">AI</span></h3>
          <p>
            Artificial intelligence is fundamentally transforming the work of developers. Today, it is essential not only to know how to use AI tools, but also to deeply understand logic and code. 
            </p>
            <p>I actively follow the latest trends in the field and have embraced AI as a powerful assistant in my workflow—while always ensuring I understand the underlying principles and maintain strong problem-solving skills.
          </p>
        </div>
      </section>
<Footer />
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <button onClick={openModal}>Avaa modaalinen dialogi</button>
        <dialog className="modal" ref={dialogRef}>
          <p>Tämä on modaalinen dialogi.</p>
          <button onClick={closeModal}>Sulje</button>
        </dialog>
      </div>
    </div>
  );
}

export default App;