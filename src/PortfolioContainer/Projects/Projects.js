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
    <div className="projects-container screen-container pb-5" id={props.id || ""}>
        <div className="projects-parent">
            <ScreenHeading title={"Projects"} subHeading={"My Latest Works"} />
        </div>

        <div className="container">

            <div className='row'>

                <div className='col-12 col-md-4 mb-5 project-card'>
                    <a className='text-decoration-none' href='https://ishoppurium.com/' target='_blank'>
                        <div className="project-image">
                            <img className='img-responsive' src='./portfolio-1.png' />
                        </div>
                        <div className="project-textbox">
                            <h5>Purium</h5>
                            <p>Shopify Plus, SQL, React, Node.js, Bootstrap, Wordpress, Azure</p>
                        </div>
                    </a>
                </div>

                <div className='col-12 col-md-4 mb-5 project-card'>
                    <a className='text-decoration-none' href='https://eargasm.com/' target='_blank'>
                        <div className="project-image">
                            <img className='img-responsive' src='./portfolio-2.png' />
                        </div>
                        <div className="project-textbox">
                            <h5>Eargasm</h5>
                            <p>Shopify Plus, HTML, CSS, JavaScript, Bootstrap, Liquid, REST API</p>
                        </div>
                    </a>
                </div>

                <div className='col-12 col-md-4 mb-5 project-card'>
                    <a className='text-decoration-none' href='https://www.panoplie.com/' target='_blank'>
                        <div className="project-image">
                            <img className='img-responsive' src='./portfolio-3.png' />
                        </div>
                        <div className="project-textbox">
                            <h5>Panoplie</h5>
                            <p >Magento 2, PHP, Apache, HTML, CSS, JavaScript, Figma, Linux </p>
                        </div>
                    </a>
                </div>
            </div>
            
        </div>

        {/* <div className='footer-container'>
            <div className='footer-parent'>
                <img src="./shape-03.png" alt='no internet'/>
            </div>
        </div> */}

    </div>
    

  )
}
