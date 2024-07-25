import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import finan1 from './imgs/finan1.png';
import finan2 from './imgs/finan2.png';
import finan3 from './imgs/finan3.png';
import finan4 from './imgs/finan4.png';
import finan5 from './imgs/finan5.png';
import finan6 from './imgs/finan6.png';
import {useEffect} from "react";
import Stairs from "../../assets/utils/Stairs.jsx";

const ProjectInfoFinan = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
          <Stairs>
        <div className="bg-[#f3e6d8] text-black w-screen">
            <div className="p-10 text-left  items-center space-x-2 inline-flex sticky top-0">
                <a className="FontKaisei flex items-center space-x-2 font-black"
                   href="/portfolio/"><FaArrowLeft/><span>BACK</span></a>
                <h1 className={'FontKaisei flex items-center space-x-2'}>| Project Ministry of Finance</h1>
            </div>

            <div className={'m-10'}>
                <h4 className={'md:text-3xl FontKaisei md:w-1/2 w-full text-2xl'}> This project is a comprehensive
                    finance management website developed for the Ministry of Finance of the Province of Cordoba. It
                    facilitates financial tracking, reporting, and analysis for government officials.</h4>

            </div>

            <div className="m-5">
                <a
                    href="https://financiation2.onrender.com/"
                    className="aLinkks uppercase FontKaisei text-left font-black flex items-center space-x-2 inline-flex "
                >
                    <span>Visit Website</span>
                    <FaArrowRight/>
                </a>
            </div>
            <div className={'m-10'}>
                <p className={' FontKaisei md:w-1/2 w-full font-bold'}>Keys to acces the page:</p>
                <p className={' FontKaisei md:w-1/2 w-full font-bold'}> CUIL: 20-46032269-4</p>
                <p className={' FontKaisei md:w-1/2 w-full font-bold'}> Password: pepe1234</p>

                <p className={' FontKaisei md:w-1/2 w-full mt-4'}>(Please be aware that the website may take approximately 30 seconds to 2 minutes to load. This is due to the use of a free hosting service, which may result in slower load times).</p>
            </div>
            <div className={'md:flex w-full'}>
                <div className={'md:w-4/5'}>
                    <img src={finan1} alt=""/>
                    <img src={finan2} alt="" className={'mt-3'}/>
                    <img src={finan3} alt="" className={'mt-3'}/>
                    <img src={finan4} alt="" className={'mt-3'}/>
                    <img src={finan5} alt="" className={'mt-3'}/>
                    <img src={finan6} alt="" className={'mt-3'}/>
                </div>

                <div className={'md:w-1/5 md:ml-10  md:sticky md:top-20 md:right-0  h-full'}>
                    <h4 className={'uppercase font-bold md:m-0 m-10'}>About</h4>
                    <p className={'md:mt-3 md:m-0 m-10 '}>This website was developed as part of a team project during my
                        studies. It was a collaborative effort involving multiple roles and responsibilities, showcasing
                        my ability to work in a team and manage complex requirements. </p>

                    <h4 className={'uppercase font-bold md:m-0 m-10 mt-5'}>Role</h4>
                    <p className={'md:mt-3 md:m-0 m-10 '}>Product Owner and Full-Stack Developer.</p>
                    <p className={'md:mt-3 md:m-0 m-10 '}>In this role, I primarily focused on front-end development,
                        ensuring a seamless and engaging user experience. Additionally, I contributed to several
                        features in both the backend and the database.</p>

                    <h4 className={'uppercase font-bold mt-10'}>Details</h4>
                    <ul className={'list-disc ml-6'}>
                        <li className={'mt-2'}>Made with React, JavaScript, Postgresql, Python, Django, Scrum, GitHub.
                        </li>
                        <li className={'mt-2'}>Design Tools: Material UI, Antd Design, Boostrap.</li>
                        <li className={'mt-2'}>Year 2023</li>
                        <li className={'mt-2 pb-20'}>Designed in Figma</li>
                    </ul>
                </div>
            </div>
        </div>
          </Stairs>
    )
}

export default ProjectInfoFinan;