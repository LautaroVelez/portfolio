import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import Suicidal from "../../assets/images/Suicidal.png";
import suic1 from "./imgs/suic1.png";

const ProjectInfoSuic = () => {
    return (
        <div className="bg-[#f3e6d8] text-black w-full">
            <div className="p-10 text-left  flex items-center space-x-2 inline-flex sticky top-0">
                <a className="FontKaisei flex items-center space-x-2 font-black"
                   href="/"><FaArrowLeft/><span>BACK</span></a>
                <h1 className={'FontKaisei flex items-center space-x-2'}>| Project Suicidal Care</h1>
            </div>

            <div className={'m-10'}>
                <h4 className={'md:text-4xl FontKaisei md:w-1/2 w-full text-2xl'}> A web designed to help people with suicidal thoughts and
                    provide
                    care and information to those who need it.</h4>
            </div>

            <div className="m-5">
                <a
                    href="https://hopeheaven.netlify.app/"
                    className="uppercase FontKaisei text-left font-black flex items-center space-x-2 inline-flex"
                >
                    <span>Visit Website</span>
                    <FaArrowRight/>
                </a>
            </div>
            <div className={'md:flex'}>
                <div className={'md:w-3/4'}>
                <img src={Suicidal} alt=""/>
                </div>
                <div  className={'md:w-1/5 md:ml-10 md:sticky md:top-20'}>
                    <h4 className={'uppercase font-bold'}>About</h4>
                    <p className={'mt-3'}>I developed this website como mi Self-Learning, quise darle otro enfoque a
                        una pagina de asistencia al suicida, me parecio que todas las otras son iguales, asi que intente
                        ir por otro lado. Fue desarrollada con bla bla bla. </p>
                </div>
            </div>
            <div className={'mt-4'}>
                <img src={suic1} alt="" className={'w-3/4'}/>
            </div>

        </div>
    )
}

export default ProjectInfoSuic;