import React from 'react'
import { HiBadgeCheck } from "react-icons/hi";

import './experience.css'

const Experience=()=>{
    return(
        <section  id='experience'>
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>
            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Developpement</h3>
                    <div className='experience__content'>
                        

                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>   
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4> CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>    
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                           
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                           <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                           </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                           <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                           </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                           <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Intermediate</small>
                           </div>
                        </article>
                    </div>
                </div>

                <div className='experience__backend'>
                    <h3>Backend Developpement</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>JavaEE</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4> PHP</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>.NET </h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Synfony</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Spring</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience