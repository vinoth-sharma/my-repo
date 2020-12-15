import React from "react";
import "./projectBox.scss";

export const ProjectPanel = () => {
  return (
    <div className="project-container">
        <div className="project-panel">
      <h3>Mu Building</h3>
      <p>
        Mu Building is a web application used for constructing a building using sdiv's.
      </p>
      <div className="tech-stack">
          <div>HTML5</div>
          <div>CSS3</div>
          <div>Javascript</div>
      </div>
      <div className="btn-container" >
          <button>View Demo</button>
          <button>Code</button>
      </div>
    </div>
    </div>
  );
};
