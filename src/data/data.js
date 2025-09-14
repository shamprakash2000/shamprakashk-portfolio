
import {
    FaJava,
    FaJs,
    FaReact,
    FaBitbucket,
    FaNodeJs,
    FaAws,
    FaGit,
  } from "react-icons/fa";
  import { BiLogoSpringBoot } from "react-icons/bi";
  import { DiMysql,DiRedis } from "react-icons/di";
  import { SiJunit5, SiSolidity,SiMongodb,SiGrafana,SiSplunk, SiPostman, SiBruno, SiIntellijidea} from "react-icons/si";
  import { GrGraphQl } from "react-icons/gr";
  import { GiHoneycomb } from "react-icons/gi";
  import { VscVscode } from "react-icons/vsc";
  import vercel from "../../public/images/vercel.jpg"
  import bookstore from "../../public/images/BOOK sTORE.jpg"
  import reward from "../../public/images/reward.jpg"
  import farmland from "../../public/images/farmland.jpg"
  import image_profile from "../../public/images/Sham Prakash K.png"
  import apollo from "../../public/images/apollo.png"
  import gcp from "../../public/images/gcp.png"
  
const data = {
    "name": "Sham Prakash K",
    "about_short": "I am a passionate Java Backend Developer with 2.5 years of experience building scalable, high-performance systems and reliable solutions.",
    "about_full":"I'm a Java Backend Developer with 3 years of experience in building scalable applications using Spring Boot, microservices, Node.js, and React. I enjoy modernizing monolithic systems and exploring personal finance. Outside of work, I love reading articles on finance and technology while continuously improving my skills.",
    "aboutMe": "Software Engineer with over 2.5 years of experience specialising in migrating monolithic architectures to microservices for one of America\’s leading investment banks. Proficient in Agile methodologies and delivering high-quality, scalable software solutions using a test-driven approach. Skilled at collaborating effectively with cross-functional teams to drive project success.", 
    "location": "Kasaragod, India",
    "time": "Java",
    "image":image_profile,
    "resume":"https://drive.google.com/file/d/1vrUXj1K2Gnh9CrvJJF68hbaLvkXKGGwA/view?usp=sharing",
      "navigation": [
        { "section": "Home", "link": "#home" },
        { "section": "Skills", "link": "#skills" },
        { "section": "Experience", "link": "#experience" },
        { "section": "Projects", "link": "#projects" },
        { "section": "Awards", "link": "#awards" },
        { "section": "Certifications", "link": "#certifications" },
        
      ],
    "socialLinks": {
      "github": "https://github.com/shamprakash2000",
      "linkedin": "https://www.linkedin.com/in/sham-prakash-k",
      "gmail": "shamprakash2000@gmail.com",
      "sendMail": "mailto:shamprakash2000@gmail.com"
    },
    "workExperience": [
       {
        "company": "HashedIn by Deloitte, Bangalore",
        "title": "Software Engineer 2",
        "period": "Oct 2024 - Present",
        "items": [ "Led the complete transformation of a legacy monolithic system into a microservices-based architecture using Java Spring Boot, GraphQL, and PostgreSQL,resulting in a more modular, scalable, and maintainable solution. This initiative increased system reliability by 60% as measured by reduced downtime and improved performance metrics.",
        "Collaborated with cross-functional teams, providing technical guidance and mentorship to junior developers, fostering a culture of continuous learning and improvement.",
        "Authored multiple comprehensive confluence documentation, ensuring seamless handoffs and enhancing team collaboration by providing clear and detailed information on system architecture, development processes, and best practices."],
        "description_large":"I conducted an in-depth analysis of monolithic codebases and led initiatives to transition them into a microservices architecture, reducing code duplicity by at least 30%. By leveraging CompletableFuture for parallel REST calls, I optimized API performance, reducing latency by 40%. I ensured data integrity and optimal performance using both SQL and NoSQL databases while employing OpenAPI standards to generate service integration classes and interfaces. My contributions included achieving up to 100% test coverage on RESTful APIs with JUnit and utilizing Pactflow and Hoverfly for integration and component testing, ensuring seamless service communication. Additionally, I conducted knowledge transfer sessions, provided debugging support, and facilitated code reviews, actively participating in technical discussions with clients. I collaborated closely with the Product Owner to refine Jira stories, improving sprint planning and reducing cycle time. Through structured documentation, I streamlined onboarding, significantly reducing ramp-up time for new team members, while also supporting cross-functional teams with technical insights and knowledge sharing.",
        "image": image_profile
       },
      {
        "company": "HashedIn by Deloitte, Bangalore",
        "title": "Software Engineer 1",
        "period": "Sept 2022 - Sept 2024",
        "items":[ " Orchestrated the development of critical GraphQL mutations and designed efficient database schemas, optimizing data retrieval and operations across distributed services, contributing to faster data processing andreduced API latency.",
"Engineered key performance enhancements, reducing system response times during peak traffic from 1000ms to 200ms by implementing multithreading, asynchronous processing, caching and advanced query tuning. This 80% performance boost enabled the system to manage a 35% increase in traffic with zero downtime",
"Strengthened system resilience by integrating Resilience4j (circuit breakers, retries, time limiters) and Redis-based session management, improving fault tolerance and login/checkout reliability.",
"Built React.js dashboards for e-commerce (product listing, order history, checkout, and payments) integrated with backend GraphQL APIs, improving user experience and system usability.",
"Developed reusable React components with hooks and state management, reducing frontend bugs and improving maintainability.",
"Delivered end-to-end features by collaborating with backend teams on API design and integrating them into React frontends for seamless workflows."],
        "description_large":"I conducted an in-depth analysis of monolithic codebases and led initiatives to transition them into a microservices architecture, reducing code duplicity by at least 30%. By leveraging CompletableFuture for parallel REST calls, I optimized API performance, reducing latency by 40%. I ensured data integrity and optimal performance using both SQL and NoSQL databases while employing OpenAPI standards to generate service integration classes and interfaces. My contributions included achieving up to 100% test coverage on RESTful APIs with JUnit and utilizing Pactflow and Hoverfly for integration and component testing, ensuring seamless service communication. Additionally, I conducted knowledge transfer sessions, provided debugging support, and facilitated code reviews, actively participating in technical discussions with clients. I collaborated closely with the Product Owner to refine Jira stories, improving sprint planning and reducing cycle time. Through structured documentation, I streamlined onboarding, significantly reducing ramp-up time for new team members, while also supporting cross-functional teams with technical insights and knowledge sharing.",
       "image": image_profile},
      {
        "company": "HashedIn by Deloitte, Bangalore",
        "title": "Software Developer Intern",
        "period": "Mar 2022 - Sept 2022",
        "description_large":"Established CI/CD pipelines using GitHub Actions and YAML for deploying applications on Google Cloud. Built REST APIs with Java Spring Boot and connected them to SQL databases. Worked on authentication by integrating JWT tokens and improved session handling with Redis, reducing unnecessary API calls. Developed services like blog writing and product listing using Firebase and Node.js, and integrated them into a React application. Also implemented a React-based weather forecasting web app.",
        "items":[
          "Established and managed CI/CD pipelines, including authoring YAML files, for deploying applications on Google Cloud using GitHub Actions.",
          "Created and managed REST APIs using Java Spring Boot and established connections to SQL databases.",
          "Collaborated on integrating JWT tokens for authentication and incorporating Redis as an in-memory session store, resulting in enhanced session management and a 50% reduction in unnecessary API calls.",
          "Developed services for tasks like blog writing and product listing using Firebase and Node.js, seamlessly integrating them into a React application."],
       "image": image_profile
          }
    ],
    "awards": [
      {
        "icon": '🏆',
        "title": "Top Impactor Award",
        "organization": "HashedIn by Deloitte",
        "date": "May 2025"
      },
      {
        icon: '🌟',
        "title": "Excellence Award",
        "organization": "HashedIn by Deloitte",
        "date": "Jan 2025"
      },
      {
        icon: '✨',
        "title": "Tech Champion Award",
        "organization": "HashedIn by Deloitte",
        "date": "Sept 2024"
      },
      {
        icon: '🌟',
        "title": "Excellence Spot Award",
        "organization": "HashedIn by Deloitte",
        "date": "Aug 2024"
      },
      {
        icon: '🌟',
        "title": "Excellence Spot Award",
        "organization": "HashedIn by Deloitte",
        "date": "May 2024"
      },
      {
        icon: '🏆',
        "title": "Top Impactor Award",
        "organization": "HashedIn by Deloitte",
        "date": "Mar 2024"
      },
      {
        icon: '🌟',
        "title": "Excellence Spot Award",
        "organization": "HashedIn by Deloitte",
        "date": "Nov 2023"
      },
      {
        icon: '🌟',
        "title": "Rising Star Spot Award",
        "organization": "HashedIn by Deloitte",
        "date": "Dec 2022"
      }
    ],
     "skills" :[
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <BiLogoSpringBoot /> }, 
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "GraphQL", icon: <GrGraphQl /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "SQL", icon: <DiMysql /> },
        { name: "NoSQL", icon: <SiMongodb /> },
        { name: "Junit", icon: <SiJunit5 /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Redis", icon: <DiRedis /> },
        { name: "Git", icon: <FaGit /> },
        { name: "BitBucket", icon: <FaBitbucket /> },
        { name: "Solidity", icon: <SiSolidity />},
        { name: "HoneyComb", icon: <GiHoneycomb />},
        { name: "Grafana", icon: <SiGrafana />},
        { name: "Splunk", icon: <SiSplunk />},
        { name: "Postman", icon: <SiPostman />},
        { name: "Bruno", icon:  <SiBruno />},
        { name: "Intellij IDEA", icon: <SiIntellijidea />},
        { name: "VS Code", icon: <VscVscode />},   
      
     ],
     "projects": [
         {
           "title": 'Vercel Clone - The Integrated System for Deployment',
           "description": 'This project enables the download of a React project from a GitHub repository, the building and uploading of it tocloud storage, and the hosting of the compiled project on specified ports. This streamlined process enhances efficiency and simplifies cloud management for React projects.',
           "image": vercel ,
           "tags": ['Node Js','React', 'Cloudflare R2'],
           "code": 'https://github.com/shamprakash2000/Vercel-App'
         },
         {
           "title": 'Book Store - Complete Backend for Book Details Management',
           "description": 'This backend project, developed using microservices architecture alongside Java Spring Boot, MongoDB and Redis, excels in efficiently managing book details and user interactions. Through the seamless integration of microservices. it ensures scalability, flexibility, and enhanced performance.',
           "image": bookstore,
           "tags": ['Java', 'Springboot', 'MongoDB', 'Redis'],
           "demo": '',
           "code": 'https://github.com/shamprakash2000/Book-Maintain-Microservice'
         },
         {
           "title": 'FarmLand - Ecommerce Platform for Agricultural Products',
           "description": 'Built a culinary marketplace using the MERN stack, with features for product listings, order management, secure payments, and a responsive user interface. This project experience is leveraged in teaching students the practical applications of full-stack development.',
           "image": farmland,
           "tags": ['Node.js', 'React', 'MongoDB'],
           "demo": '',
           "code": 'https://github.com/shamprakash2000/Farmland'
         },
          {
           "title": 'Reward Points Exchange System - Blockchain-Based Solution',
           "description": 'Constructed a Web3 application on the Ethereum blockchain, enabling users to efficiently utilize reward points from multiple organizations. Built with Node.js and React, the platform facilitated crypto token swapping and cross-trading across entities.',
           "image": reward,
           "tags": ['Node.js', 'React', 'Solidity', 'Ethereum'],
           "demo": '',
           "code": 'https://github.com/shamprakash2000/reward-point-exchange-pool'
         }


       ],


       "certifications": [
  {
    "title": "Google Cloud Professional Cloud DevOps Engineer",
    "organization": "Google Cloud",
    "date": "May 2025",
    "link": "https://drive.google.com/file/d/1XG5CeDykDxp8CCrVag4HEd_KiFrX5KkI/view?usp=sharing",
    "logo": gcp
  },
  {
    "title": "Apollo GraphQL Developer Associate",
    "organization": "Apollo",
    "date": "March 2025",
    "link": "https://drive.google.com/file/d/1YrlfPbS71ABLhbH-2zniu4rXIulkK-Cu/view?usp=sharing",
    "logo": apollo
  },
  {
    "title": "Google Cloud Professional Cloud Developer",
    "organization": "Google Cloud",
    "date": "March 2024",
    "link": "https://drive.google.com/file/d/1eejVLcqou0MM-KH5pGOwq0ttwB-k7fAS/view?usp=sharing",
    "logo": gcp
  },
   {
    "title": "Google Cloud Associate Cloud Engineer",
    "organization": "Google Cloud",
    "date": "April 2023",
    "link": "https://drive.google.com/file/d/1vixxFS6aXwCnXrXa9SIvNzbxSawRSGBc/view?usp=sharing",
    "logo": gcp
  }
  
]
  };

export default data;