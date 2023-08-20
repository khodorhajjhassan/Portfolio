import React, { useEffect } from 'react'
import { Tooltip } from "antd";
import { skills } from '../../data';
import WOW from 'wow.js';
import 'wow.js/css/libs/animate.css';
import 'animate.css/animate.min.css';

const Skills = () => {

    useEffect(() => {
        const wow = new WOW({
          boxClass: 'wow', 
          animateClass: 'animated', 
          offset: 0, 
          mobile: true, 
          live: true, 
        });
        wow.init();
      }, []);
   

  return (
    <div>
        <div className='md:w-4/5 w-full m-auto md:p-6 p-2 my-10' id='Skills'>
        <h2 className='text-4xl font-bold mb-10' >Skills</h2>

        <div className='wow fadeIn flex justify-center md:w-8/12 w-10/12 m-auto items-center flex-wrap gap-8'>
          {skills &&
            skills.map((skill, index) => (
              <Tooltip
                key={index}
                placement='top'
                title={skill.name}
                arrow={{
                  pointAtCenter: true,
                }}
              >
                <span>
                  {skill.icon({
                    size: "46px",
                    style: {
                      color: "rgb(100, 181, 246 )",
                      userSelect: "none",
                      fontSize: "2.2rem",
                    },
                  })}
                </span>
              </Tooltip>
            ))}
        </div>

        </div>
    </div>
  )
}

export default Skills