import React from 'react'

const FooterLayout = () => {
  return (
    <div>
      <div className='text-center '>
        <div className='md:hidden block flex justify-center items-center gap-4 mb-2'>
        <div><a target='blank' href="https://www.linkedin.com/in/khodor-hajj-hassan-42769a234"><i className="fa-brands fa-linkedin-in hover:scale-110 duration-300 hover:text-blue-300"></i></a></div>
    <div><a target='blank' href="https://github.com/khodorhajjhassan"><i className="fa-brands fa-github hover:scale-110 duration-300 hover:text-blue-300"></i></a></div>
        </div>
        <p className=''>Designed & Built by <span className='font-bold text-blue-300 capitalize'>khodor hajj hassan</span></p>
      </div>
    </div>
  )
}

export default FooterLayout