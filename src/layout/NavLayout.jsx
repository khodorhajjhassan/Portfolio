import React from 'react'
import { NavLink ,Outlet} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { toggleClicked } from '../redux/toggleSlice';
import logo from '../assets/portfolio-logo.png'
import Navbar from '../components/home/Navbar';

const NavLayout = () => {

  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(toggleClicked());
  };

  return (
    <div className='bg-black'>
        <header>
            <div className='w-4/5 p-2 bg-black m-auto text-white flex items-center justify-between'>
                <div className='w-20 animate-pulse'><img src={logo} className='w-full h-full' alt="" /></div>
                <div className='z-50 cursor-pointer' onClick={handleToggleClick}><i className="fa-solid fa-bars-staggered z-50 text-2xl"></i></div>
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