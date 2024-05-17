import {Col, Container, Row} from "react-bootstrap";
import '../assets/styles/LandingPage.css';
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

            gsap.set(splitText.chars, {y: 0, opacity: 0});
            gsap.to(splitText.chars, {
                y: 0,
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
            xPercent += 0.20 * direction;
            requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    }, []);

    return (
        <Container fluid className={'LoaderContainer'}>
            <h3 className={' text-3xl text-center mt-3 '} id={'WelcomeText'} ref={welcomeTextRef}>Welcome</h3>
            <Row className={'WelcomeH1 font-bold text-start FontRoboto ml-20'}>
                <h1>I'M</h1>
                <h1>LAUTARO</h1>
            </Row>
            <h3 className={'mr-20  text-3xl text-end'} id={'BasedInText'} ref={basedInTextRef}>BASED IN</h3>

            <div className={'SliderContainer'}>
                <div className={'sliderText'}>
                    <h3 ref={firstText}>CÓRDOBA, ARGENTINA</h3>
                    <h3 ref={secondText}>CÓRDOBA, ARGENTINA</h3>
                    <h3 ref={thirdText}>CÓRDOBA, ARGENTINA</h3>
                </div>
            </div>
        </Container>
    );
}

export default Loader;
