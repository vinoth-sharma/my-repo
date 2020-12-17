import React from "react";
import "./projectBox.scss";

export const ProjectPanel = ({ data }) => {
  return (
    <div className="project-container">
        <div className="project-panel">
      <h3>{ data.displayName }</h3>
      <p>{ data.desc }</p>
      <div className="tech-stack">
        { data.techStacks.map((ele,i)=><div key={i}>{ele}</div>) }
      </div>
      <div className="btn-container" >
        {
          data.status === "deployed" ? (<>
            <a href={data.repoLink} target="_blank" rel="noreferrer"><button>Code</button></a>
            <a href={data.demoLink} target="_blank" rel="noreferrer"><button>View Demo</button></a>
            </>)
            : (<>
              <button disabled>Code</button>
              <button disabled>View Demo</button>
              </>
            )
        }
      </div>
    </div>
    </div>
  );
};
