import React, {useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService  from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import "./AboutMe.css";

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description:
        "As a skilled web developer with extensive experience in both regular and e-commerce websites, I am proud to offer my expertise to clients looking to enhance their online presence. With a passion for creating intuitive and aesthetically pleasing websites, I am committed to providing my clients with the highest level of service possible. Whether you are a small business owner looking to establish your brand online or a large corporation seeking to revamp your existing website, I am confident in my ability to deliver results that meet your unique needs. With a focus on responsive design, user experience, and search engine optimization, I am dedicated to ensuring that your website not only looks great, but also drives traffic and maximizes conversions. So why wait? Let's work together to create a website that truly sets you apart from the competition!",
        highlights: {
        bullets: [
            "Full-Stack Web development",
            "Interactive Front End",
            "Reliable Back-End",
            "Accessible Interfaces",
            "Mobile-responsive design",
            "Managing databases",
            "Cross-browser compatibility",
            "Adaptability and flexibility",
        ],
        heading: "Here are a Few Highlights:",
        },
    };
    const renderHighlight = () => {
        return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
        <div className="highlight" key={i}>
            <div className="highlight-blob"></div>
            <span>{value}</span>
        </div>
        ));
    };

    return (
        <div className="about-me-container screen-container" id={props.id || ""}>
        <div className="about-me-parent">
            <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
            <div className="about-me-card">
            <div className="about-me-profile"></div>
            <div className="about-me-details">
                <span className="about-me-description">
                    {SCREEN_CONSTANTS.description}
                </span>
                <div className="about-me-highlights">
                    <div className="highlight-heading">
                        <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                    </div>
                {renderHighlight()}
                </div>
                <div className="about-me-options">
                    <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                        Hire Me
                    </button>
                    <a href="MarounBarqawi.pdf" download="MarounBarqawi.pdf">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>
            </div>
        </div>
        </div>
  )
}
