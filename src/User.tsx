import { Stack } from "@mantine/core"
import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin} from "@tabler/icons-react";
const Info={
    name:"Sagar Bissoyi",
    stack:["Frontend Developer","Mern Stack Developer","Full Stack Web Developer","Freelancer",],
    bio:"I'm a MERN Full Stack Web Devloper specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services. Ready to collaborate and create something amazing together!"
}



const ProjectInfo = [
    {
        title: " Audio Platform PODCASTER",
        desc: " Audio Platform PODCASTER, fully responsive Podcaster platform built using React, Node JS, Express JS, Mongo DB and Tailwind CSS, offering a seamless listening podcast across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add podcast and listeing, ",
        image: "Podcaster.png",
        live: true,
        technologies: ["React", "Node JS", "Express JS", "Mongo DB" , "Tailwind CSS"],
        link: "https://podcast-frontend-seven.vercel.app/",
        github: "https://github.com/Sagarbissoyi/PODCAST-FRONTEND"
    },
    {
        title: "Air Travel",
        desc: "Air Travel is a frontend web application that allows users to booking hotel,flights and travel experiences and share them with others. The front end is built with html,css and javascript . Users can add new trips, and view their past trips on a map. The app features a clean, modern design with interactive place images and a user-friendly interface. Air Travel combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: "Travel.png",
        live: true,
        technologies: ["HTML", "CSS", "JAVASCRIPT",],
        link: "https://sagarbissoyi.github.io/AIR-TRAVEL-APP/",
        github: "https://github.com/Sagarbissoyi/AIR-TRAVEL-APP?tab=readme-ov-file"
    },
    {
        title: "Climate Clock APP ",
        desc: "Climate clock app  is a java script web application that replicates the core features of climate animation app, responsive design and best animation",
        image: "Clockapps.png",
        live: true,
        technologies: ["HTML", "CSS", "JAVASCRIPT",],
        link: "https://sagarbissoyi.github.io/Climate",
        github: "https://github.com/Sagarbissoyi/Climate-Clock-APP"
    },
    {
        title: "Travel Tracker",
        desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: "Travel.png",
        live: false,
        technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
        link: "https://github.com/Code-Mars/Travel-Tracker",
        github: "https://github.com/Code-Mars/Travel-Tracker"
    },
    {
        title: "Instagram Clone",
        desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Instagram.png",
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase", "MongoDB"],
        link: "https://github.com/Code-Mars/Instagram-Clone",
        github: "https://github.com/Code-Mars/Instagram-Clone"
    },
    {
        title: "CodeX Code Editor",
        desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
        image: "CodeX.png",
        live: false,
        technologies: ["React", "Tailwind", "Ace Editor"],
        link: "https://github.com/Code-Mars/CodeX",
        github: "https://github.com/Code-Mars/CodeX"
    }
]




const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS","JavaScript", "React JS", "Redux", "Tailwind CSS","Bootstrap","SASS"
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS","MongoDB","Firebase"]
    },
    {
        title: "Languages",
        skills: ["C", "C++","JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
    }
]

const socialLinks = [
    { link: "https://github.com/Sagarbissoyi", icon: IconBrandGithub },
    {
      link: "https://www.linkedin.com/in/sagar-bissoyi-7a68242aa/",
      icon: IconBrandLinkedin,
    },
    {
      link: "https://www.instagram.com/mr.___sagar___/?hl=en",
      icon: IconBrandInstagram,
    },
    { link: "https://leetcode.com/u/Sagar_Bissoyi/", icon: IconBrandLeetcode },
  ];



const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
















export{Info,ProjectInfo,socialLinks,SkillInfo,Slugs}