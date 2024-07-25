import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import curr1 from './imgs/CURR1.png'
import curr2 from './imgs/CURR2.png'
import curr3 from './imgs/CURR3.png'
import {useEffect} from "react";
import Stairs from "../../assets/utils/Stairs.jsx";

const ProjectInfoCV = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Stairs>
        <div className="bg-[#f3e6d8] text-black w-screen">
            <div className="p-10 text-left  flex items-center space-x-2 inline-flex sticky top-0">
                <a className="FontKaisei flex items-center space-x-2 font-black"
                    href="/portfolio/"><FaArrowLeft /><span>BACK</span></a>
                <h1 className={'FontKaisei flex items-center space-x-2'}>| Project Curriculum To PDF</h1>
            </div>

            <div className={'m-10'}>
                <h4 className={'md:text-4xl FontKaisei md:w-1/2 w-full text-2xl'}>This project is a React application which generates a CV from user entered data.</h4>

            </div>

            <div className="m-5">
                <a
                    href="https://cv-to-pdf.vercel.app/"
                    className="aLinkks uppercase FontKaisei text-left font-black flex items-center space-x-2 inline-flex "
                >
                    <span>Visit Website</span>
                    <FaArrowRight />
                </a>
            </div>
            <div className={'md:flex w-full'}>
                <div className={'md:w-4/5'}>
                    <img src={curr1} alt="" />
                    <img src={curr3} alt="" className={'mt-3'} />
                    <img src={curr2} alt="" className={'mt-3'} />
                </div>

                <div className={'md:w-1/5 md:ml-10  md:sticky md:top-20 md:right-0  h-full'}>
                    <h4 className={'uppercase font-bold md:m-0 m-10'}>About</h4>
                    <p className={'md:mt-3 md:m-0 m-10 '}>I created this website as part of my self-taught learning in web development, with the objective of understanding better React Forms and manipulating user entry data.</p>
                    <h4 className={'uppercase font-bold mt-10'}>Details</h4>
                    <ul className={'list-disc ml-6'}>
                        <li className={'mt-2'}>Made with Next.js and Tailwind</li>
                        <li className={'mt-2'}>June 2024</li>
                    </ul>
                </div>
            </div>
        </div>
            </Stairs>
    )
}

export default ProjectInfoCV;