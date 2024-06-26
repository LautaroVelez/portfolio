import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";


const ProjectInfoFinan = () => {
    return (
        <div className="bg-[#f3e6d8] text-black w-full">
            <div className="p-10 text-left  flex items-center space-x-2 inline-flex sticky top-0">
                <a className="FontKaisei flex items-center space-x-2 font-black"
                   href="/"><FaArrowLeft/><span>BACK</span></a>
                <h1 className={'FontKaisei flex items-center space-x-2'}>| Project Ministry of Finance</h1>
            </div>

            <div className={'m-10'}>
                <h4 className={'md:text-3xl FontKaisei md:w-1/2 w-full text-2xl'}> This project is a comprehensive finance management website developed for the Ministry of Finance of the Province of Cordoba. It facilitates financial tracking, reporting, and analysis for government officials.</h4>

            </div>

            <div className="m-5">
                <a
                    href="https://financiation2.onrender.com/"
                    className="uppercase FontKaisei text-left font-black flex items-center space-x-2 inline-flex "
                >
                    <span>Visit Website</span>
                    <FaArrowRight/>
                </a>
            </div>
            <div className={'md:flex w-full'}>
                <div className={'md:w-4/5'}>
                    <img src={'suic1'} alt=""/>
                    <img src={'suic2'} alt="" className={'mt-3'}/>
                    <img src={'suic3'} alt="" className={'mt-3'}/>
                </div>

                <div className={'md:w-1/5 md:ml-10  md:sticky md:top-20 md:right-0  h-full'}>
                    <h4 className={'uppercase font-bold md:m-0 m-10'}>About</h4>
                    <p className={'md:mt-3 md:m-0 m-10 '}>This website was developed as part of a team project during my studies. It was a collaborative effort involving multiple roles and responsibilities, showcasing my ability to work in a team and manage complex requirements. </p>
                   
                    <h4 className={'uppercase font-bold md:m-0 m-10 mt-5'}>Role</h4>
                    <p className={'md:mt-3 md:m-0 m-10 '}>Product Owner and Full-Stack Developer.</p> 
                    <p className={'md:mt-3 md:m-0 m-10 '}>In this role, I primarily focused on front-end development, ensuring a seamless and engaging user experience. Additionally, I contributed to several features in both the backend and the database.</p>
                   
                    <h4 className={'uppercase font-bold mt-10'}>Details</h4>
                    <ul className={'list-disc ml-6'}>
                        <li className={'mt-2'}>Made with React, JavaScript, Postgresql, Python, Django, Scrum, GitHub.</li>
                        <li className={'mt-2'}>Design Tools: Material UI, Antd Design, Boostrap.</li>
                        <li className={'mt-2'}>Year 2023</li>
                        <li className={'mt-2'}>Designed in Figma</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfoFinan;