import React from "react";
import "./contactme.scss";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export const ContactMe = () => {
  return (
    <div>
      {/* <p>Reach Me</p> */}
      <div className="contact-me">
        <a href="https://www.instagram.com/na_tha_vvs/" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/vinoth-sharma" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/vinoth-sharma" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};
