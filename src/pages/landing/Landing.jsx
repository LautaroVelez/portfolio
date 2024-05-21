import {Col, Container, Row} from 'react-bootstrap';
import '../../assets/styles/LandingPage.css';
import {FaGithub, FaReact} from "react-icons/fa";
import me from '../../assets/images/me.jpg';
import {FaLinkedin} from "react-icons/fa";
import {motion, useTransform, useScroll} from "framer-motion";
import React, {useEffect, useRef} from "react";
import Lenis from "lenis";
import HorizontalScrollSection from "../../components/HorizontalScrollSection.jsx";
import AboutMeSection from "../../components/AboutMeSection.jsx";
import WorkSection from "../../components/WorkSection.jsx";
import WhyMeSection from "../../components/WhyMeSection.jsx";
import Section from "../../components/Section.jsx";


const LandingPage = () => {
    useEffect(() => {
        //Using Lenis for smooth scroll
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, []);


    const Linkedin = "https://www.linkedin.com/in/lautaro-velez-ba345421b/";
    const Github = "https://github.com/LautaroVelez";



    return (
        <>

            <HorizontalScrollSection/>

            <Section Component={<AboutMeSection/>}/>


            <Section Component={<WorkSection/>}/>


            <Section Component={<WhyMeSection/>}/>


            <section id={'Contact'}>
                <Row className={'justify-center text-center'}>
                    <Col md={2}>
                        <Row>
                            <p className={'text-1xl font-bold text-gray-500'}>You can reach me in:</p>
                        </Row>
                        <Row className={'mt-3'}>
                            <Col md={6} sm={6}>
                                <a href={Linkedin}><FaLinkedin className={'LastIcons'}/></a>
                            </Col>
                            <Col md={6} sm={6}>
                                <a href={Github}><FaGithub className={'LastIcons'}/></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>


            <section id={'Technologies'}>
                    <span>
                        <h1 className={'m-20 text-8xl text-center text-black FontRobotoBold'}>TECHNOLOGIES & TOOLS</h1>
                    </span>
                <Container fluid className={'font-bold text-2xl black'}>
                    <Row className={'FontRobotoBold'}>
                        <Col>
                            <h1 className={'text-start'}>TECHNOLOGIES</h1>
                        </Col>
                        <Col>
                            <h1 className={'text-center'}>&</h1>
                        </Col>
                        <Col>
                            <h1 className={'text-end'}>TOOLS</h1>
                        </Col>
                    </Row>
                    <Row className={'text-center'}>
                        <Col md={6} sm={6}>
                            <h1 className={'text-end'}>JAVASCRIPT</h1>
                            <h1 className={'text-end'}>HTML5</h1>
                            <h1 className={'text-end'}>REACT</h1>
                            <h1 className={'text-end'}>CSS</h1>
                            <h1 className={'text-end'}>PYTHON</h1>
                            <h1 className={'text-end'}>FRAMER MOTION</h1>
                            <h1 className={'text-end'}>RESPONSIVE DESIGN</h1>
                        </Col>
                        <Col md={6} sm={6}>
                            <h1 className={'text-start'}>BOOTSTRAP</h1>
                            <h1 className={'text-start'}>TAILWIND</h1>
                            <h1 className={'text-start'}>FIGMA</h1>
                            <h1 className={'text-start'}>MUI</h1>
                            <h1 className={'text-start'}>NEXTUI</h1>
                            <h1 className={'text-start'}>PHOTOSHOP</h1>
                            <h1 className={'text-start'}>MATERIAL DESIGN</h1>
                        </Col>
                    </Row>
                </Container>
            </section>


            <Row className={'justify-center text-center mt-10'}>
                <p className={'text-1xl font-bold text-gray-500'}>Thanks for seeing!</p>
            </Row>


        </>
    )
        ;
};

export default LandingPage;
