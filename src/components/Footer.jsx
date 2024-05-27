import {Col, Container, Row} from "react-bootstrap";
import {FaFigma, FaGithub, FaLinkedin, FaReact} from "react-icons/fa";
import React from "react";
import {TbBrandFramerMotion} from "react-icons/tb";
import {SiGreensock} from "react-icons/si";
import {motion, useScroll, useTransform} from 'framer-motion';
import Content from "./Content.jsx";
import '../assets/styles/Footer.css';

const Footer = () => {
    const Linkedin = "https://www.linkedin.com/in/lautaro-velez-ba345421b/";
    const Github = "https://github.com/LautaroVelez";

    return (
        <div className={'md:h-[70vh] sm:h-screen bg-[#D9D9D9] fontInFooter w-full flex flex-col justify-between'}>
            <Row>

                <Col md={12} className={'text-center justify-center flex flex-col'}>
                    <h4 className={'h4InFooter font-bold'}>THANKS FOR SEEING</h4>
                    <h2 className={'h2InFooter'}>CONTACT ME</h2>
                </Col>

            </Row>
            <Row className={'-mt-14'}>


                <Col md={10} className={'text-center'}>
                    <p className={'pInFooter'}>LAUTIVELEZ28@GMAIL.COM</p>
                </Col>
            </Row>

            <div className='items-end static'>
                <Row>
                    <Col md={11}>
                        <h1 className='h1InFooter'>LAUTARO VELEZ</h1>
                    </Col>
                    <Col className={' justify-center align-middle flex flex-col IconsRow'} md={1} sm={12}>
                        <a href={Github}><FaGithub className={'LastIcons'}/></a>
                        <a href={Linkedin}><FaLinkedin className={'LastIcons'}/></a>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer;
