import {motion, useScroll, useTransform} from "framer-motion";
import  {useRef} from "react";
import '/src/assets/styles/LandingPage.css';
import {isMobile} from "react-device-detect";
import mewhitoutfondo from "../assets/images/mewhitoutfondo.png";
import meexpand from "../assets/images/meexpand.jpg";

const AboutMeSection = () => {
    const FirstRef = useRef(null);
    const SecondRef = useRef(null);
    const ThirdRef = useRef(null);

    const {scrollYProgress: scrollYProgress1} = useScroll({
        target: FirstRef,
        offset: ["start end", "end start"],
    });

    const {scrollYProgress: scrollYProgress2} = useScroll({
        target: SecondRef,
        offset: ["start end", "end start"],
    });

    const {scrollYProgress: scrollYProgress3} = useScroll({
        target: ThirdRef,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress1, [0, 1], ["-10%", "20%"]);
    const x2 = useTransform(scrollYProgress2, [0, 1], ["20%", "-20%"]);
    const x3 = useTransform(scrollYProgress3, [0, 2], ["0%", "-180%"]);

    return (


        <section className={'AboutMeSection md:h-[140vh]'}>
            <div className='h-full w-full relative grid place-items-center overflow-hidden '>
                <div className={'absolute inset-0 z-0 h-full'} style={{
                    backgroundImage: {meexpand},
                    backgroundSize: "cover",

                }}>
                    <img src={meexpand} alt="" className={'h-full  w-full bg-cover object-cover'}/>
                </div>
                <div className={'absolute inset-0 z-3 h-[140vh]'} style={{
                    backgroundImage: {mewhitoutfondo},
                    backgroundSize: "cover",
                }}>
                    <img src={mewhitoutfondo} alt="" className={'h-full w-full object-cover'}/>
                </div>
                <div className={'text-start align-top row flex col-12 left-0 z-2'}>
                    {isMobile ? (
                        <h1 className="AboutMeTitle  ColorBlack">ABOUT</h1>
                    ) : (
                        <motion.div ref={FirstRef} style={{x: x1}}>
                            <h1 className="AboutMeTitle ColorBlack ">ABOUT</h1>
                        </motion.div>)}
                </div>
                <div className={'z-2 text-center row flex col-12 -mt-48'}>
                    {isMobile ? (
                        <h1 className="AboutMeTitle text-center ColorWhite">ME</h1>
                    ) : (
                        <motion.div ref={SecondRef} style={{x: x2}}>
                            <h1 className="AboutMeTitle ColorWhite">ME</h1>
                        </motion.div>
                    )}
                </div>
                <div className={'justify-center flex col-12 z-2 -mt-48'}>
                    <motion.div ref={ThirdRef} style={{x: x3}} className={'MeTextContainer'}>
                        <h1 className="MeText FontKaisei">Hello there! I’m Lautaro Velez, a web developer borned in
                            Córdoba,
                            Argentina.</h1>
                        <h1 className="MeText FontEmbed mt-2">
                            I have a solid knowledge in React, JavaScript, HTML, CSS, and more.
                        </h1>
                        <h1 className="MeText FontKaisei mt-2">
                            I consider myself a very creative and a hard-working person who is always trying to
                            learn
                            something new.
                        </h1>
                        <h1 className="MeText FontKaisei mt-2">Extra: I'm 19 years old, I love working out, cars,
                            music,
                            and watching rom-coms!</h1>
                    </motion.div>
                </div>
            </div>
        </section>
    )
        ;
};


export default AboutMeSection;
