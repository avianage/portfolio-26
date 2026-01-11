export const PROFILE = {
    name: "Aakash Amit Joshi",
    role: "Python Developer | ML Projects | Building Scalable Systems",
    about: `Computer Engineer skilled in software development, machine learning, and web technologies. 
  Experienced in full-stack application development with expertise in Python, C++, and JavaScript.`,
    philosophy: `Driven by trajectory and growth. Multidisciplinary. AI. Tooling. Infrastructure.`,
    socials: {
        github: "https://github.com/avianage",
        linkedin: "https://linkedin.com/in/aakash-joshi-cs/",
        twitter: "https://twitter.com",
        email: "mailto:aakash.joshi.cs@gmail.com",
    },
};

export const PROJECTS = [
    {
        id: "zenkraft",
        title: "ZenKraft - AI Yoga Assistant",
        year: "2024 - 2025",
        description: "Intelligent yoga platform recommending customized courses with real-time pose correction.",
        tags: ["AI", "Python", "OpenCV", "MediaPipe", "MERN"],
        challenge: "Real-time pose estimation and feedback latency minimization.",
        featured: true,
        github: "https://github.com/avianage/zenkraft",
        image: "/projects/zenkraft.png",
        details: {
            overview: "An AI-powered yoga assistant that provides real-time feedback on posture using computer vision. It features a complete frontend interface for course management and user progress tracking.",
            architecture: "Hybrid architecture using a React/Node.js web stack for the application layer and a Python/OpenCV microservice for frame-by-frame pose analysis using MediaPipe.",
            keyDecisions: "Utilized MediaPipe's lightweight model for edge-compatible inference instead of heavy server-side processing, ensuring privacy and low latency.",
            learnings: "Mastered the integration of real-time computer vision streams with modern web frameworks and separating inference logic from application state."
        }
    },
    {
        id: "echodeck",
        title: "EchoDeck - Collaborative Streaming",
        year: "2025",
        description: "Real-time collaborative music streaming SaaS where users queue and vote on songs.",
        tags: ["SaaS", "Next.js", "Prisma", "PostgreSQL", "WebSockets"],
        challenge: "Synchronizing playback state across multiple clients in real-time.",
        featured: true,
        github: "https://github.com/avianage/echodeck",
        image: "/projects/echodeck.png",
        details: {
            overview: "A collaborative music platform allowing streamers to host parties where audiences can interact, upvote/downvote, and influence the playlist live.",
            architecture: "Built on Next.js 14 with a PostgreSQL/Prisma backend. Uses polling/WebSockets for state synchronization between the host and listeners.",
            keyDecisions: "Implemented optimistic UI updates to mask network latency during voting actions, creating a snappy user experience.",
            learnings: "Deepened knowledge of state management in distributed client sessions and handling race conditions in playlist mutations."
        }
    },
    {
        id: "energy-forecast",
        title: "Renewable Energy Forecasting",
        year: "2024",
        description: "Forecasted electricity demand using Random Forest and XGBoost with high accuracy (R² = 0.987).",
        tags: ["ML", "Python", "Scikit-learn", "Pandas"],
        challenge: "Feature engineering for high-variance time-series data.",
        featured: true,
        github: "https://github.com/avianage/energy-forecast",
        image: "/projects/energy-forecast.png",
        details: {
            overview: "A machine learning project to predict electricity demand based on historical energy data, comparing multiple models for optimal performance.",
            architecture: "Standard data science pipeline: Data preprocessing with Pandas, feature selection, and training/evaluation of Random Forest vs XGBoost models.",
            keyDecisions: "Prioritized Random Forest after benchmarking showed it handled the dataset's specific non-linearities better than XGBoost (RMSE 504).",
            learnings: "Gained significant insight into Time Series Analysis and the trade-offs between model complexity and inference accuracy."
        }
    },
    {
        id: "algo_visualizer",
        title: "Sorting Visualizer",
        year: "2023",
        description: "Interactive web app visualizing classic sorting algorithms with adjustable speed and data size.",
        tags: ["React", "Algorithms", "Education"],
        challenge: "Visualizing asynchronous state updates during rapid array manipulations.",
        featured: false,
        github: "https://github.com/avianage/sorting-visualizer",
        image: "/projects/sorting-visualizer.png",
        details: {
            overview: "A clean and intuitive tool to help students understand sorting algorithms like Merge Sort, Quick Sort, and Bubble Sort through animation.",
            architecture: "React-based frontend using local component state to drive animations. CSS transitions handling smooth bar movements.",
            keyDecisions: "Used generator functions to pause execution flow, allowing for step-by-step visualization without blocking the main thread.",
            learnings: "Improved understanding of asynchronous JavaScript and React's rendering lifecycle when handling rapid state changes."
        }
    },
    {
        id: "task_cli",
        title: "Rust Task CLI",
        year: "2023",
        description: "A lightning-fast command line todo list manager written in Rust.",
        tags: ["Rust", "CLI", "Systems"],
        challenge: "Managing file I/O safely and efficiently in a systems language.",
        featured: false,
        github: "https://github.com/avianage/rust-task-cli",
        image: "/projects/task-cli.png",
        details: {
            overview: "A simple, no-nonsense CLI tool for managing daily tasks. Supports prioritization, due dates, and persistent local storage.",
            architecture: "Pure Rust using Serde for JSON serialization/deserialization of the task list.",
            keyDecisions: "Chose a flat JSON file for storage over SQLite for portability and simplicity of manual editing if needed.",
            learnings: "First deep dive into Rust's ownership model and error handling patterns."
        }
    },
    {
        id: "portfolio_v1",
        title: "Legacy Portfolio",
        year: "2022",
        description: "First iteration of my personal portfolio built with HTML, SCSS and Vanilla JS.",
        tags: ["HTML/CSS", "JavaScript", "Design"],
        challenge: "Implementing responsive design without modern frameworks.",
        featured: false,
        github: "https://github.com/avianage/portfolio-v1",
        image: "/projects/portfolio-v1.png",
        details: {
            overview: "The humble beginnings of my web development journey. A static site showcasing early projects.",
            architecture: "Static HTML/CSS served via GitHub Pages.",
            keyDecisions: "Focused heavily on raw CSS flexbox and grid to build a solid foundation before moving to frameworks.",
            learnings: "Solidified core web fundamentals, specifically the box model, semantic HTML, and DOM manipulation."
        }
    }
];

export const EXPERIENCE = [
    {
        role: "Machine Learning Intern",
        company: "Tata Consulting Engineers Ltd.",
        year: "Dec 2023 - Jan 2024",
        logo: "/logos/tce.png",
        description: "Predictive maintenance project for industrial motors using Time Series Analysis and Random Forest."
    },
    {
        role: "Web Development Intern",
        company: "TechEntrepreneurs",
        year: "Feb 2023 - Jul 2023",
        logo: "/logos/techentre.png",
        description: "Developed a job portal interface with PHP/MySQL, implementing user login and database-backed attributes."
    }
];

export const EDUCATION = [
    {
        degree: "B.E. in Computer Engineering",
        institution: "Pune University",
        year: "2021 - 2025",
        achievements: ["CGPA: 7.36", "Class Representative"]
    },
    {
        degree: "B.C.A. (Distance)",
        institution: "AMITY University",
        year: "2021 - 2024",
        achievements: []
    },
    {
        degree: "Higher Secondary Certification",
        institution: "Royal Jr. College",
        year: "2019 - 2021",
        achievements: ["84% in HSC"]
    },
    {
        degree: "Secondary School Certification",
        institution: "Vidya Niketan School",
        year: "- 2019",
        achievements: ["83% in SSC"]
    }
];

export const CERTIFICATIONS = [
    {
        title: "Git Training",
        issuer: "Spoken Tutorial, IIT Bombay",
        year: "2024",
        link: "#",
        domain: "Tools",
        image: "/certs/git-iitb.png",
        score: "73.33%"
    },
    {
        title: "Intro to AI Ethics",
        issuer: "Kaggle",
        year: "2023",
        link: "https://www.kaggle.com/learn/certification/avianage/intro-to-ai-ethics",
        domain: "AI/ML",
        image: "/certs/intro_ai.png"
    },
    {
        title: "Intro to Machine Learning",
        issuer: "Kaggle",
        year: "2023",
        link: "https://www.kaggle.com/learn/certification/avianage/intro-to-machine-learning",
        domain: "AI/ML",
        image: "/certs/intro_ml.png"
    },
    {
        title: "Intro to Artificial Intelligence",
        issuer: "IBM via Coursera",
        year: "2024",
        link: "https://coursera.org/share/36c15ecc77fc7de2d33de5b75d193951",
        domain: "AI/ML",
        image: "/certs/ibm-ai.png"
    },
    {
        title: "Intro to Programming",
        issuer: "Kaggle",
        year: "2023",
        link: "https://www.kaggle.com/learn/certification/avianage/intro-to-programming",
        domain: "Fundamentals",
        image: "/certs/intro_prog.png"
    },
    {
        title: "Linux",
        issuer: "Spoken Tutorial, IIT Bombay",
        year: "2025",
        link: "#",
        domain: "Fundamentals",
        image: "/certs/linux.png",
        score: "76.67%"
    },
    {
        title: "Python",
        issuer: "Kaggle",
        year: "2023",
        link: "https://www.kaggle.com/learn/certification/avianage/python",
        domain: "Fundamentals",
        image: "/certs/python.png"
    }
];

export const LEADERSHIP = [
    {
        organization: "Class Representative, Computer Engineering Department",
        period: "2021 – July 2025",
        roles: [
            {
                title: "Class Representative",
                description: "Served as a liaison between students and faculty, organized meetings, and addressed student concerns. Ensured smooth communication and assisted with departmental matters."
            }
        ],
        images: ["/leadership/pvg.jpg"]
    },
    {
        organization: "Association of Computer Engineering Students (ACES)",
        period: "Aug. 2022 – July 2025",
        roles: [
            {
                title: "Web Team Lead",
                period: "Aug. 2024 – July 2025",
                description: "Led the team in building and maintaining ACES websites and event platforms, enhancing leadership and technical communication skills; Organized a 24-hour offline Hackathon ensuring smooth execution and participant engagement."
            },
            {
                title: "Web Team Member",
                period: "Aug. 2023 – Aug. 2024",
                description: "Contributed to development of the ACES’s website."
            },
            {
                title: "Technical Team Member",
                period: "Aug. 2022 – Aug. 2023",
                description: "Assisted with technical support for departmental events, further developing problem-solving skills."
            }
        ],
        images: ["/leadership/aces.png"]
    },
    {
        organization: "TEDxPVGCOET",
        period: "Oct. 2023 – Feb. 2024",
        roles: [
            {
                title: "Curation Team Member",
                description: "Involved in speaker curation and event planning, contributing to the success of a TEDx event; enhanced communication and coordination skills."
            }
        ],
        images: ["/leadership/tedx.jpg"]
    },
    {
        organization: "Music Club",
        period: "2021 – July 2025",
        roles: [
            {
                title: "Keyboardist",
                description: "Active member of the music club, performing at various cultural and formal college events, including those attended by committees like NAAC and NEP."
            },
            {
                title: "Creative Work",
                description: "You can view my creative music performances and covers on my YouTube channel: Avianage",
                link: "https://www.youtube.com/@avianage2570"
            }
        ],
        images: ["/leadership/naac.jpeg"]
    }
];

export const ACHIEVEMENTS = [
    {
        title: "Volunteer at Nail Free Trees",
        description: "Volunteered with Nail Free Trees, an NGO promoting eco-friendly campaigns.",
    },
    {
        title: "Organizing Committee Member",
        description: "Part of the Organizing Committee which organized a national-level event on Universal Human Values, bringing together participants from across India.",
    }
];


