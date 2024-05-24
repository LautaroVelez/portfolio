import {Col, Row} from "react-bootstrap";
import {FaFigma, FaGithub, FaLinkedin, FaReact} from "react-icons/fa";
import React from "react";
import {TbBrandFramerMotion} from "react-icons/tb";
import {SiGreensock} from "react-icons/si";
import {motion, useScroll, useTransform} from 'framer-motion';
import Content from "./Content.jsx";

const Footer = () => {
    const Linkedin = "https://www.linkedin.com/in/lautaro-velez-ba345421b/";
    const Github = "https://github.com/LautaroVelez";

    return (
        <div className={'relative h-[80vh]'} style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
            <div className={'relative h-[calc(100vh+80vh)] -top-[100vh]'}>
                <div className={'sticky top-[calc(100vh-80vh)] h-[80vh]'}>
                    <Content/>
                </div>
            </div>
        </div>
    )
}

export default Footer;
