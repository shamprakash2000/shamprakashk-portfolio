import {
  FaJava, FaJs, FaReact, FaBitbucket, FaNodeJs, FaAws, FaGit, FaFlask,
} from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiMysql, DiRedis } from "react-icons/di";
import {
  SiJunit5, SiMongodb, SiGrafana, SiSplunk,
  SiPostman, SiBruno, SiIntellijidea,
  SiPostgresql, SiGooglecloud, SiApachemaven,
  SiOpenapiinitiative, SiGithub, SiClaude, SiGithubcopilot,
  SiGooglegemini,
} from "react-icons/si";
import { FaRobot, FaDatabase } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { GiHoneycomb } from "react-icons/gi";
import { VscVscode } from "react-icons/vsc";

import vercel from "../../public/images/vercel.jpg";
import bookstore from "../../public/images/BOOK sTORE.jpg";
import reward from "../../public/images/reward.jpg";
import farmland from "../../public/images/farmland.jpg";
import image_profile from "../../public/images/Sham.png";
import apollo from "../../public/images/apollo.png";
import gcp from "../../public/images/gcp.png";

const data = {
  name: "Sham Prakash K",
  role: "Backend Engineer",
  tagline: "Backend Engineer · Building systems that scale",
  heroBio: "4 years building distributed systems that scale. Java · Spring Boot · GraphQL · REST APIs. Exploring AI engineering — RAG pipelines, MCP servers, and Spring AI. Currently at American Express Global Business Travel.",
  about_full:
    "Backend Engineer with 4 years of experience building distributed systems that scale. Currently at American Express Global Business Travel, working on enterprise travel technology. Previously at HashedIn by Deloitte, I designed and optimized backend systems handling 30M+ requests/day using Java, Spring Boot, GraphQL, and REST APIs — improving performance by 80% and leading a team of engineers.",
  aboutMe:
    "I'm a Backend Engineer who thrives on building systems that are fast, reliable, and ready to scale. Over 4 years, I've worked on everything from migrating monolithic platforms to microservices to designing GraphQL and REST APIs that serve millions of requests daily. I genuinely care about the craft — squeezing latency, eliminating failure modes, and writing code that a future engineer will thank you for.",
  aboutMe2:
    "Lately I've been deep in AI engineering — building RAG pipelines with Pinecone vector search, tool-calling agents, and MCP servers using Spring AI and the Gemini API. I believe AI will fundamentally reshape how backend systems are designed, and I want to be someone who builds those systems, not just uses them.",
  location: "Bangalore, India",
  image: image_profile,
  resume:
    "https://drive.google.com/file/d/1vrUXj1K2Gnh9CrvJJF68hbaLvkXKGGwA/view?usp=sharing",
  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "30M+", label: "Requests / Day" },
    { value: "10+", label: "Devs Mentored" },
    { value: "9", label: "Awards" },
  ],
  navigation: [
    { section: "Home", link: "#home" },
    { section: "About", link: "#about" },
    { section: "Skills", link: "#skills" },
    { section: "Experience", link: "#experience" },
    { section: "Projects", link: "#projects" },
    { section: "Awards", link: "#awards" },
    { section: "Certifications", link: "#certifications" },
  ],
  socialLinks: {
    github: "https://github.com/shamprakash2000",
    linkedin: "https://www.linkedin.com/in/sham-prakash-k",
    gmail: "shamprakash2000@gmail.com",
    sendMail: "mailto:shamprakash2000@gmail.com",
  },
  workExperience: [
    {
      company: "American Express Global Business Travel",
      shortName: "Amex GBT",
      location: "Bangalore, India",
      title: "Engineer I Full Stack Developer",
      period: "May 2026 – Present",
      current: true,
      items: [
        "Developing and maintaining backend services for enterprise-scale global business travel platforms serving corporate clients worldwide.",
        "Building high-availability, distributed systems using modern backend technologies within cross-functional agile teams.",
        "Contributing to the reliability, scalability, and performance of mission-critical travel management software.",
      ],
    },
    {
      company: "HashedIn by Deloitte",
      shortName: "HashedIn",
      location: "Bangalore, India",
      title: "Software Engineer II",
      period: "Oct 2024 – May 2026",
      items: [
        "Led architecture for high-throughput distributed backend systems handling 30M+ requests/day at 80K–100K rpm peak traffic.",
        "Spearheaded monolithic-to-microservices migration using Java Spring Boot and PostgreSQL, improving system reliability by 60%.",
        "Implemented Resilience4j patterns (circuit breakers, retries, time limiters) ensuring graceful degradation during downstream failures.",
        "Owned technical leadership for a team of 5 engineers and mentored 10+ junior developers through design reviews and code quality.",
        "Served as primary client-facing technical contact — gathering requirements, triaging production issues, and driving solution design.",
      ],
    },
    {
      company: "HashedIn by Deloitte",
      shortName: "HashedIn",
      location: "Bangalore, India",
      title: "Software Engineer I",
      period: "Sept 2022 – Oct 2024",
      items: [
        "Designed GraphQL APIs achieving p95 latency under 9ms for reads and under 200ms for writes through query optimization and async processing.",
        "Reduced API response times from 1000ms to 200ms via multithreading, async execution, Redis caching, and SQL query tuning.",
        "Built React.js e-commerce dashboards integrated with backend GraphQL APIs across product listing, orders, and checkout flows.",
        "Scaled backend services to absorb a 35% traffic increase with zero downtime through strategic caching and performance optimization.",
      ],
    },
    {
      company: "HashedIn by Deloitte",
      shortName: "HashedIn",
      location: "Bangalore, India",
      title: "Software Engineer Associate",
      period: "Mar 2022 – Sept 2022",
      items: [
        "Contributed to Java Spring Boot backend services, delivering feature development and bug resolution in production environments.",
        "Applied REST API design, relational database fundamentals, and agile practices in a professional engineering setting.",
        "Supported senior engineers in delivering production-grade features under tight deadlines, earning the Rising Star Award (Dec 2022).",
      ],
    },
  ],
  awards: [
    {
      icon: "🎖️",
      title: "Outstanding Award",
      subtitle: "Semi-Annual",
      count: 1,
      organization: "Deloitte (Parent of HashedIn)",
      dates: "Oct 2025",
      description:
        "Awarded by Deloitte, parent company of HashedIn, for exceptional performance directly recognised by the client — one of the rarest and most prestigious distinctions in the organisation.",
    },
    {
      icon: "🏆",
      title: "Top Impactor Award",
      subtitle: "Semi-Annual",
      count: 2,
      organization: "HashedIn by Deloitte",
      dates: "Mar 2024 · May 2025",
      description:
        "Sustained high-impact contributions and ownership of critical deliverables across half-year cycles.",
    },
    {
      icon: "⚡",
      title: "Tech Champion Award",
      subtitle: "Quarterly",
      count: 1,
      organization: "HashedIn by Deloitte",
      dates: "Sept 2024",
      description:
        "Driving technical excellence and resolving complex engineering challenges with measurable business impact.",
    },
    {
      icon: "🌟",
      title: "Excellence Award",
      subtitle: "Monthly",
      count: 4,
      organization: "HashedIn by Deloitte",
      dates: "Nov 2023 · May 2024 · Aug 2024 · Jan 2025",
      description:
        "Consistent high-quality delivery, reliability, and above-and-beyond contributions recognized monthly.",
    },
    {
      icon: "🌱",
      title: "Rising Star Award",
      subtitle: "Monthly",
      count: 1,
      organization: "HashedIn by Deloitte",
      dates: "Dec 2022",
      description:
        "Outstanding growth and performance recognized in the first year of a professional engineering career.",
    },
  ],
  skills: [
    { name: "Java", icon: <FaJava />, category: "Languages" },
    { name: "JavaScript", icon: <FaJs />, category: "Languages" },
    { name: "Spring Boot", icon: <BiLogoSpringBoot />, category: "Frameworks" },
    { name: "Node.js", icon: <FaNodeJs />, category: "Frameworks" },
    { name: "GraphQL", icon: <GrGraphQl />, category: "Frameworks" },
    { name: "REST APIs", icon: <SiOpenapiinitiative />, category: "Frameworks" },
    { name: "React", icon: <FaReact />, category: "Frameworks" },
    { name: "MySQL", icon: <DiMysql />, category: "Databases" },
    { name: "PostgreSQL", icon: <SiPostgresql />, category: "Databases" },
    { name: "MongoDB", icon: <SiMongodb />, category: "Databases" },
    { name: "Redis", icon: <DiRedis />, category: "Databases" },
    { name: "AWS", icon: <FaAws />, category: "Cloud & DevOps" },
    { name: "GCP", icon: <SiGooglecloud />, category: "Cloud & DevOps" },
    { name: "Git", icon: <FaGit />, category: "Cloud & DevOps" },
    { name: "GitHub", icon: <SiGithub />, category: "Cloud & DevOps" },
    { name: "BitBucket", icon: <FaBitbucket />, category: "Cloud & DevOps" },
    { name: "JUnit", icon: <SiJunit5 />, category: "Testing & Obs." },
    { name: "Mockito", icon: <FaFlask />, category: "Testing & Obs." },
    { name: "HoneyComb", icon: <GiHoneycomb />, category: "Testing & Obs." },
    { name: "Grafana", icon: <SiGrafana />, category: "Testing & Obs." },
    { name: "Splunk", icon: <SiSplunk />, category: "Testing & Obs." },
    { name: "Spring AI", icon: <BiLogoSpringBoot />, category: "AI & ML" },
    { name: "Gemini API", icon: <SiGooglegemini />, category: "AI & ML" },
    { name: "Pinecone", icon: <FaDatabase />, category: "AI & ML" },
    { name: "RAG / LLM", icon: <FaRobot />, category: "AI & ML" },
    { name: "MCP", icon: <FaRobot />, category: "AI & ML" },
    { name: "Postman", icon: <SiPostman />, category: "Tools" },
    { name: "Bruno", icon: <SiBruno />, category: "Tools" },
    { name: "Maven", icon: <SiApachemaven />, category: "Tools" },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea />, category: "Tools" },
    { name: "VS Code", icon: <VscVscode />, category: "Tools" },
    { name: "Claude", icon: <SiClaude />, category: "Tools" },
    { name: "Copilot", icon: <SiGithubcopilot />, category: "Tools" },
  ],
  projects: [
    {
      title: "Gemini Chat",
      subtitle: "AI Backend Learning Project — Phase by Phase",
      description:
        "Spring Boot app exploring AI backend development end-to-end — plain HTTP chat, Spring AI integration, RAG pipelines with Pinecone vector search, persistent conversation memory, tool-calling agents, and MCP server connectivity. Deployed live on Render.",
      tags: ["Java", "Spring Boot", "Spring AI", "Gemini", "Pinecone", "PostgreSQL"],
      code: "https://github.com/shamprakash2000/gemini-chat",
      featured: true,
    },
    {
      title: "Gemini Knowledge MCP Server",
      subtitle: "RAG + Database Knowledge Server over MCP",
      description:
        "Spring Boot MCP server exposing RAG (document ingestion + Pinecone vector search) and database query tools to any LLM host. Documents are chunked, embedded via Gemini API, and retrieved by semantic similarity — no chat model inside the server.",
      tags: ["Java", "Spring Boot", "Spring AI", "MCP", "RAG", "Pinecone", "Gemini"],
      code: "https://github.com/shamprakash2000/gemini-knowledge-mcp-server",
      featured: true,
    },
    {
      title: "Gemini Chat UI",
      subtitle: "React Frontend for Gemini Chat",
      description:
        "React + TypeScript + Vite frontend built to interact with the Gemini Chat backend. Clean chat interface consuming the Spring AI REST APIs with real-time conversation support.",
      tags: ["React", "TypeScript", "Vite"],
      code: "https://github.com/shamprakash2000/gemini-chat-ui",
    },
    {
      title: "Gemini MCP Server",
      subtitle: "Model Context Protocol Database Tool Server",
      description:
        "Standalone Spring Boot app exposing database query tools over MCP/SSE. LLM-agnostic — connects to Claude Desktop, Cursor, or any MCP host. Enforces SELECT-only safety, row caps, and table allowlists.",
      tags: ["Java", "Spring Boot", "Spring AI", "MCP", "PostgreSQL"],
      code: "https://github.com/shamprakash2000/gemini-mcp-server",
    },
    {
      title: "Vercel Clone",
      subtitle: "Integrated System for Deployment",
      description:
        "A microservices-based pipeline that fetches a React project from GitHub, automates the build process, uploads compiled builds to Cloudflare R2, and hosts them on specified ports with custom configuration.",
      image: vercel,
      tags: ["Node.js", "React", "Cloudflare R2"],
      code: "https://github.com/shamprakash2000/Vercel-App",
    },
    {
      title: "Book Store",
      subtitle: "Microservices Backend for Book Management",
      description:
        "A microservices-based backend using Java Spring Boot for scalable and modular design, with MongoDB for data persistence and Redis for caching to improve performance and responsiveness.",
      image: bookstore,
      tags: ["Java", "Spring Boot", "MongoDB", "Redis"],
      code: "https://github.com/shamprakash2000/Book-Maintain-Microservice",
    },
    {
      title: "FarmLand",
      subtitle: "E-commerce Platform for Agricultural Products",
      description:
        "A full-stack MERN marketplace with product listings, order management, secure payments, and a responsive UI. Used to teach practical full-stack development to students.",
      image: farmland,
      tags: ["Node.js", "React", "MongoDB"],
      code: "https://github.com/shamprakash2000/Farmland",
    },
    {
      title: "Reward Points Exchange",
      subtitle: "Blockchain-Based Loyalty Platform",
      description:
        "A Web3 application on the Ethereum blockchain enabling users to swap reward points across organizations via crypto token exchange and cross-entity trading.",
      image: reward,
      tags: ["Node.js", "React", "Solidity", "Ethereum"],
      code: "https://github.com/shamprakash2000/reward-point-exchange-pool",
    },
  ],
  certifications: [
    {
      title: "Google Cloud Professional Cloud DevOps Engineer",
      organization: "Google Cloud",
      level: "Professional",
      date: "May 2025",
      link: "https://drive.google.com/file/d/1XG5CeDykDxp8CCrVag4HEd_KiFrX5KkI/view?usp=sharing",
      logo: gcp,
    },
    {
      title: "Apollo GraphQL Developer Associate",
      organization: "Apollo",
      level: "Associate",
      date: "March 2025",
      link: "https://drive.google.com/file/d/1YrlfPbS71ABLhbH-2zniu4rXIulkK-Cu/view?usp=sharing",
      logo: apollo,
    },
    {
      title: "Google Cloud Professional Cloud Developer",
      organization: "Google Cloud",
      level: "Professional",
      date: "March 2024",
      link: "https://drive.google.com/file/d/1eejVLcqou0MM-KH5pGOwq0ttwB-k7fAS/view?usp=sharing",
      logo: gcp,
    },
    {
      title: "Google Cloud Associate Cloud Engineer",
      organization: "Google Cloud",
      level: "Associate",
      date: "April 2023",
      link: "https://drive.google.com/file/d/1vixxFS6aXwCnXrXa9SIvNzbxSawRSGBc/view?usp=sharing",
      logo: gcp,
    },
  ],
};

export default data;
