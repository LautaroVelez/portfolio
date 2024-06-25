import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import Suicidal from "../../assets/images/Suicidal.png";

const ProjectInfoSuic = () => {
    return (
        <div className="bg-[#f3e6d8] w-full text-black">
            <div className="p-10">
                <a
                    className="FontKaisei text-left font-black flex items-center space-x-2 whitespace-nowrap"
                    href="/"
                >
                    <FaArrowLeft/>
                    <span>BACK</span>
                </a>
            </div>

            <div className={'m-10'}>
                <h1 className={'text-4xl FontKaisei w-1/2'}> A web designed to help people with suicidal thoughts and provide
                    care and information to those who need it.</h1>
            </div>

            <div className="m-10">
                <a
                    href="https://hopeheaven.netlify.app/"
                    className="uppercase FontKaisei font-black flex items-center space-x-2 whitespace-nowrap"
                >
                    <span>Visit Website</span>
                    <FaArrowRight/>
                </a>
            </div>
            <div className={'w-1/2'}>
                <img src={Suicidal} alt=""/>
            </div>

        </div>
    )
}

export default ProjectInfoSuic;