import React from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Features from './Components/Features'
import Advantages from './Components/Advantages'
import Body1 from './Components/Body1'
import Testim from './Components/Testim'
import Faq from './Components/Faq'
import Img from './Components/Img'
import Footer from './Components/Footer'
import { useState } from 'react';

export default function App() {  
  function toggleTheme(){    
    document.documentElement.classList.toggle('dark');
}
  return (
    
    <>
    <div className='dark:bg-slate-800 dark:text-white'>
    <Navbar/> 
    <Body/>
    <Features/>
    <Advantages/>
    <Body1/>
    <Testim/>
    <Faq/>
    <Img/>
    <Footer/>
    </div>
     </>
  )
}
