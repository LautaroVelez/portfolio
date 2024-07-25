import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import groovy1 from './imgs/groovy1.png';
import groovy2 from './imgs/groovy2.png';
import groovy3 from './imgs/groovy3.png';
import groovy4 from './imgs/groovy4.png';

import {useEffect} from "react";
import Stairs from "../../assets/utils/Stairs.jsx";

const ProjectGroovy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Stairs>
            <div className="bg-[#f3e6d8] text-black w-screen">
                <div className="p-10 text-left  items-center space-x-2 inline-flex sticky top-0">
                    <a className="FontKaisei flex items-center space-x-2 font-black"
                       href="/portfolio/"><FaArrowLeft/><span>BACK</span></a>
                    <h1 className={'FontKaisei flex items-center space-x-2'}>| Project Groovy</h1>
                </div>

                <div className={'m-10'}>
                    <h4 className={'md:text-4xl FontKaisei md:w-1/2 w-full text-2xl'}>Groovy is a website where you can
                        consult your spotify stats.</h4>

                </div>

                <div className="m-5">
                    <a
                        href="https://groovy-omega.vercel.app/"
                        className="aLinkks uppercase FontKaisei text-left font-black items-center space-x-2 inline-flex "
                    >
                        <span>Visit Website</span>
                        <FaArrowRight/>
                    </a>
                </div>

                <div className={'md:flex w-full'}>
                    <div className={'md:w-4/5'}>
                        <img src={groovy1} alt=""/>
                        <img src={groovy2} alt="" className={'mt-3'}/>
                        <img src={groovy3} alt="" className={'mt-3'}/>
                        <img src={groovy4} alt="" className={'mt-3'}/>
                    </div>

                    <div className={'md:w-1/5 md:ml-10  md:sticky md:top-20 md:right-0  h-full'}>
                        <h4 className={'uppercase font-bold md:m-0 m-10'}>About</h4>
                        <p className={'md:mt-3 md:m-0 m-10 '}>I developed this website as a self-taught project,
                            focusing
                            on
                            creating a user friendly website where u can connect with the Spotify API to refine my
                            front-end development skills and implement fetch logic.</p>
                        <h4 className={'uppercase font-bold mt-10'}>Details</h4>
                        <ul className={'list-disc ml-6'}>
                            <li className={'mt-2'}>Made with React, Tailwind, Next.js, GitHub.</li>
                            <li className={'mt-2'}>Jul 2024</li>
                            <li className={'mt-2'}>Designed in Figma</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Stairs>
    )
}

export default ProjectGroovy;