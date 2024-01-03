import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import HeaderSocials from'../header/HeaderSocials'

import './contact.css'

const Contact=()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1hk5ohr', 'template_8w4hb05', form.current, 'eoJjFtp9WsttQfM8i')
        e.target.reset()
    };


    return(
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <HeaderSocials/>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>chaimaer759@gmail.com</h5>
                        <a href='mailto:chaimaer759@gmail.com'>Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <MdEmail className='contact__option-icon'/>
                        <h4>Whatsaap</h4>
                        <h5>+212646660238</h5>
                        <a href='https://api.whatsaap.com/send?phone=+212646660238'>Send a message</a>
                    </article>
                </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full Name' required/>
                        <input type="text" name='email' placeholder='Your Email' required/>
                        <textarea name='message'  rows="7" placeholder='Your Message'></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
            </div>
        </section>
    );
}

export default Contact