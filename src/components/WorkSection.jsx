import {Row} from "react-bootstrap";
import React from "react";
import projects from "../utils/data.js"
import {CardWork} from "./CardWork.jsx";

const WorkSection = () => {
    return (
        <>
            <h1 className={'mt-28 WhyMeTitle'}>MY WORK</h1>
            <Row className={'justify-content-center'}>

                {
                    projects.map((project, index) => {
                        return <CardWork key={index} {...project}/>
                    })
                }
                <div className="square"></div>
            </Row>
        </>
    )
}

export default WorkSection;