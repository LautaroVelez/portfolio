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
                <Col md={4} sm={0} className={'text-start d-none d-md-block d-lg-block'}>
                    <h2 className={'h2InFooter'}>PAGE</h2>
                </Col>
                <Col md={4} className={'text-center justify-center flex flex-col'}>
                    <h4 className={'h4InFooter font-bold'}>THANKS FOR SEEING</h4>
                </Col>
                <Col md={4} className={'text-end'}>
                    <h2 className={'h2InFooter'}>CONTACT ME</h2>
                </Col>
            </Row>
            <Row className={'-mt-14'}>
                <Col md={2} className={'text-start flex flex-col d-none d-md-block'}>
                    <a className={'LinksFooter'} href={'/'}>• HOME</a>
                    <a className={'LinksFooter'} href={'#About'}>• ABOUT ME</a>
                    <a className={'LinksFooter'} href={'#Projects'}>• PROJECTS</a>
                </Col>

                <Col md={10} className={'text-md-end'}>
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
