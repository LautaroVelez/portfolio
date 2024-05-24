import {Col, Row} from "react-bootstrap";
import {FaFigma, FaGithub, FaLinkedin, FaReact} from "react-icons/fa";
import React from "react";
import {TbBrandFramerMotion} from "react-icons/tb";
import {SiGreensock} from "react-icons/si";
import {motion, useScroll, useTransform} from 'framer-motion';

const ContactSection = () => {
    const Linkedin = "https://www.linkedin.com/in/lautaro-velez-ba345421b/";
    const Github = "https://github.com/LautaroVelez";

    return (
        <footer id={'Contact'}>
            <Row className={'text-center justify-center'}>
                <p>You can reach me in:</p>
                <Row className={'justify-center'}>
                    <Col md={1}>
                        <motion.div whileHover={{
                            scale: 1.2,
                            transition: {duration: 0.2}
                        }
                        }>
                            <a href={Linkedin}
                            ><FaLinkedin className={'LastIcons'}/></a>
                        </motion.div>
                    </Col>
                    <Col md={1}>
                        <motion.div whileHover={{
                            scale: 1.2,
                            transition: {duration: 0.2}
                        }
                        }>
                            <a href={Github}><FaGithub className={'LastIcons'}/></a>
                        </motion.div>
                    </Col>
                </Row>

                <hr className="HorizontalLine mt-6"/>
                <Row className={'justify-center text-center'}>
                    <p>This portfolio was created with:</p>
                    <Row className={'justify-center'}>
                        <Col md={1}>

                            <FaReact className={'IconReact'} alt={'React'}/>
                            <p className={'text-center'}>React</p>
                        </Col>
                        <Col md={1}>
                            <FaFigma className={'IconReact'}/>
                            <p className={'text-center'}>Figma</p>
                        </Col>
                        <Col md={1}>
                            <TbBrandFramerMotion className={'IconReact'}/>
                            <p className={'text-center'}>Framer Motion</p>
                        </Col>
                        <Col md={1}>
                            <SiGreensock className={'IconReact'}/>
                            <p className={'text-center'}>GreenSock (GSAP)</p>
                        </Col>
                    </Row>
                    <hr className="HorizontalLine mt-6"/>
                </Row>
            </Row>
        </footer>
    )
}

export default ContactSection;