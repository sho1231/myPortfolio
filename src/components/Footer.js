import React from "react";
import "../styles/Footer.css";
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="contact">
        <div style={{display:"inline-flex"}}>
          <div><MailIcon/></div><div>:shourja.ganguly99@gmail.com</div>
        </div>
        <div style={{display:"inline-flex",marginLeft:"12px"}}>
          <div><CallIcon/></div><div>:9831170184</div>
        </div>
      </div>
      <div className="profiles">
        <div onClick={()=>window.open("https://github.com/sho1231", '_blank')} style={{cursor:"pointer"}}><GithubIcon/></div>
        <div className="createSpace">a</div>
        <div className="createSpace">sd</div>
        <div className="createSpace">s</div>
        <div style={{cursor:"pointer"}} onClick={()=>window.open("https://www.linkedin.com/in/shourja-ganguly-6116ba223/", '_blank')}><LinkedInIcon/></div>
      </div>
    </div>
  );
}

export default Footer;
