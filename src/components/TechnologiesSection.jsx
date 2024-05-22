import {Col, Container, Row} from "react-bootstrap";
import React from "react";


const TechnologiesSection = () => {
    return (

        <section id={'Technologies'}>
                    <span>
                        <h1 className={'mt-28 text-8xl text-center text-black FontRobotoBold'}>TECHNOLOGIES & TOOLS</h1>
                    </span>
            <Container fluid className={'font-bold text-2xl black'}>
                <Row className={'FontRobotoBold'}>
                    <Col>
                        <h1 className={'text-start'}>TECHNOLOGIES</h1>
                    </Col>
                    <Col>
                        <h1 className={'text-center'}>&</h1>
                    </Col>
                    <Col>
                        <h1 className={'text-end'}>TOOLS</h1>
                    </Col>
                </Row>
                <Row className={'text-center'}>
                    <Col md={6} sm={6}>
                        <h1 className={'text-end'}>JAVASCRIPT</h1>
                        <h1 className={'text-end'}>HTML5</h1>
                        <h1 className={'text-end'}>REACT</h1>
                        <h1 className={'text-end'}>GSAP</h1>
                        <h1 className={'text-end'}>CSS</h1>
                        <h1 className={'text-end'}>PYTHON</h1>
                        <h1 className={'text-end'}>FRAMER MOTION</h1>
                        <h1 className={'text-end'}>RESPONSIVE DESIGN</h1>
                    </Col>
                    <Col md={6} sm={6}>
                        <h1 className={'text-start'}>BOOTSTRAP</h1>
                        <h1 className={'text-start'}>TAILWIND</h1>
                        <h1 className={'text-start'}>FIGMA</h1>
                        <h1 className={'text-start'}>MUI</h1>
                        <h1 className={'text-start'}>NEXT.JS</h1>
                        <h1 className={'text-start'}>PHOTOSHOP</h1>
                        <h1 className={'text-start'}>MATERIAL DESIGN</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default TechnologiesSection;