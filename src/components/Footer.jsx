import '../assets/styles/Footer.css';
import { FaFigma, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiGreensock } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Col, Row } from "react-bootstrap";

const Footer = () => {

    const Linkedin = "https://www.linkedin.com/in/lautaro-velez-ba345421b/";
    const Github = "https://github.com/LautaroVelez";
    const Email = "mailto:lautivelez28@gmail.com";
    return (
        <div className='relative h-[70vh] bg-[#FBF4EA]' style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
            <div className='fixed bottom-0 h-[70vh] w-[full] text-center flex flex-col FontSection '>

                    <div className={'top-0'}>
                        <p className="pInFooter">Thanks for seeing.</p>
                    </div>

                    <div className='flex flex-col justify-center h-full '>
                        <div className='text-center w-[100vw]'>
                            <p className='IfYouAreText'>If you are interested in working with me you can reach me in:</p>

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
                                            <FaGithub className='IconLink' />
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

                    <div className='bottom-0'>
                        <p className={'pInFooter'}>This website was made with</p>
                        <FaFigma className={'IconsRow'} />
                        <FaReact className={'IconsRow'} />
                        <TbBrandFramerMotion className={'IconsRow'} />
                        <SiGreensock className={'IconsRow'} />
                        <IoLogoJavascript className={'IconsRow'} />
                    </div>
                </div>
            </div>
    
    )
}

export default Footer;
