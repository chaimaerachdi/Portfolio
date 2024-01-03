import React from 'react'
import CTA  from './CTA';
import ME from '../../assets/w2.png'
import HeaderSocials from './HeaderSocials';
import './header.css'

const Header=()=>{
    return(
        <>
            <header>
                <div className='container header__container'> 
                    <h5>Hello I'm</h5>
                    <h1>Rachdi Chaimae</h1>
                    <h5>Fullstack Developer</h5>
                    {/* new component for remaimning buttons in form of links */}
                    <CTA/>
                    
                    {/* and then the image  */}
                    {/* <div className='me'>
                        <img src={ME} />
                    </div> */}

                    {/* add the scrooll down links links  */}
                    {/* <a href='#contact' className='scroll__down'>Scroll Down</a> */}
                </div>
            </header>
        </>
    );
}

export default Header