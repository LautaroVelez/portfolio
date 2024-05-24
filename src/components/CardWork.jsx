import '../assets/styles/CardWork.css'
import {Col, Row} from "react-bootstrap";
import {motion, useScroll, useTransform} from 'framer-motion';
import React, {useRef} from "react";
import {FaCss3, FaFigma, FaHtml5, FaReact} from "react-icons/fa";


import {TbBrandFramerMotion} from "react-icons/tb";
import {SiGreensock} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";
import {MdArrowOutward} from "react-icons/md";


export const CardWork = ({i, title, description, src, link, progress, range, color, targetScale}) => {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", 'start start']
    })

    const Imgscale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale])

    return (

        <div ref={container} className={'cardWorkContainer'}>
            <motion.div style={{
                backgroundColor: color,
                scale,
                top: `calc(-5vh + ${i * 25}px)`
            }} className={'cardWork'}>

                <div className={'imgCardWork'}>
                    <a href={link}>
                        <div className={'titleContainer'}>
                            <h1 className={'title'}>{title}</h1>
                            <p className={'pCardWork'}>TECHNOLOGIES USED</p>
                            <div className={'iconsRow'}>
                                <FaReact className={'IconsCardWork'} alt={'React'}/>
                                <FaFigma className={'IconsCardWork'}/>
                                <TbBrandFramerMotion className={'IconsCardWork'}/>
                                <SiGreensock className={'IconsCardWork'}/>
                                <FaHtml5 className={'IconsCardWork'}/>
                                <FaCss3 className={'IconsCardWork'}/>
                                <IoLogoJavascript className={'IconsCardWork'}/>
                            </div>

                        </div>
                        <div className={'viewProject'}>


                            <p>VIEW PROJECT</p>

                            <MdArrowOutward className={'arrowIcon'}/>


                        </div>
                        <motion.div className={'inner'} style={{scale: Imgscale}}>
                            <img src={`/portfolio/src/assets/images/${src}`} alt="image"/>
                        </motion.div>
                    </a>
                </div>

            </motion.div>
        </div>


    )
}
