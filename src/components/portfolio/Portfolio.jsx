import React from 'react'
import IMG1 from '../../assets/amazonClone.png'
import IMG2 from '../../assets/youClone.png'
import IMG3 from '../../assets/WhatsApp Image 2024-01-03 at 13.46.10.jpeg'
import './portfolio.css'

const Portfolio=()=>{
    return(
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1}/>
                    </div>
                    <h3>Amazon Clone </h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/chaimaerachdi?tab=repositories' className='btn' target='_blank'>Github</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG2}/>
                    </div>
                    <h3>Youtube Clone</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/chaimaerachdi?tab=repositories' className='btn' target='_blank'>Github</a>
                    </div>
                </article>
               

            </div>
        </section>
    );
}

export default Portfolio