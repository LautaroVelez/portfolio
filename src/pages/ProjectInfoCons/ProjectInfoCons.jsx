import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import const1 from '../../assets/images/ConstructionSite.png';
import const2 from './imgs/const2.png';
import const3 from './imgs/const3.png';
import const4 from './imgs/const4.png';
import {useEffect} from "react";
import Stairs from "../../assets/utils/Stairs.jsx";

const ProjectInfoCons = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Stairs>
            <div className="bg-[#f3e6d8] text-black w-screen">
                <div className="p-10 text-left  flex items-center space-x-2 inline-flex sticky top-0">
                    <a className="FontKaisei flex items-center space-x-2 font-black"
                       href="/portfolio/"><FaArrowLeft/><span>BACK</span></a>
                    <h1 className={'FontKaisei flex items-center space-x-2'}>| Project Construction Site</h1>
                </div>

                <div className={'m-10'}>
                    <h4 className={'md:text-4xl FontKaisei md:w-1/2 w-full text-2xl'}>This project is a portfolio
                        website
                        for Velez Construcciones, showcasing the company's construction projects and services in a
                        visually
                        appealing and user-friendly manner.</h4>

                </div>

                <div className="m-5">
                    <a
                        href="https://velezconstrucciones.netlify.app"
                        className="aLinkks uppercase FontKaisei text-left font-black flex items-center space-x-2 inline-flex "
                    >
                        <span>Visit Website</span>
                        <FaArrowRight/>
                    </a>
                </div>

                <div className={'md:flex w-full'}>
                    <div className={'md:w-4/5'}>
                        <img src={const1} alt=""/>
                        <img src={const2} alt="" className={'mt-3'}/>
                        <img src={const3} alt="" className={'mt-3'}/>
                        <img src={const4} alt="" className={'mt-3'}/>
                    </div>

                    <div className={'md:w-1/5 md:ml-10  md:sticky md:top-20 md:right-0  h-full'}>
                        <h4 className={'uppercase font-bold md:m-0 m-10'}>About</h4>
                        <p className={'md:mt-3 md:m-0 m-10 '}>I developed this website as a freelance project, focusing
                            on
                            creating a modern and responsive design that highlights the company's work. This project
                            allowed
                            me to refine my front-end development skills and implement creative animations.</p>
                        <h4 className={'uppercase font-bold mt-10'}>Details</h4>
                        <ul className={'list-disc ml-6'}>
                            <li className={'mt-2'}>Made with React, Tailwind, Framer Motion, GSAP, GitHub.</li>
                            <li className={'mt-2'}>Feb 2023</li>
                            <li className={'mt-2'}>Designed in Figma</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Stairs>
    )
}

export default ProjectInfoCons;