import React from 'react'
import {  Outlet} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { toggleClicked } from '../redux/toggleSlice';
import logo from '../assets/portfolio-logo.png'
import Navbar from '../components/home/Navbar';


const NavLayout = () => {

  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(toggleClicked());
  };

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("shadow-lg","border-b-2");
    else header.classList.remove("shadow-lg","border-b-2");
  });



  return (
    <div className='bg-black'>
        <header>
          <div className='header duration-100 shadow-blue-500 border-blue-300 fixed w-full bg-black z-50'>
            <div className=' md:w-4/5 w-full p-2 bg-black m-auto text-white flex items-center justify-between z-50'>
                <div className='w-20 animate-pulse'>
                  <a href="#top"><img src={logo} className='w-full h-full' alt="" /></a></div>
                <div className='z-50 cursor-pointer' onClick={handleToggleClick}><i className="fa-solid fa-bars-staggered z-50 text-2xl"></i></div>
            </div>
          </div>

        </header>
        <div><Navbar /></div>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default NavLayout