import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  React.useEffect(()=>{
    document.title="Home"
  },[])
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Shourja</h2>
        <div className="prompt">
          <p>A full stack developer with a passion for learning and creating.</p>
          <a href="https://github.com/sho1231" target="_blank"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML,CSS,Bootstrap,MaterialUI,ReactJs
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS,ExpressJs
            </span>
          </li>
          <li className="item">
            <h2>Databases</h2>
            <span>
                MySQL,MongoDB
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
