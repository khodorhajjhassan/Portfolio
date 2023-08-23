import React from 'react'
import Wave from 'react-wavify'

const FooterLayout = () => {
  return (
    <div>
      <div className='h-28'>
      <Wave mask="url(#mask)"  fill="rgb(100, 181, 246 )" >
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="0.2" stopColor="white" />
      <stop offset="0.5" stopColor="black" />
    </linearGradient>
    <mask id="mask">
      <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
    </mask>
  </defs>
</Wave>
</div>


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