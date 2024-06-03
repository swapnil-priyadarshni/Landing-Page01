import React from 'react'
import  { useEffect, useState } from "react";

export default function Navbar() {
    function toggleTheme(){    
        document.documentElement.classList.toggle('dark');
}



  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className={`max-w-screen-2xl container mx-auto md:px-20 dark:bg-slate-700 dark:text-white fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md bg-secondary text-black  transition-all ease-in-out"
            : ""
        }`}>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>About Us </a></li>
        <li><a>Pricing</a></li>
        <li><a>Features</a></li>
      </ul>
    </div>
    <img src="/images/logo.png" alt="img" className='ml-10 hover:cursor-pointer'/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl ">
    <li ><a>Home</a></li>
        <li><a>About Us </a></li>
        <li><a>Pricing</a></li>
        <li><a>Features</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-black text-white hover:bg-red-600 p-10 py-5 m-3 mr-10">Download </a>

    {/* Dark Mode Enable Button */}
    <a className="btn bg-black text-white hover:bg-red-600 p-10 py-5 m-3 mr-10" onClick={toggleTheme}>Theme</a>

    <img src="/images/star.png" alt="" />
  </div>
</div>
    </div>
    </>
  )
}
