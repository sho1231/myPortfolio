import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id, front, back, dep, username, pass }) {
  const navigate = useNavigate();
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
      <a href={front} target="_blank" style={{ textDecoration: "none", color: "blue" }}>Front-end source code</a><br /><br />
      <a href={back} target="_blank" style={{ textDecoration: "none", color: "blue" }}>Back-end source code</a><br /><br />
      <a href={dep} target="_blank" style={{ textDecoration: "none", color: "blue" }}>Click here to go to site</a><br /><br />
      <span onClick={()=>copycred()} style={{ cursor: "pointer" }}>{isCopied}</span>
    </div>
  );
}

export default ProjectItem;
