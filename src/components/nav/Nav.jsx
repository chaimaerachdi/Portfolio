import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { BiBook } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { BiMessageRounded } from "react-icons/bi";
import { useState } from 'react';

import './nav.css'

const Nav=()=>{
    const[activeNav,setActiveNav]=useState('#');
    return(
        <>
            <nav>
                <a href='#'  onClick={()=>{setActiveNav('#')}} 
                           className={activeNav==='#'?'active':''}><IoHomeOutline/></a>
                <a href='#about' onClick={()=>{setActiveNav('#about')}} 
                           className={activeNav==='#about'?'active':''}><CiUser/></a>
                <a href='#experience'onClick={()=>{setActiveNav('#experience')}}
                           className={activeNav==='#experience'?'active':''}
                ><BiBook/></a>
                <a href='#portfolio'onClick={()=>{setActiveNav('#portfolio')}}
                           className={activeNav==='#portfolio'?'active':''}
                ><ImProfile/></a>
                <a href='#contact'onClick={()=>{setActiveNav('#contact')}} 
                           className={activeNav==='#contact'?'active':''}
                ><BiMessageRounded/></a>
            </nav>
        </>
    );
}

export default Nav;