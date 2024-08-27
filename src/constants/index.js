import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    epic,
    shopify,
    carrent,
    gamestore,
    gemini,
    game,
    metaversus,
    sportscar,
    weatherapp,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Game Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "epic",
      icon: epic,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2022 - Jun 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Game Developer",
      company_name: "Epic",
      icon: epic,
      iconBg: "#E6DEDD",
      date: "Jul 2022 - Feb 2023",
      points: [
        "Collaborate with other professionals such as designers to understand their requirements and work together towards a shared vision.",
        "Perform effectively under pressure and meet deadlines to ensure a game is completed on time.",
        "Quality test coding in a systematic and thorough way to find problems or bugs and record precisely where the problem was discovered.",
        "Debug programs and solve complex technical problems that occur within the game's production.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2023 - Jan 2024",
      points: [
        "Develops and validates test routines to ensure the quality of the external and internal interface.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Maintains a professional understanding of web development by tracking trends and participating in study groups.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Managing the complete software development process from conception to deployment.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Continuous learning and keeping up to date with new technologies, frameworks, and best practices in full-stack web development.",
        "Good communication skills and the ability to work collaboratively with team members and stakeholders.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "The design is visually stunning and intuitive, making the user experience seamless and enjoyable",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "You have a great understanding of the client's needs and always ensure that the final product exceeds their expectations.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I appreciate how you approach challenges with creative solutions, often finding more efficient ways to tackle complex problems.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Game Store",
      description:
        "A seamless platform for game enthusiasts to explore and purchase their favorite titles for a better price. From the latest AAA titles to indie gems, we have something for every type of gamer.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gamestore,
      source_code_link: "https://github.com/NalinPriyankara/GameStore",
    },
    {
      name: "Gemini Clone",
      description:
        "A fully functional Gemini clone that help quickly make sense of large amounts of information and seamlessly generate first drafts and provide faster service to customers and make greater use.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "geminiapi",
          color: "green-text-gradient",
        },
        {
          name: "vite",
          color: "pink-text-gradient",
        },
      ],
      image: gemini,
      source_code_link: "https://github.com/NalinPriyankara/Gemini-Clone",
    },
    {
      name: "Escape 2D",
      description:
        "Jump, dash, and explore vibrant worlds in 'Escape', a captivating 2D platformer crafted with the Unity engine. Navigate challenging levels filled with unique enemies, hidden secrets, and tricky obstacles.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "shaderlab",
          color: "pink-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://github.com/NalinPriyankara/GameProject",
    },
    {
      name: "Metaversus",
      description:
        "This Modern next 13 website features a sleek and engaging user experience. The site showcases soothing animations that enhance user interaction and overall aesthetics, truly bringing the concept to life.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "metaverse",
          color: "pink-text-gradient",
        },
      ],
      image: metaversus,
      source_code_link: "https://github.com/NalinPriyankara/Metaversus",
    },
    {
      name: "Sportscar Store",
      description:
        "Discover the thrill of owning a luxury sportscars. Our carefully curated selection features the latest models from top manufacturers, offering unparalleled performance, style, and sophistication.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: sportscar,
      source_code_link: "https://github.com/NalinPriyankara/sportscarWebsite",
    },
    {
      name: "Weather App",
      description:
        "Get real-time weather updates, accurate forecasts, and personalized alerts. Whether you're planning your day or tracking severe weather, provides you with the information you need to stay prepared.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/NalinPriyankara/WeatherApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };