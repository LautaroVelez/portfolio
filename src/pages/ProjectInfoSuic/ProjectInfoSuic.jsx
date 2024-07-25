import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import suic1 from "./imgs/suic1.png";
import suic2 from "./imgs/suic2.png";
import suic3 from "./imgs/suic3.png";
import {useEffect} from "react";
import Stairs from "../../assets/utils/Stairs.jsx";

const ProjectInfoSuic = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Stairs>
        <div className="bg-[#f3e6d8] text-black w-screen">
            <div className="p-10 text-left  items-center space-x-2 inline-flex sticky top-0">
                <a className="FontKaisei flex items-center space-x-2 font-black"
                    href="/portfolio/"><FaArrowLeft /><span>BACK</span></a>
                <h1 className={'FontKaisei flex items-center space-x-2'}>| Project Suicidal Care</h1>
            </div>

            <div className={'m-10'}>
                <p className={'FontKaisei mt-10'}>(In development)</p>
                <h4 className={'md:text-4xl FontKaisei md:w-1/2 w-full text-2xl'}>This project is a dedicated website aimed at providing resources and support for suicide prevention. It includes informative content, resources, and a chatbot for immediate assistance. </h4>

            </div>

            <div className="m-5">
                <a
                    href="https://hopeheaven.netlify.app/"
                    className="aLinkks uppercase FontKaisei text-left font-black flex items-center space-x-2 inline-flex "
                >
                    <span>Visit Website</span>
                    <FaArrowRight />
                </a>
            </div>
            <div className={'md:flex w-full'}>
                <div className={'md:w-4/5'}>
                    <img src={suic1} alt="" />
                    <img src={suic2} alt="" className={'mt-3'} />
                    <img src={suic3} alt="" className={'mt-3'} />
                </div>

                <div className={'md:w-1/5 md:ml-10  md:sticky md:top-20 md:right-0  h-full'}>
                    <h4 className={'uppercase font-bold md:m-0 m-10'}>About</h4>
                    <p className={'md:mt-3 md:m-0 m-10 '}>I created this website as part of my self-taught learning in web development, driven by a passion for mental health awareness. This project allowed me to apply and enhance my skills while contributing to a meaningful cause.</p>
                    <h4 className={'uppercase font-bold mt-10'}>Details</h4>
                    <ul className={'list-disc ml-6'}>
                        <li className={'mt-2'}>Made with Next.js, Tailwind, Framer Motion, GSAP, GitHub.</li>
                        <li className={'mt-2'}>May 2024</li>
                        <li className={'mt-2'}>Designed in Figma</li>
                    </ul>
                </div>
            </div>
        </div>
            </Stairs>
    )
}

export default ProjectInfoSuic;