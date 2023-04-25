import React,{useState} from 'react';
import Typical from 'react-typical';
import axios from 'axios';
import {toast} from 'react-toastify';

import './ContactMe.css'
import imgBack from './mailz.jpeg'
import load1 from './load2.gif'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/Footer/Footer";

export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {	
        if (screen.fadeInScreen !== props.id) return;	
        Animations.animations.fadeInScreen(props.id);	
      };	
      const fadeInSubscription =	
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);	
    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    const handleName = (e)=>{
        setName(e.target.value);
    };
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    };
    const handleMessage = (e)=>{
        setMessage(e.target.value);
    };
    const submitForm = async(e)=>{
        e.preventDefault();

        try {
            let data ={
                name,
                email,
                message,
            };
            setBool(true)
            const res = await axios.post(`/contact`, data);
            if(name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg)
                toast.error(res.data.msg)
                setBool(false)
            } else if (res.status=== 200){
                setBanner(res.data.msg)
                toast.success(res.data.msg)
                setBool(false)
            }
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div className='main-container fade-in' id={props.id || ""}>
        <ScreenHeading
        subHeading={"Let's Keep in Touch"}
        title={"Contact Me"}
        />

        <div className='central-form'>
            
            <div className='col'>
                <h2 className='title'>
                    {" "}
                    <Typical
                    loop={Infinity}
                    steps={[
                        "Get In Touch",
                        1000,
                    ]}
                    />
                </h2>
                <a href='https://www.linkedin.com/in/maroungrey/' target="_blank">
                    <i className='fa fa-linkedin-square'></i>
                </a>
                <a href='https://github.com/maroungrey' target="_blank">
                    <i className='fa fa-github'></i>
                </a>
                <a href='https://www.instagram.com/the_real_maroun/' target="_blank">
                    <i className='fa fa-instagram'></i>
                </a>
            </div>

            <div className='back-form'>
                <div className='img-back'>
                    <h4>Send Your Email Here!</h4>
                    <img src={imgBack} alt ="404" />
                </div>
                <form onSubmit={submitForm}>
                    <p>{banner}</p>
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                        onChange={handleName}
                        value={name}
                    />

                    <label htmlFor='email'>Email</label>
                    <input type='text' 
                        onChange={handleEmail}
                        value={email}
                    />

                    <label htmlFor='message'>Message</label>
                    <textarea type='text' 
                        onChange={handleMessage}
                        value={message}
                    />

                    <div className='send-btn'>
                        <button type='submit'>
                            Send
                            <i className='fa fa-paper-plane' />
                            {bool?(<b className='load'>
                                <img src={load1} alt='' />
                            </b>):("")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}
