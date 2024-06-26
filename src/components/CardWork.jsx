import '../assets/styles/CardWork.css'

import {motion, useScroll, useTransform} from 'framer-motion';
import  {useRef} from "react";
import {FaCss3, FaFigma, FaHtml5, FaReact} from "react-icons/fa";
import projects from "../assets/utils/data.js"

import {TbBrandFramerMotion} from "react-icons/tb";
import {SiDjango, SiGreensock, SiMysql} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";
import {MdArrowOutward} from "react-icons/md";


export const CardWork = ({i, title, src, link, progress, range, color, targetScale}) => {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", 'start start']
    })

    const Imgscale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale])


    const renderIcons = (icons) => {
        return icons.map((icon, index) => {
            switch (icon) {
                case "React":
                    return <FaReact key={index} className={'IconsCardWork'} alt={'React'}/>;
                case "Figma":
                    return <FaFigma key={index} className={'IconsCardWork'}/>;
                case "Framer Motion":
                    return <TbBrandFramerMotion key={index} className={'IconsCardWork'}/>;
                case "Greensock":
                    return <SiGreensock key={index} className={'IconsCardWork'}/>;
                case "HTML5":
                    return <FaHtml5 key={index} className={'IconsCardWork'}/>;
                case "CSS3":
                    return <FaCss3 key={index} className={'IconsCardWork'}/>;
                case "JavaScript":
                    return <IoLogoJavascript key={index} className={'IconsCardWork'}/>;
                case "Django":
                    return <SiDjango key={index} className={'IconsCardWork'}/>;
                case "MySQL":
                    return <SiMysql key={index} className={'IconsCardWork'}/>;

                default:
                    return null;
            }
        });
    }

    return (

        <div ref={container} className={'cardWorkContainer'}>
            <motion.div style={{
                backgroundColor: color,
                scale,
                top: `calc(-5vh + ${i * 25}px)`
            }} className={'cardWork relative'}>

                <div className={'imgCardWork'}>
                    <a href={link}>
                        <div className={'titleContainer'}>
                            <h1 className={'title'}>{title}</h1>
                            <p className={'pCardWork'}>TECHNOLOGIES USED</p>
                            <div className={'iconsRow'}>
                                {renderIcons(projects[i].icons)}
                            </div>

                        </div>
                        <div className={'viewProject'}>
                            <p>VIEW PROJECT</p>
                            <MdArrowOutward className={'arrowIcon'}/>
                        </div>
                        <motion.div className={'inner'} style={{scale: Imgscale}}>
                            <img src={src} alt="image"/>
                        </motion.div>
                    </a>
                </div>

            </motion.div>
        </div>


    )
}
