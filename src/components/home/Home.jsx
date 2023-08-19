import React, { useState } from 'react';
import SideBar from './SideBar';
import SideBarRight from './SideBarRight';
import styled, { keyframes } from "styled-components";
import profielP from "../../assets/khodor-pp.png"
import { useDispatch, useSelector } from 'react-redux';
import { toggleClicked } from '../../redux/toggleSlice';


const Home = () => {

  const isToggleClicked = useSelector((state)=>state.toggle);
  const dispatch=useDispatch();

  const handleToggleClick = () =>{
    dispatch(toggleClicked)
  }

  const contentHeight = `calc(100vh - 4rem)`;

  const profileAnimation = keyframes`
  0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
  `
  const ProfilelDiv = styled.div`
  background: url(${profielP});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* filter: grayscale(.5); */
  box-shadow: inset 0 0 0 4px rgb(100, 181, 246 );
  order: 1;
  justify-self: center;
  width: 400px;
  height: 400px;
  border: 2px solid white;
  animation: ${profileAnimation} 5s ease-in-out infinite;

  
  @media (max-width: 992px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 900px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  
  }

  `;

  const one = <h2 className='text-white my-2'>Hello, my name is</h2>;
  const two = <h3 className='text-lg font-bold text-blue-300 my-2'>KHODOR HAJJ HASSAN</h3>
  const three = <p className='text-white md:text-base text-sm '>A passionate junior full-stack web developer. With a solid technical foundation, I bring forth a distinct blend of skills, adaptability, and unwavering attention to detail. My journey in web development has equipped me with the tools to craft innovative digital solutions and bring ideas to life. I'm excited to embark on new challenges and create engaging web experiences that leave a lasting impact.</p>
 
  const items =[one,two,three];
  return (
    <>
      <SideBar />
      <div className={`bg-black flex flex-col h-screen w-4/5 m-auto md:p-6 p-2 duration-300 `}  style={{ height: contentHeight }}>
        <div className='flex md:flex-row flex-col gap-4 items-center md:my-10 my-2 '>
          <div className='flex-1'>
            <h2 className='text-blue-300 capitalize'>Welcome to my portfolio</h2>
            <h2 className='text-white capitalize md:text-5xl text-lg  font-bold'>
              Embark on a Journey of Innovation and Creativity: Explore My Interactive Portfolio
            </h2>
            <button className='text-white md:mt-10 mt-5 p-2 border-2 font-bold duration-300 hover:bg-blue-300 hover:text-black hover:shadow-lg	hover:shadow-blue-300'>
              Learn More
            </button>
          </div>
          <div className='flex-1'>
            <ProfilelDiv />
          </div>
        </div>
        <hr/>
        <div>
          {items.map((val,index)=>(
            <div key={index}>{val}</div>
          ))}
        </div>
      </div>
      <SideBarRight />
    </>
  );
};

export default Home;
