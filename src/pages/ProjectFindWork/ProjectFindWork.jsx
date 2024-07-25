import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import findwork from './imgs/findwork.png';
import {useEffect} from "react";
import Stairs from "../../assets/utils/Stairs.jsx";

export default function ProjectFindWork()  {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Stairs>
            <div className="bg-[#f3e6d8] text-black w-screen">
                <div className="p-10 text-left  items-center space-x-2 inline-flex sticky top-0">
                    <a className="FontKaisei flex items-center space-x-2 font-black"
                       href="/portfolio/"><FaArrowLeft/><span>BACK</span></a>
                    <h1 className={'FontKaisei flex items-center space-x-2'}>| Project Find Work</h1>
                </div>

                <div className={'m-10 FontKaisei'}>
                    <p className={' mt-10'}>(In development)</p>
                    <h4 className={'md:text-4xl  md:w-1/2 w-full text-2xl'}>Find work is my own platform that collects all open developer positions in one place and allows you to focus on what really matters:  </h4>
                    <h4 className={'md:text-3xl  md:w-1/2 w-full text-2xl underline'}>Applying for jobs.  </h4>

                </div>

                <div className="m-5">
                <a
                        href="https://find-work-five.vercel.app/"
                        className="aLinkks uppercase FontKaisei text-left font-black items-center space-x-2 inline-flex "
                    >
                        <span>Visit Website</span>
                        <FaArrowRight/>
                    </a>
                </div>

                <div className={'md:flex w-full'}>
                    <div className={'md:w-4/5'}>
                        <img src={findwork} alt=""/>

                    </div>

                    <div className={'md:w-1/5 md:ml-10  md:sticky md:top-20 md:right-0  h-full'}>
                        <h4 className={'uppercase font-bold md:m-0 m-10'}>About</h4>
                        <p className={'md:mt-3 md:m-0 m-10 '}>Im developing this website as a self-taught project,
                            focusing
                            on
                            creating a user friendly website where you can find your next work.</p>
                        <h4 className={'uppercase font-bold mt-10'}>Details</h4>
                        <ul className={'list-disc ml-6'}>
                            <li className={'mt-2'}>Made with React, Node.js, Tailwind, Next.js, GitHub.</li>
                            <li className={'mt-2'}>Jul 2024</li>
                            <li className={'mt-2'}>Designed in Figma</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Stairs>
    )
}
