import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleClicked } from '../../redux/toggleSlice';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const isToggleClicked = useSelector(state=>state.toggle)
    const dispatch=useDispatch();

  const handleToggleClick = () =>{
    dispatch(toggleClicked())
  }
  return (
    <div>
        <div className={`bg-blue-300 shadow-lg shadow-blue-300 h-screen fixed top-0 -right-0 duration-300  p-10 md:w-96 w-48 z-40 ${isToggleClicked ? "right-0" :"-right-96"} `}>
           <div className='mt-24 flex flex-col md:items-center justify-between  h-96  gap-12'>
            <NavLink to='/navbar' onClick={handleToggleClick}>
            <div className='flex items-center gap-2 font-bold text-white duration-300 hover:text-black  '>
            <i className="fa-solid fa-user text-xl"></i>
            <p className='text-xl'>About</p>
            </div>
            </NavLink>
            <NavLink to='/navbar' onClick={handleToggleClick}>
            <div className='flex items-center gap-2 font-bold text-white duration-300 hover:text-black'>
            <i class="fa-solid fa-pen-fancy"></i>
            <p className='text-xl'>Skils</p>
            </div>
            </NavLink> <NavLink to='/navbar' onClick={handleToggleClick}>
            <div className='flex items-center gap-2 font-bold text-white duration-300 hover:text-black'>
            <i class="fa-solid fa-wallet"></i>
            <p className='text-xl'>Project</p>
            </div>
            </NavLink> <NavLink to='/navbar' onClick={handleToggleClick}>
            <div className='flex items-center gap-2 font-bold text-white duration-300 hover:text-black'>
            <i class="fa-solid fa-envelope"></i>
            <p className='text-xl'>Contact</p>
            </div>
            </NavLink>
        </div>
        </div>
    </div>
  )
}

export default Navbar