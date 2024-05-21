import {Col, Container, Row} from "react-bootstrap";
import {FaReact} from "react-icons/fa";
import React from "react";

const WhyMeSection = () => {
    const MiniTitleWhyMe = "I THINK THAT MY WORK CAN SPEAK FOR ME."
    const firstParagraph = "I’m a disciplined person, who number one interest is the productivity and creative development of me and the brand im working with."
    const secondParagraph = "I think i act like a connector, problem-solver and forward-thinker, able to impact every step of the process with excellence."
    const thirdParagraph = "There’s no greater joy than seeing an idea come to life."
    const fourthParagraph = "This is your baby."
    const fifthParagraph = "I’d love to help you raise it."

    return (
        <>
            <h1 className={'WhyMeTitle'}>¿WHY ME?</h1>
            <h1 className={'MiniTitleWhyMe text-center'}>{MiniTitleWhyMe}</h1>
            <Container>
                <Row className={'justify-center'}>
                    <Col md={8} className={'text-center'}>
                        <p className={'paragraphWhyMe'}>{firstParagraph}</p>
                        <p className={'paragraphWhyMe'}>{secondParagraph}</p>
                        <p className={'paragraphWhyMe'}>{thirdParagraph}</p>
                        <p className={'paragraphWhyMe'}>{fourthParagraph}</p>
                        <p className={'paragraphWhyMe'}>{fifthParagraph}</p>
                    </Col>
                </Row>
            </Container>
            <hr className="HorizontalLine mt-6"/>

            <Row className={'justify-center'}>
                <FaReact className={'IconReact'}/>
            </Row>
        </>
    )
}

export default WhyMeSection;