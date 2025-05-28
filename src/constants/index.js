const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#techstack" },
  { name: "Contact", href: "/#contact" }
];

const bentoSocialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: "/images/fb.svg",
  },
  {
    name: "Instagram",
    href: "https://www.facebook.com/",
    icon: "/images/insta.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.facebook.com/",
    icon: "/images/linkedin.svg",
  },
  {
    name: "Gmail",
    href: "https://www.Gmail.com/",
    icon: "/images/gmail.svg",
  },
];

const iconsList = [
  {
    name: "html",
    image: "/images/html.svg",
  },
  {
    name: "css",
    image: "/images/css.svg",
  },
  {
    name: "javascript",
    image: "/images/js.svg",
  },
  {
    name: "react",
    image: "/images/react.svg",
  },
  {
    name: "typescript",
    image: "/images/ts.svg",
  },
  {
    name: "github",
    image: "/images/github.svg",
  },
  {
    name: "gsap",
    image: "/images/gsap.svg",
  },
  {
    name: "threejs",
    image: "/images/threejs.svg",
  },
  {
    name: "figma",
    image: "/images/figma.svg",
  },
  
];

const slides = [
  {
    id: 1,
    title: "Sofi",
    img: "/images/p1.png",
  },
  {
    id: 2,
    title: "Jasmina",
    img: "/images/p2.png",
  },
  {
    id: 3,
    title: "d.tampe",
    img: "/images/p3.png",
  },
  {
    id: 4,
    title: "Blimp.gr",
    img: "/images/p4.png",
  },
  {
    id: 5,
    title: "Hawk Style Design",
    img: "/images/p5.png",
  },
  {
    id: 6,
    title: "Lewis",
    img: "/images/p6.png",
  },
];

// New projects data with detailed information
const projectsData = [
{
  id: 2,
  title: "Gymstatic",
  subtitle: "Modern Gym Management Platform",
  description: "A comprehensive fitness platform featuring membership management, class scheduling, and member engagement tools designed to streamline gym operations and enhance user experience.",
  image: "/images/Gymstatic.png",
  technologies: ["React", "Tailwind CSS", "Framer Motion", "React Scroll", "Lucide Icons", "Vite"],
  duration: "8 Weeks",
  client: "Personal Project",
  year: "2024",
  category: "Web Development",
  liveUrl: "#",
  githubUrl: "#",
  features: [
    "Interactive membership plans with tiered pricing options",
    "Dynamic trainer profiles with experience display",
    "Responsive schedule management system",
    "Smooth scroll navigation with React Scroll",
    "Animated UI elements using Framer Motion",
    "Cross-device compatible layout with Tailwind CSS"
  ],
  challenges: [
    {
      title: "Complex Animations",
      description: "Implementing smooth transitions between sections while maintaining performance",
      solution: "Optimized animations using Framer Motion's LazyMotion for code splitting"
    },
    {
      title: "Responsive Pricing Grid",
      description: "Creating adaptable pricing cards for different screen sizes",
      solution: "Developed fluid grid system with Tailwind's responsive breakpoints"
    }
  ],
  outcomes: [
    "Achieved 95+ Lighthouse performance score through Vite optimizations",
    "Reduced CSS bundle size by 35% using Tailwind's utility-first approach",
    "Implemented scroll-triggered animations with 60 FPS consistency",
    "Designed 3 distinct membership tiers with interactive pricing cards",
    "Developed reusable component library for future gym projects"
  ]
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    subtitle: "Modern Shopping Experience",
    description: "A full-stack e-commerce platform with advanced features including real-time inventory management, secure payment processing, and personalized recommendations.",
    image: "/images/p2.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    duration: "12 Weeks",
    client: "Startup Client",
    year: "2024",
    category: "Full Stack Development",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "User authentication and authorization",
      "Product catalog with advanced search",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Admin dashboard for inventory management"
    ],
    challenges: [
      {
        title: "Payment Security",
        description: "Implemented secure payment processing with PCI compliance",
        solution: "Achieved 100% secure transactions with zero security incidents"
      },
      {
        title: "Performance Optimization",
        description: "Optimized database queries and implemented caching strategies",
        solution: "Reduced page load time by 60% and improved user experience"
      }
    ],
    outcomes: [
      "Successfully processed over $50K in transactions",
      "Achieved 99.9% uptime with robust error handling",
      "Implemented responsive design supporting all device types",
      "Built scalable architecture supporting 1000+ concurrent users"
    ]
  },
  {
    id: 3,
    title: "Task Management App",
    subtitle: "Productivity Enhancement Tool",
    description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
    image: "/images/p3.png",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io", "Chart.js"],
    duration: "8 Weeks",
    client: "Corporate Client",
    year: "2023",
    category: "Web Application",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Real-time task updates and notifications",
      "Team collaboration and file sharing",
      "Project timeline and milestone tracking",
      "Advanced reporting and analytics",
      "Mobile-responsive design"
    ],
    challenges: [
      {
        title: "Real-time Synchronization",
        description: "Implemented WebSocket connections for instant updates",
        solution: "Achieved sub-second update propagation across all clients"
      },
      {
        title: "Data Consistency",
        description: "Developed conflict resolution algorithms for concurrent edits",
        solution: "Maintained 100% data integrity with automatic conflict resolution"
      }
    ],
    outcomes: [
      "Improved team productivity by 35% through better task organization",
      "Reduced project completion time by 25% with better tracking",
      "Achieved 95% user satisfaction rate in feedback surveys",
      "Successfully deployed to 500+ users across multiple teams"
    ]
  },
  {
    id: 4,
    title: "Portfolio Website",
    subtitle: "Creative Digital Showcase",
    description: "A modern, interactive portfolio website featuring 3D animations, smooth transitions, and responsive design to showcase creative work and technical skills.",
    image: "/images/p4.png",
    technologies: ["React", "Three.js", "GSAP", "Tailwind CSS", "Framer Motion"],
    duration: "6 Weeks",
    client: "Personal Project",
    year: "2023",
    category: "Frontend Development",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "3D interactive elements and animations",
      "Smooth scroll and page transitions",
      "Responsive design for all devices",
      "Contact form with email integration",
      "SEO optimized structure"
    ],
    challenges: [
      {
        title: "Performance Optimization",
        description: "Optimized 3D models and animations for web performance",
        solution: "Achieved 90+ Lighthouse performance score"
      },
      {
        title: "Cross-browser Compatibility",
        description: "Ensured consistent experience across all major browsers",
        solution: "Achieved 100% compatibility with fallback solutions"
      }
    ],
    outcomes: [
      "Increased portfolio engagement by 200% with interactive elements",
      "Achieved 95+ Google PageSpeed Insights score",
      "Generated 50+ client inquiries through the contact form",
      "Featured in web design showcases and developer communities"
    ]
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    subtitle: "Analytics and Management Platform",
    description: "A comprehensive social media management dashboard with analytics, scheduling, and multi-platform integration for efficient social media management.",
    image: "/images/p5.png",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
    duration: "10 Weeks",
    client: "Marketing Agency",
    year: "2023",
    category: "Full Stack Development",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Multi-platform social media integration",
      "Advanced analytics and reporting",
      "Content scheduling and automation",
      "Team collaboration tools",
      "Custom dashboard widgets"
    ],
    challenges: [
      {
        title: "API Rate Limiting",
        description: "Implemented intelligent rate limiting and caching strategies",
        solution: "Reduced API calls by 70% while maintaining real-time data"
      },
      {
        title: "Data Visualization",
        description: "Created interactive charts and graphs for complex analytics",
        solution: "Built custom D3.js components for enhanced user experience"
      }
    ],
    outcomes: [
      "Managed 100+ social media accounts efficiently",
      "Increased client engagement rates by 45% through better scheduling",
      "Reduced manual work by 80% with automation features",
      "Generated detailed reports saving 20+ hours per week"
    ]
  },
  {
    id: 6,
    title: "Learning Management System",
    subtitle: "Educational Platform Solution",
    description: "A comprehensive learning management system with course creation, student tracking, assessment tools, and interactive learning features for educational institutions.",
    image: "/images/p6.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS", "Stripe"],
    duration: "16 Weeks",
    client: "Educational Institution",
    year: "2023",
    category: "Full Stack Development",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Course creation and management tools",
      "Student progress tracking and analytics",
      "Interactive quizzes and assessments",
      "Video streaming and content delivery",
      "Payment processing for course enrollment"
    ],
    challenges: [
      {
        title: "Video Streaming Optimization",
        description: "Implemented adaptive bitrate streaming for optimal video delivery",
        solution: "Achieved 99% video playback success rate across all devices"
      },
      {
        title: "Scalability Requirements",
        description: "Designed architecture to handle thousands of concurrent users",
        solution: "Successfully scaled to support 5000+ simultaneous users"
      }
    ],
    outcomes: [
      "Served 10,000+ students across multiple institutions",
      "Improved learning outcomes by 30% through interactive features",
      "Reduced administrative workload by 50% with automation",
      "Generated $500K+ in course revenue through the platform"
    ]
  }
];

const testimonials = [
  {
    name: "John Miller",
    pos: "Founder of ModernEdge Solutions",
    review:
      "David Jhon turned our vision into a stunning, functional platform that our customers love. Their creativity and technical expertise truly set them apart.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Emily Carter",
    pos: "UX Designer at PixelWorks Studio",
    review:
      "David Jhon consistently brings fresh ideas and innovative solutions. Their passion for creativity and attention to detail elevate every project.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Sarah Lopez",
    pos: "Entrepreneur and Small Business Owner",
    review:
      "Exceeded my expectations with a unique and beautifully designed product that works flawlessly. Their creative touch is outstanding.",
    imgPath: "/images/client3.png",
  },
  {
    name: "David Chen",
    pos: "Project Manager at CreativeSphere Agency",
    review:
      "Blends technical skills with bold creativity to deliver exceptional results. They push boundaries and elevate every project they work on.",
    imgPath: "/images/client4.png",
  },
];

const footerIconsList = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: "/images/b-fb.svg",
  },
  {
    name: "Instagram",
    href: "https://www.facebook.com/",
    icon: "/images/b-insta.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.facebook.com/",
    icon: "/images/b-linked.svg",
  },
  {
    name: "WhatsApp",
    href: "https://www.facebook.com/",
    icon: "/images/b-whatsapp.svg",
  },
];

export {
  navItems,
  bentoSocialLinks,
  iconsList,
  slides,
  projectsData,
  testimonials,
  footerIconsList,
};