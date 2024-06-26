import Suicidal from '../images/Suicidal.png'
import financiation from '../images/landingfinanciation.jpeg';
import ConstructionSite from '../images/ConstructionSite.png';

const projects = [
    {
        title: "SUICIDAL CARE",
        src: Suicidal,
        link: '/projectSuicidal',
        color: "#D9D9D9",
        icons: ["React", "Figma", "Framer Motion", "Greensock", "HTML5", "CSS3", "JavaScript"],
        id: 1
    },
    {
        title: "MINISTRY OF FINANCE",
        src: financiation,
        link: "/projectfinanciation",
        color: "#D9D9D9",
        icons: ["React", "HTML5", "CSS3", "Figma", "Django", "MySQL"],
           id: 2
    },
     {
        title: "CONSTRUCTION SITE",
        src: ConstructionSite,
        link: "/projectconstruction",
        color: "#D9D9D9",
        icons: ["React", "Figma", "HTML5", "CSS3", "JavaScript", "Framer Motion"],
            id: 3
    },

]

export default projects;


/*
  {
        title: "SERGI C",
        description: "A web dedicated to showcasing its portfolio of completed projects and specialized expertise of architect Sergi Comellas..",
        src: "hola",
        link: "SERGIC",
        color: "#D9D9D9",
        icons: ["React", "Figma", "HTML5", "CSS3", "JavaScript"]
    }
 */