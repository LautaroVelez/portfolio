import {Col, Container, Row} from "react-bootstrap";
import '../assets/styles/Loader.css';
import gsap from 'gsap';
import {useEffect, useRef} from "react";
import SplitType from "split-type";

const Loader = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    const welcomeTextRef = useRef(null);
    const basedInTextRef = useRef(null);

    useEffect(() => {

        const animateTextReveal = (elementId) => {
            const splitText = new SplitType(elementId, {types: 'words, chars'});

            gsap.set(splitText.chars, {y: 10, opacity: 0});
            gsap.to(splitText.chars, {
                y: 1,
                opacity: 1,
                stagger: 0.05,
                duration: 1,
                ease: 'power2.out',
            });
        };

        animateTextReveal('#WelcomeText');
        animateTextReveal('#BasedInText');

        // Animación continua para "CÓRDOBA, ARGENTINA"
        let xPercent = 0;
        let direction = -1;

        const animation = () => {
            gsap.set(firstText.current, {xPercent: xPercent});
            gsap.set(secondText.current, {xPercent: xPercent});
            gsap.set(thirdText.current, {xPercent: xPercent});
            xPercent += 0.50 * direction;
            requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    }, []);

    return (
        <Container fluid className="text-black">
            <div className="h-screen flex flex-col justify-between">
                <h3 className={'WelcomeLittleText  text-start font-bold '} id={'WelcomeText'}
                    ref={welcomeTextRef}>WELCOME</h3>

                <div className="flex flex-col  justify-center flex-grow">
                    <h1 className="ImLautaroText font-roboto text-start font-bold">
                        I'M
                    </h1>
                    <h1 className="ImLautaroText font-roboto text-start font-bold">
                       LAUTARO.
                    </h1>
                    <h3 className="BasedInLittleText text-end font-bold mr-5" id="BasedInText" ref={basedInTextRef}>
                        BASED IN
                    </h3>
                </div>

                <div className={'SliderContainer bottom-0 overflow-hidden absolute'}>
                    <div className="sliderText flex justify-center relative whitespace-nowrap">
                        <h3 ref={firstText} className={'mx-10'}>CÓRDOBA, ARGENTINA</h3>
                        <h3 ref={secondText} className={'mx-10'}>CÓRDOBA, ARGENTINA</h3>
                        <h3 ref={thirdText} className={'absolute left-full mx-10'}>CÓRDOBA, ARGENTINA</h3>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Loader;
