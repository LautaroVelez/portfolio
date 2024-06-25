import Suicidal from '../images/Suicidal.png'
import financiation from '../images/landingfinanciation.jpeg';
import ConstructionSite from '../images/ConstructionSite.png';

const projects = [
    {
        title: "SUICIDAL CARE",
        description: "A web designed to help people with suicidal thoughts and provide care and information to those who need it.",
        src: Suicidal,
        link: '/projectSuicidal',
        color: "#D9D9D9",
        icons: ["React", "Figma", "Framer Motion", "Greensock", "HTML5", "CSS3", "JavaScript"],
        id: 1
    },
    {
        title: "MINISTRY OF FINANCE",
        description: "Aplicacion creada para el ministerio de finanzas de cordoba, el objetivo de esta aplicacion es poder organizar visitas a diferentes localidades como grupo, poder formar, editar y eliminar grupos. Crear visitas, editarlas y verlas, y poder asignarle roles a los usuarios autenticados",
        src: financiation,
        link: "/projectfinanciation",
        color: "#D9D9D9",
        icons: ["React", "HTML5", "CSS3", "Figma", "Django", "MySQL"],
           id: 2
    },
     {
        title: "CONSTRUCTION SITE",
        description: "A web dedicated to showcasing its portfolio of completed projects and specialized expertise of the construction company.",
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