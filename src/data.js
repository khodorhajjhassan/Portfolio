import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaBootstrap,
  } from "react-icons/fa";

  import {
    SiJavascript,
    SiPostman,
    SiMysql,
    SiExpress,
    SiMongodb,
    SiRedux,
    SiVisualstudiocode,
    SiInsomnia,
    SiTailwindcss,
  } from "react-icons/si";

  import p1 from './assets/TMG.png'
  import p2 from './assets/e-comerce.png'
  import p3 from './assets/jp.png'



   export const skills = [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt},
        { name: "Bootstrap", icon: FaBootstrap },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: FaReact },
        { name: "Redux", icon: SiRedux },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "Git", icon: FaGitAlt },
        { name: "Postman", icon: SiPostman },
        { name: "Insomnia", icon: SiInsomnia },
        { name: "VSCode", icon: SiVisualstudiocode },
      ];

      export const projects = [
        {
            name:"Transportation Mangment System",
            img:p1,
            desc:"Created an efficient bus transportation management system with integration for streamlined image uploads and secure payment processing. Admins can manage stations, buses, and travel times. Drivers can register, and users can book tickets securely online. Enhanced user experience through effective use of technology.",
            code:[{name:"Bootstrap",color:"bg-purple-500"},{name:"JavaScript",color:"bg-yellow-500"},{name:"MySql",color:"bg-orange-500"},{name:"PHP",color:"bg-purple-700"},{name:"Stripe",color:"bg-blue-500"}],
            source:"https://github.com/khodorhajjhassan/transportation-Managment-System"
        },
       
        {
            name:"Full E-commerce(MERN-STACK)",
            img:p2,
            desc:"Designed a comprehensive e-commerce platform using the MERN stack. Empowered users to explore products, add to cart, create wishlists, compare items, track delivery status, and engage through various features. Integrated state management and utilized modern design aesthetics for an optimal user experience.",
            code:[{name:"Tailwind",color:"bg-blue-700"},{name:"Node.js",color:"bg-green-500"},{name:"Express.js",color:"bg-yellow-500"},{name:"React",color:"bg-blue-500"},{name:"MongoDB",color:"bg-green-500"},{name:"Redux",color:"bg-purple-500"},{name:"Stripe",color:"bg-blue-400"}],
            source:""
        },
        {
            name:"Job Portal",
            img:p3,
            desc:"Developed a dynamic job portal platform for my senior project, enabling seamless interaction between companies and jobseekers. Employed a variety of technologies to facilitate company registration, job posting, jobseeker registration, job search, and application submission. Ensured a user-friendly interface and efficient data management.",
            code:[{name:"Bootstrap",color:"bg-purple-500"},{name:"JavaScript",color:"bg-yellow-500"},{name:"MySql",color:"bg-orange-500"},{name:"PHP",color:"bg-purple-700"}],
            source:"https://github.com/khodorhajjhassan/Job-Portal"
        },
      ]