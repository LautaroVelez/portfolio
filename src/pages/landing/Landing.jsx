import {Col, Container, Row} from 'react-bootstrap';
import '../../assets/styles/LandingPage.css';
import {motion, useTransform, useScroll} from "framer-motion";
import React, {useEffect} from "react";
import Lenis from "lenis";
import HorizontalScrollSection from "../../components/HorizontalScrollSection.jsx";
import AboutMeSection from "../../components/AboutMeSection.jsx";
import WorkSection from "../../components/WorkSection.jsx";
import WhyMeSection from "../../components/WhyMeSection.jsx";
import Section from "../../components/Section.jsx";
import TechnologiesSection from "../../components/TechnologiesSection.jsx";
import ContactSection from "../../components/ContactSection.jsx";


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


    return (
        <>
            <HorizontalScrollSection/>
            <Section Component={<AboutMeSection/>}/>
           <WorkSection/>
            <Section Component={<TechnologiesSection/>}/>
            <Section Component={<WhyMeSection/>}/>
            <ContactSection/>

            <Row className={'justify-center text-center mt-10'}>
                <p className={'text-1xl font-bold text-gray-500 mb-24'}>Thanks for seeing!</p>
            </Row>
        </>
    );
};

export default LandingPage;
