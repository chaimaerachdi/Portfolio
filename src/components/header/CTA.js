import React from 'react'
import CV from'../../assets/new_cv_ensao2.pdf'
import './header.css'

const CTA=()=>{
    return(
        <div className='cta'>
           <a href={CV} className='btn'>Download CV</a>
           <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    );
}

export default CTA