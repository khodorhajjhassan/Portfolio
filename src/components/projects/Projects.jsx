import React from 'react';
import { projects } from '../../data';

const Projects = () => {
  return (
    <div>
      <div className='md:w-4/5 w-full m-auto md:p-6 p-2 my-10' id='projects'>
        <h2 className='text-4xl font-bold mb-10'>Projects</h2>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 shadow-lg '>
          {projects.map((project, index) => (
            <div key={index} className='flex flex-col gap-4 border-2 shadow-md shadow-blue-300'>
              <div className='w-full h-auto'>
                <img src={project.img} alt='' />
                
              </div>
              <div className='p-4  '>
                <div className=' flex  items-center justify-between mb-4'>
                <h2 className='font-bold text-blue-300 md:text-lg text-base'>{project.name}</h2>
                <div className='flex gap-4'>
                    <a target='blank' className='block' href={project.source}>
                        <i className={`fa-brands fa-github text-xl ${project.source ? "block" : "hidden"}  hover:scale-110 duration-300 hover:text-blue-300 `}></i>
                        </a>
                        <a target='blank' className='block' href={project.url}>
                        <i className={`fa-solid fa-globe text-xl    hover:scale-110 duration-300 hover:text-blue-300 ${project.url ? "block" : "hidden"} `}></i>
                        </a>

                </div>
                </div>
                <p className='md:text-base text-sm text-justify mb-5'>{project.desc}</p>
                <div className='flex items-center flex-wrap gap-2'>
                  {project.code.map((tech, techIndex) => (
                    <button
                      key={techIndex}
                      className={`border-dotted border-2 p-1 cursor-auto ${tech.color} mr-2`}
                    >
                      {tech.name}
                    </button>
                  ))}
                </div>
                  

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
