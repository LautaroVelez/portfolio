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
import Footer from "../../components/Footer.jsx";


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
            <AboutMeSection/>
            <WorkSection/>
            <TechnologiesSection/>
            <WhyMeSection/>
            <Footer/>


        </>
    );
};

export default LandingPage;
