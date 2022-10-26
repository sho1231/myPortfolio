import React from "react";
import mongo from '../assets/mongo.png';
import nodejs from '../assets/nodejs.png';
import react from '../assets/react.png'

function ProjectItem({ image, name, info,id, front, back, dep, username, pass }) {
  const techStackStyling={
    display:"flex",
    justifyContent: "space-around",
    overflow: "auto",
    flexWrap: "wrap",
  }

  const [isCopied, setIsCopied] = React.useState("Click here to copy credentials");
  function copycred() {
    navigator.clipboard.writeText(`username:${username} password:${pass}`);
    setIsCopied("Copied!");
    setTimeout(() => {
          setIsCopied("Click here to copy credentials");
    },5000)
  }
  return (
    <div
      className="projectItem"
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <div className="context">
        {info}
      </div>
      <div className="techStackLogo" style={techStackStyling}>
        <div><img src={mongo} alt="mongo" style={{objectFit:"contain"}}/></div>
        <div><img src={nodejs} alt="nodejs" style={{objectFit:"contain"}}/></div>
        <div><img src={react} alt="react" style={{objectFit:"contain"}}/></div>
      </div>
      <a href={front} target="_blank" style={{ textDecoration: "none", color: "blue" }}>Front-end source code</a><br /><br />
      <a href={back} target="_blank" style={{ textDecoration: "none", color: "blue" }}>Back-end source code</a><br /><br />
      <a href={dep} target="_blank" style={{ textDecoration: "none", color: "blue" }}>Click here to go to site</a><br /><br />
      <span onClick={()=>copycred()} style={{ cursor: "pointer" }}>{isCopied}</span>
    </div>
  );
}

export default ProjectItem;
