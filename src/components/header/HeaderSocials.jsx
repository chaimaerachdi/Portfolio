import React from 'react'
// import icons for the linkedin....
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

const HeaderSocials=()=>{
    return(
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/rachdi-chaimae-12b140254/' target='_blank'><BsLinkedin /></a>
            <a href='https://github.com/chaimaerachdi'  target='_blank'><FaGithub/></a>
            <a href='https://stackoverflow.com/users/21048867/chaimae'  target='_blank'><FaStackOverflow/></a>
        </div>
    );
}

export default HeaderSocials