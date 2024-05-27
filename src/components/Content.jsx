import '../assets/styles/Footer.css';
import { FaFigma, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiGreensock } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {Col, Row} from "react-bootstrap";

export default function Content() {
    return (
        <div className='bg-[#FBF4EA] h-full w-full flex flex-col justify-between'>
            <Section />
        </div>
    )
}

const Section = () => {
    const Linkedin = "https://www.linkedin.com/in/lautaro-velez-ba345421b/";
    const Github = "https://github.com/LautaroVelez";
    const Email = "mailto:lautivelez28@gmail.com";

    return (
        <div className={'h-[50vh] fontInFooter'}>
            <div className={'text-center top-0'}>
                <p className="pInFooter">Thanks for seeing.</p>
            </div>
            <div className='flex flex-col justify-center h-full'>
                <div className='text-center'>
                    <p className='text-[4vh]'>If you are interested in working with me you can reach me in:</p>

                    <div className='container'>
                        <Row className='justify-content-center'>
                            <Col className='col-auto text-center LinkMiniRow'>
                                <a href={Linkedin} className='Link'>
                                    <FaLinkedin className='IconLink' />
                                    LinkedIn
                                </a>
                            </Col>
                            <Col className='col-auto text-center LinkMiniRow'>
                                <a href={Github} className='Link'>
                                    <FaGithub className='IconLink'/>
                                    GitHub
                                </a>
                            </Col>
                            <Col className='col-auto text-center LinkMiniRow'>
                                <a href={Email} className='Link'>
                                    <MdEmail className='IconLink' />
                                    Email
                                </a>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div className='text-center bottom-0'>
                <p className={'pInFooter'}>This website was made with</p>
                <FaFigma className={'IconsRow'} />
                <FaReact className={'IconsRow'} />
                <TbBrandFramerMotion className={'IconsRow'} />
                <SiGreensock className={'IconsRow'} />
                <IoLogoJavascript className={'IconsRow'} />
            </div>
        </div>
    )
}
