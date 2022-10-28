import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from '@mui/icons-material/Description';
import react from '../assets/react.png';
import mongo from '../assets/mongo.png';
import mysql from '../assets/mysql.png';
import nodejs from '../assets/nodejs.png';
import expressJs from '../assets/expressJs.png';
import html from '../assets/html-5.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import bootstrap from '../assets/bootstrap.png'
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Home.css";

function Home() {
  React.useEffect(() => {
    document.title = "Home"
  }, [])
  const techStackStyling = {
    display: "flex",
    justifyContent: "space-around",
    overflow: "auto",
    flexWrap: "wrap",
  }
  const imgStyling = {
    objectFit: "contain", height: "44px"
  }
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Shourja</h2>
        <div className="prompt">
          <p>A full stack developer with a passion for learning and creating.</p>
          <a href="https://github.com/sho1231" target="_blank"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/shourja-ganguly-6116ba223/" target="_blank"><LinkedInIcon /></a>
          <a href="https://drive.google.com/file/d/1V39Jw0hkDWSS40JwMz76Hp_0Sshh0NqA/view?usp=share_link" target="_blank"><DescriptionIcon /></a>
        </div>
        <span style={{ color: "white", cursor: "pointer", fontSize: "24px", color: "yellow" }} onClick={() => document.querySelector("#skills").scrollIntoView()}>Click here to see skills</span>
      </div>
      <div className="skills" id="skills">
        <h1> Skills</h1>
        <ul>
          <li><div className="frontend">
            <h5>Frontend</h5>
            <div style={techStackStyling}>
              <div><img src={html} alt="html" style={imgStyling} /></div>
              <div><img src={css} alt="css" style={imgStyling} /></div>
              <div><img src={bootstrap} alt="bootstrap" style={imgStyling} /></div>
              <div><img src={js} alt="js" style={imgStyling} /></div>
              <div><img src={react} alt="react" style={imgStyling} /></div>
            </div>
          </div>
          </li>
          <li>
            <div className="backend">
              <h5>Backend</h5>
              <div style={techStackStyling}>
                <div><img src={nodejs} alt="node" style={imgStyling} /></div>
                <div><img src={expressJs} alt="express" style={imgStyling} /></div>
              </div>
            </div>
          </li>
          <li>
            <div className="databases">
              <h5>Databases</h5>
              <div style={techStackStyling}>
                <div><img src={mongo} alt="mongo" style={imgStyling} /></div>
                <div><img src={mysql} alt="mysql" style={imgStyling} /></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
