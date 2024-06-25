import '../../assets/styles/LandingPage.css';
import HorizontalScrollSection from "../../components/HorizontalScrollSection.jsx";
import AboutMeSection from "../../components/AboutMeSection.jsx";
import WorkSection from "../../components/WorkSection.jsx";
import WhyMeSection from "../../components/WhyMeSection.jsx";

import TechnologiesSection from "../../components/TechnologiesSection.jsx";
import Footer from "../../components/Footer.jsx";
import Loader from "../../components/Loader.jsx";


const LandingPage = () => {

    return (
        <>
            <Loader key={Loader}/>
            <HorizontalScrollSection/>
            <AboutMeSection/>
            <WorkSection/>
            <WhyMeSection/>
            <TechnologiesSection/>
            <Footer/>

        </>
    );
};

export default LandingPage;
