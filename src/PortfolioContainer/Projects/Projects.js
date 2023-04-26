import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Animations from '../../utilities/Animations'
import ScrollService from '../../utilities/ScrollService'
import './Projects.css'

export default function Projects(props) {

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="projects-container screen-container" id={props.id || ""}>
        <div className="projects-parent">
            <ScreenHeading title={"Projects"} subHeading={"My Latest Works"} />
        </div>

        <div className="container">

            <div className='row'>

                <div className='col-12 col-lg-6'>
                    <div className="project-1-image"></div>
                    <div className="project-1-textbox">
                        <h3>Lorem Ipsum</h3>
                        <p>aaaaaaaaaaaaaaaaa</p>
                    </div>
                </div>

                <div className='col-12 col-lg-6'>
                    <div className="project-2-image"></div>
                    <div className="project-3-image"></div>
                </div>
            </div>
            
        </div>

        <div className='footer-container'>
            <div className='footer-parent'>
                <img src="./shape-03.png" alt='no internet'/>
            </div>
        </div>

    </div>
    

  )
}
