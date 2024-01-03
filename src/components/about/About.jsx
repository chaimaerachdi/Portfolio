import React from 'react'
import ME from '../../assets/ME.jpeg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaRegFolderClosed } from "react-icons/fa6";



import './about.css'

const About=()=>{
    return(
        <>
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME}/>
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Formation</h5>
                            <small>software engineering student</small>

                        </article>

                        <article className='about__card'>
                            <FaRegFolderClosed className='about__icon'/>
                            <h5>Projects</h5>
                            <small>7+ Completed</small>

                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Competitions</h5>
                            <small>I'm the winner Huawei ICT competition Morocco 2022-2023 </small>

                        </article>
                    </div>
                    <p>
                    Hello! I'm a software engineering student showcasing my coding journey. Explore my projects and witness my passion for innovation
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                   
                </div>
            </div>
        </section>
        </>
    );
}

export default About