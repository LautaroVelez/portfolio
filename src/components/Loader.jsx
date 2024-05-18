import {Container} from "react-bootstrap";
import '../assets/styles/Loader.css';
import gsap from 'gsap';
import {useEffect, useRef} from "react";
import {motion} from "framer-motion"

const Loader = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);

    useEffect(() => {
        let xPercent = 0;
        let direction = -1;

        const animation = () => {
            gsap.set(firstText.current, {xPercent: xPercent});
            gsap.set(secondText.current, {xPercent: xPercent});
            gsap.set(thirdText.current, {xPercent: xPercent});
            xPercent += 0.75 * direction;
            requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);


    }, []);

    return (
        <Container fluid className="text-black">
            <div className="h-screen">
                <motion.div
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    initial={{opacity: 0, y: -30}}
                    exit={{opacity: 0, y: 200}}
                >
                    <h3 className={'WelcomeLittleText text-md-center font-bold'}>
                        WELCOME</h3>
                </motion.div>

                <motion.div

                >
                    <h1 className="ImLautaroText font-roboto text-md-start overflow-hidden font-bold">
                        I'M
                    </h1>
                </motion.div>
                <motion.div

                >
                    <h1 className="ImLautaroText font-roboto text-md-start overflow-hidden font-bold">
                        LAUTARO.
                    </h1>
                </motion.div>

                <motion.div
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    initial={{opacity: 0, y: 30}}
                    exit={{opacity: 0, y: -200}}
                >
                    <h3 className="BasedInLittleText text-md-end text-sm-center font-bold" id="BasedInText">
                        BASED IN:
                    </h3>
                </motion.div>

                <div className={'SliderContainer bottom-0 overflow-hidden absolute'}>
                    <div className="sliderText flex justify-center relative whitespace-nowrap">
                        <h3 ref={firstText} className={'mx-10'}>CÓRDOBA, ARGENTINA</h3>
                        <h3 ref={secondText} className={'mx-10'}>CÓRDOBA, ARGENTINA</h3>
                        <h3 ref={thirdText} className={'absolute left-full mx-10'}>CÓRDOBA, ARGENTINA</h3>
                    </div>
                </div>
            </div>
        </Container>
    )
        ;
}

export default Loader;
