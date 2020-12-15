import React from "react";
import { Avator } from "../../components/avatar/avatar";
import { ContactMe } from "../../components/contactMe/contactme";
import "./leftSection.scss";

function LeftSection() {
  return (
    <header className="app-header">
      <Avator />
      <div className="details">
        <h2>Vinoth Sharma</h2>
        <p>Software Developer</p>
        <ContactMe />
      </div>
    </header>
  );
}

export default LeftSection;
