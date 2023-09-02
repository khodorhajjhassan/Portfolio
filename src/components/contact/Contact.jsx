import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='md:w-4/5 w-full m-auto md:p-6 p-2 my-10' id='contact'>
                <h2 className='text-4xl font-bold mb-10' >Get In Touch</h2>
                <p className='md:text-base text-sm text-justify md:w-3/5 w-full '><span className='font-bold text-blue-300 text-lg'>Thank You</span>  for taking the time to explore my portfolio. I'm excited to connect and collaborate with fellow developers, designers, and enthusiasts. Whether you have a project in mind, a question about my work, or simply want to have a chat, I'm always eager to engage. Feel free to reach out through the provided contact details or connect with me on social media. Let's embark on a journey of creativity, innovation, and learning together</p>
                <div className='flex items-center gap-4'>
                <button className='text-white md:mt-10 mt-5 p-2 border-2 font-bold duration-300 hover:bg-blue-300 hover:text-black hover:shadow-lg	hover:shadow-blue-300'>
                    <a target='blank' href="mailto:khodorhajjhassan1@gmail.com">Contact Me</a>
              
            </button>
            <button className='text-white md:mt-10 mt-5 p-2 border-2 font-bold duration-300 hover:bg-blue-300 hover:text-black hover:shadow-lg	hover:shadow-blue-300'>
                <a target='blank' href="https://www.linkedin.com/in/khodor-hajj-hassan-42769a234">Connect</a>
              
            </button>
                </div>
                </div>
    </div>
  )
}

export default Contact