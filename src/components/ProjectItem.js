import React from "react";
import mongo from '../assets/mongo.png';
import nodejs from '../assets/nodejs.png';
import react from '../assets/react.png';
import html from '../assets/html-5.png';
import css from '../assets/css.png';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


function ProjectItem({ image, name, info, id, front, back, dep, username, pass }) {
  const techStackStyling = {
    display: "flex",
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
    }, 5000)
  }
  return (
    <div
      className="projectItem"
    >
      <div style={{ backgroundImage: `url(${image})`,cursor:"pointer" }} className="bgImage" onClick={() => window.open(dep, '_blank')}/>
      <h1> {name} </h1>
      <div className="context">
        {info}
      </div>
      <div className="techStackLogo" style={techStackStyling}>
        {id===3?<div><img src={html} alt="html5" style={{ objectFit: "contain",height:"64px" }} /></div>:<div><img src={mongo} alt="mongo" style={{ objectFit: "contain" }} /></div>}
        {id===3?<div><img src={css} alt="css" style={{ objectFit: "contain",height:"64px" }} /></div>:<div><img src={nodejs} alt="nodejs" style={{ objectFit: "contain" }} /></div>}
        <div><img src={react} alt="react" style={{ objectFit: "contain" }} /></div>
      </div>
      <div className="github" style={{ display: "flex", margin: "6px",  justifyContent: "space-between" }}>
        <button style={{ backgroundColor: "grey",opacity:"0.7", padding: "3px",color: "white", borderRadius: "8px", cursor: "pointer", border: "0px" }} onClick={() => window.open(front, '_blank')}>Front end source code</button><br /><br />
       {id===3?<> <button style={{ backgroundColor: "grey", opacity:"0.5",padding: "1px",color: "white", borderRadius: "8px",  border: "0px",marginLeft:"4px" }} disabled={id===3?true:false}>No Back end source code available</button><br /><br /></>:<> <button style={{ backgroundColor: "grey", opacity:"0.7",padding: "3px",color: "white", borderRadius: "8px", cursor: "pointer", border: "0px" }} onClick={() => window.open(back, '_blank')}>Back end source code</button><br /><br /></>}
      </div>
      {/* <button style={{ backgroundColor: "green", padding: "13px", borderRadius: "8px", cursor: "pointer" }} onClick={() => window.open(dep, '_blank')}>Click here to go to site</button><br /><br /> */}
      {id===3?<><button style={{fontStyle:"italic"}} disabled={id===3?true:false}>No credentials needed</button></>:<><button style={{cursor:"pointer",fontStyle:"italic"}} onClick={()=>copycred()}><ContentCopyIcon/>{isCopied}</button></>}
    </div>
  );
}

export default ProjectItem;
