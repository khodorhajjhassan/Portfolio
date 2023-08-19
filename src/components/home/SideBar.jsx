import React from 'react'

const SideBar = () => {
  return (
    <>
    <div className='fixed md:block hidden bottom-5 p-6  ml-5 text-white flex flex-col justify-center items-center' >
    <div><a target='blank' href="https://www.linkedin.com/in/khodor-hajj-hassan-42769a234"><i className="fa-brands fa-linkedin-in hover:scale-110 duration-300 hover:text-blue-300"></i></a></div>
    <div><a target='blank' href="https://github.com/khodorhajjhassan"><i className="fa-brands fa-github hover:scale-110 duration-300 hover:text-blue-300 mt-5"></i></a></div>
    </div>
    </>
  )
}

export default SideBar