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
    repoLink: "https://github.com/vinoth-sharma/mu-building",
    demoLink: "https://mu-building.web.app/",
    techStacks: ["HTML5", "CSS3", "Javascript"],
    status : "deployed"
  },  {
    id: 2,
    name: "Angular Multi Select",
    displayName: "Multi Select",
    desc:
      "This multi select has implemented with search,select all features with material components.",
    repoLink: "https://github.com/vinoth-sharma/ng-material-multiselect",
    demoLink: "https://angular-multi-select.web.app/",
    techStacks: ["Angular 9"],
    status : "deployed"
  },{
    id: 3,
    name: "Image to JSON ",
    displayName: "Image to JSON",
    desc:
      "This application accepts image from the user and convert the image into json.",
    repoLink: "https://github.com/vinoth-sharma/image-to-json",
    demoLink: "https://image2json.web.app/",
    techStacks: ["Angular 9"],
    status : "deployed"
  },{
    id: 4,
    name: "Test Your JS Skill",
    displayName: "JS Quiz",
    desc:
      "Test your JS Knowledge using the application.",
    repoLink: "https://github.com/vinoth-sharma/js-quiz",
    demoLink: "https://app-js-quiz.web.app/",
    techStacks: ["React.Js"],
    status : "deployed"
  },
   {
    id: 5,
    name: "Calendar",
    displayName: "Calendar",
    desc:
      "My Calendar is developed with features like blacklisting dates,max-min dates.",
    repoLink: "",
    demoLink: "",
    techStacks: ["Angular 6"],
    status : "progress"
  }, 
];
