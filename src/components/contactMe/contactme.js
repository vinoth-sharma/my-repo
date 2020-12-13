import React from "react";
import "./contactme.scss";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';

export const ContactMe = () => {
  return (
    <div>
      <p>Connect with me</p>
      <div className="contact-me">
        <InstagramIcon />
        <LinkedInIcon />
        <GitHubIcon />
      </div>
    </div>
  );
};
