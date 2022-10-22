import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div style={{margin:"13px"}}>
      <b>Email:</b><span>shourja.ganguly181@gmail.com</span>
      </div>
      <div style={{margin:"13px"}}>
      <b>Contact No:</b><span>8777642434</span>
      </div>
      <div style={{margin:"13px"}}>
      <b>Alternate Contact No:</b><span>9831170184</span>
      </div>
    </div>
  );
}

export default Footer;
