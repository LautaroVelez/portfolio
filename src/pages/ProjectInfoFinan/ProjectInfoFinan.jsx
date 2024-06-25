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
                <h4 className={'md:text-3xl FontKaisei md:w-1/2 w-full text-2xl'}> Application created for the ministry
                    of finances of cordoba, the objective of this application is to be able to organize visits to
                    different
                    locations as a group, being able to form, edit and delete groups. Create visits, edit and view them,
                    and
                    be able to assign roles to authenticated users </h4>

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
                    <p className={'md:mt-3 md:m-0 m-10 '}>I developed this website como mi Self-Learning, quise darle
                        otro enfoque a
                        una pagina de asistencia al suicida, me parecio que todas las otras son iguales, asi que intente
                        ir por otro lado. Fue desarrollada con bla bla bla. </p>
                    <h4 className={'uppercase font-bold mt-10'}>Details</h4>
                    <ul className={'list-disc ml-6'}>
                        <li className={'mt-2'}>Made with Next.js, Tailwind, Framer Motion, GSAP, GitHub.</li>
                        <li className={'mt-2'}>May 2024</li>
                        <li className={'mt-2'}>Designed in Figma</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfoFinan;