import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleClicked } from '../../redux/toggleSlice';
import resume from '../../assets/resume.pdf'


const Navbar = () => {

    const isToggleClicked = useSelector(state=>state.toggle)
    const dispatch=useDispatch();

  const handleToggleClick = () =>{
    dispatch(toggleClicked())
  }

  return (
    <div>
        <div className={`bg-blue-300 shadow-lg shadow-blue-300 h-screen fixed top-0 -right-0 duration-300 overflow-y-auto  p-10 md:w-96 w-48 z-10 ${isToggleClicked ? "right-0" :"-right-96"} `}>
           <div className='mt-24 flex flex-col md:items-center justify-between  h-96  gap-12'>
              <a href="#aboutMe"  onClick={handleToggleClick}>
            <div className='flex items-center gap-2 font-bold text-white duration-300 hover:text-black  '>
            <i className="fa-solid fa-user text-xl"></i>
            <p className='text-xl'>About</p>
            </div>
            </a>
            <a href="#Skills"  onClick={handleToggleClick}>
            <div className='flex items-center gap-2 font-bold text-white duration-300 hover:text-black'>
            <i class="fa-solid fa-pen-nib"></i>
            <p className='text-xl'>Skills</p>
            </div>
            </a>
            <a href="#projects"  onClick={handleToggleClick}>
            <div className='flex items-center gap-2 font-bold text-white duration-300 hover:text-black'>
            <i class="fa-solid fa-wallet"></i>
            <p className='text-xl'>Projects</p>
            </div>
            </a>
            <a href="#contact"  onClick={handleToggleClick}>
            <div className='flex items-center gap-2 font-bold text-white duration-300 hover:text-black'>
            <i class="fa-solid fa-envelope"></i>
            <p className='text-xl'>Contact</p>
            </div>
            </a>
            <a href={resume}  target='blank' onClick={handleToggleClick}>
            <div className='flex items-center gap-2 font-bold text-white duration-300 hover:text-black'>
            <i class="fa-solid fa-file"></i>
            <p className='text-xl'>Resume</p>
            </div>
            </a>
        </div>
        </div>
    </div>
  )
}

export default Navbar