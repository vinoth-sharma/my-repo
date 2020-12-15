import React from "react";
import { ProjectPanel } from "../../components/projectBox/projectBox";

export const MainSection = () => {
  
    console.log(projects);

    return (
    <div style={{ width: "80vw", padding: "20px" }}>
      { projects.map((ele, i) => {
        return <ProjectPanel key={i} data={ele} />;
      }) }
    </div>
  );
};

const projects = [
  {
    id: 1,
    name: "Mu Sigma Building",
    displayName: "Mu Building",
    desc:
      " Mu Building is a web application used for constructing a building using div's.",
    repoLink: "",
    demoLink: "",
    techStacks: ["HTML5", "CSS3", "Javascript"],
  },  {
    id: 1,
    name: "Mu Sigma Building",
    displayName: "Mu Building",
    desc:
      " Mu Building is a web application used for constructing a building using div's.",
    repoLink: "",
    demoLink: "",
    techStacks: ["HTML5", "CSS3", "Javascript"],
  },  {
    id: 1,
    name: "Mu Sigma Building",
    displayName: "Mu Building",
    desc:
      " Mu Building is a web application used for constructing a building using div's.",
    repoLink: "",
    demoLink: "",
    techStacks: ["HTML5", "CSS3", "Javascript"],
  },  {
    id: 1,
    name: "Mu Sigma Building",
    displayName: "Mu Building",
    desc:
      " Mu Building is a web application used for constructing a building using div's.",
    repoLink: "",
    demoLink: "",
    techStacks: ["HTML5", "CSS3", "Javascript"],
  },
];
