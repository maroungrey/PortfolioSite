import React from 'react';
import Typical from 'react-typical';
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className='container'>
        <div className='row'>

            <div className='col-12 col-md-6 text-md-left text-center d-md-flex align-items-center'>
                <div>
                    <div className='icons'>
                        <a className='m-1' href='https://www.linkedin.com/in/maroungrey/' target="_blank">
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a className='m-1' href='https://github.com/maroungrey' target="_blank">
                            <i className='fa fa-github'></i>
                        </a>
                        <a className='m-1' href='https://www.instagram.com/the_real_maroun/' target="_blank">
                            <i className='fa fa-instagram'></i>
                        </a>
                    </div>
            
                    <div className='profile-details-name mt-2'>
                        <span className='primary-text'>
                            Hello, I'm <span className='highlighted-text'>Maroun</span>
                        </span>
                    </div>
                    <div className='profile-details-role mt-2'>
                        <span className='primary-text'>
                            <h1 className='font-hermit'>
                                <Typical
                                
                                loop={Infinity}
                                steps={[
                                    "Software Engineer",
                                    1000,
                                    "Full Stack Developer",
                                    1000,
                                    "E-Commerce Developer",
                                    1000,
                                    "Web Developer",
                                    1000,
                                ]}

                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Transforming ideas into seamless software solutions
                            </span>
                        </span>
                    </div>
                    <div className='profile-options mt-3'>
                        <div className='row'>
                            <div className='profile-buttons'>                    
                                <a className='btn primary-btn outlined-btn m-2' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                    Get in Touch
                                </a>
                                <a href='#'className='btn highlighted-btn m-2'>View Resume</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 profile-img'>
                    <img className='img-responsive' src='./maroun-1.png'/>
            </div>
        </div>


    </div>
  )
}
