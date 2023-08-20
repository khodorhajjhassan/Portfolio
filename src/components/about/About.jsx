import React, { useState } from 'react'

const About = () => {

    const [click,setClick]=useState(false)
  return (
    <div>
        <div className='md:w-4/5 w-full m-auto md:p-6 p-2 my-10' id='aboutMe'>
                <h2 className='text-4xl font-bold mb-10' >About Me</h2>
                <div className='md:text-base text-sm'>
                <p className='mb-4 text-justify	'>I am an aspiring  junior <span className='text-blue-300 capitalize'>full stack web developer</span> with an unbridled passion for this dynamic field. My journey in web development has been marked by an insatiable curiosity, a commitment to growth, and a fervent desire to create captivating digital experiences. Armed with a <span className='text-blue-300 capitalize'>bachelor's degree in computer engineering</span>, I possess a robust understanding of web technologies that serves as the foundation of my technical prowess. This academic pursuit has not only honed my problem-solving skills but also ignited my creativity in approaching coding challenges.</p>
                <p className='mb-4 text-justify	'>My journey expanded beyond academia as I delved into real-world experiences. Over the course of 5 months at <span className='text-blue-300'><a href="https://esacodinglab.com/">ESA Coding Lab</a></span>, I found myself immersed in projects that demanded both technical expertise and a keen eye for user-centric design. Collaborating within a dynamic team environment, I contributed meaningfully to the development of web solutions that seamlessly integrated cutting-edge technology. This hands-on experience not only enhanced my technical skills but also provided an invaluable opportunity to cultivate soft skills such as teamwork, effective communication, and adaptability. Working on real projects alongside experienced professionals has significantly contributed to my growth as a developer.</p>
                <p className='mb-4 text-justify	'>Eager to contribute my unique perspective and driven by a relentless pursuit of excellence, I am poised to embark on new challenges and continue evolving in the ever-changing landscape of web development.</p>
                </div>
                <div className='flex items-center gap-4 my-10'>
                    <div>
                        <h2 onClick={()=>setClick(!click)} className={`font-bold text-2xl p-2 cursor-pointer border-b-2 border-blue-300 duration-300 ${click ? "border-blue-300 text-blue-300" :"border-white"} `}>Education</h2>
                        
                        </div>
                    <div>
                    <h2 onClick={()=>setClick(!click)} className={`font-bold text-2xl p-2 cursor-pointer border-b-2 border-blue-300 duration-300 ${click ? "border-white" :"border-blue-300 text-blue-300"} `}>Experience</h2>

                        </div>

                </div>
                <div className={`block ${click ? "block" : "hidden"}`}>
                            <h3 className='capitalize text-xl font-bold'>bachelor's degree in computer engineering</h3>
                            <p className='italic text-gray-300'>Lebanese International University</p>
                            <p className='italic text-gray-300'>2019-2022</p>
                        </div>
                        <div className={`block ${click ? "hidden" : "block"}`}>
                            <h3 className='capitalize text-xl font-bold'>full stack web developer</h3>
                            <p className='italic text-gray-300 capitalize'><a href="">ESA Coding Lab</a></p>
                            <p className='italic text-gray-300 capitalize'>institut francais nabatieh</p>
                        </div>
        </div>
    </div>
  )
}

export default About