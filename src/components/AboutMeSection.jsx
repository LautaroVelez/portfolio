import {motion} from "framer-motion";
import me from "../assets/images/me.jpg";
import React from "react";


const AboutMeSection = () => {
    return (
        <>

            <h1 className="AboutMeTitle text-center">About</h1>
            <h1 className="AboutMeTitle text-center">Me</h1>

            <img src={me} className={'MePhoto'}/>

            <h1 className="MeText FontKaisei">I’m Lautaro Velez, a web developer.</h1>
            <h1 className="MeText FontEmbed">I have a solid knowledge about React, JavaScript, HTML,
                CSS, and more.</h1>
            <h1 className="MeText">I consider myself someone who is highly creative and very into
                design, whether it's fashion, cars, buildings, web pages, I always try to think
                outside
                the box.</h1>


        </>
    )
}

export default AboutMeSection;