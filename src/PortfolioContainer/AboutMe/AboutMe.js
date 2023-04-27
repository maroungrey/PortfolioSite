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


    return (
        <div className="about-me-container screen-container pb-5" id={props.id || ""}>
        <div className="about-me-parent">
            <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
            <div className="about-me-card container pb-5">
                <div className='row'>
                    <div className="col-12 col-lg-6 about-me-image">
                        <img className='img-responsive' src='./maroun-6-02.png'/>
                    </div>
                    <div className="col-12 col-lg-6 mt-3">
                        <p className="about-me-description text-center text-lg-left">
                        As a skilled web developer with extensive experience in both regular and e-commerce websites, I am proud to offer my expertise to clients looking to enhance their online presence. With a passion for creating intuitive and aesthetically pleasing websites, I am committed to providing my clients with the highest level of service possible. Whether you are a small business owner looking to establish your brand online or a large corporation seeking to revamp your existing website, I am confident in my ability to deliver results that meet your unique needs. With a focus on responsive design, user experience, and search engine optimization, I am dedicated to ensuring that your website not only looks great, but also drives traffic and maximizes conversions. So why wait? Let's work together to create a website that truly sets you apart from the competition!
                        </p>
                        <div className="about-me-options">
                            <a className="btn primary-btn m-2" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                Hire Me
                            </a>
                            <a className="btn highlighted-btn m-2" href="MarounBarqawi.pdf">
                                View Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}
