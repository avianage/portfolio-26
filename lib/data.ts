export const SKILLS = [
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "Java", "SQL"] },
    { category: "Frameworks", items: ["React", "Next.js", "Node.js", "Express", "Flask", "Angular", "Spring Boot"] },
    { category: "AI / ML", items: ["scikit-learn", "TensorFlow", "SpaCy", "Pandas", "XGBoost", "OpenCV", "MediaPipe"] },
    { category: "DevOps & Infra", items: ["Docker", "Kubernetes", "Proxmox", "Linux", "CI/CD", "Tailscale"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "SQLite"] },
    { category: "Tools", items: ["Git", "GitHub", "LaTeX", "GIMP", "WebSockets", "REST APIs"] },
];

export const PROFILE = {
    name: "Aakash Joshi",
    role: "Python Developer | AI Engineering | Building Scalable Systems",
    resume: "/resume",
    resumeLink: "/resume/resume.jpg?v=3"
};

export const ABOUT = {
    label: "01. PHILOSOPHY",
    title: {
        faded: "I approach engineering with a ",
        highlight: "systems-first mindset."
    },
    description: [
        {
            paragraphs: [
                "**Computer Engineer** skilled in **software development**, **machine learning**, and **web technologies**. Experienced in **full-stack** application development with expertise in ^^Python, C++, and JavaScript^^.",
                "My work isn't just about writing code, it's about understanding the **entire stack**, from hardware constraints to user experience, ensuring **reliability** at every layer."
            ]
        },
        {
            paragraphs: [
                "Driven by **trajectory and growth**. **Multidisciplinary**. ^^AI. DevOps. Infrastructure.^^",
                "Whether it's optimizing data pipelines or designing intuitive developer tools, I focus on creating value through **precision and performance**."
            ]
        }
    ]
};

export const FOCUS_AREAS = [
    {
        title: "AI",
        description: "Integrating intelligence into applications.",
        color: "text-purple-300"
    },
    {
        title: "DevOps",
        description: "Streamlining delivery and operations.",
        color: "text-blue-300"
    },
    {
        title: "Infrastructure",
        description: "Scalable, resilient foundation engineering.",
        color: "text-cyan-300"
    }
];

export const SOCIALS = [
    {
        id: "github",
        name: "GitHub",
        url: "https://github.com/avianage",
        featured: true
    },
    {
        id: "linkedin",
        name: "LinkedIn",
        url: "https://linkedin.com/in/aakash-joshi-cs/",
        featured: true
    },
    {
        id: "email",
        name: "Email",
        url: "mailto:aakash.joshi.cs@gmail.com",
        featured: true
    },
    {
        id: "leetcode",
        name: "LeetCode",
        url: "https://leetcode.com/avianage",
        featured: true
    },
    {
        id: "instagram",
        name: "Instagram",
        url: "https://instagram.com/aakashxjoshi",
        featured: false
    }
];

export const PROJECTS = [
    {
        id: "homelab",
        title: "Personal Homelab & Networking",
        year: "2023 - Present",
        description: "A dual-server infrastructure hosting private services, media, and development environments securely via Tailscale.",
        tags: ["Proxmox", "Docker", "Tailscale", "NAS", "Self-Hosted"],
        challenge: "Orchestrating services across multiple hardware nodes while maintaining secure remote access.",
        featured: true,
        github: "#",
        image: "/projects/homelab.png",
        details: {
            overview: "Built a robust homelab using an old laptop (Proxmox hypervisor) and a dedicated server. Hosts a reverse proxy, password manager, NAS, media server (Jellyfin/Arr stack), and local LLMs.",
            architecture: "Distributed system with containerized services on Proxmox and bare-metal NAS. Unified mesh network using Tailscale for end-to-end encrypted communication.",
            keyDecisions: "Adopted Proxmox for flexible resource allocation and Docker for service isolation. Leveraged Tailscale to avoid port forwarding and expose services securely.",
            learnings: "Deepened expertise in Linux server administration, network security, virtualization, and infrastructure-as-code principles."
        }
    },
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
        github: "https://github.com/avianage/renewable-energy-demand-forcasting",
        image: "/projects/energy-forecast.png",
        details: {
            overview: "A machine learning project to predict electricity demand based on historical energy data, comparing multiple models for optimal performance.",
            architecture: "Standard data science pipeline: Data preprocessing with Pandas, feature selection, and training/evaluation of Random Forest vs XGBoost models.",
            keyDecisions: "Prioritized Random Forest after benchmarking showed it handled the dataset's specific non-linearities better than XGBoost (RMSE 504).",
            learnings: "Gained significant insight into Time Series Analysis and the trade-offs between model complexity and inference accuracy."
        }
    },
    {
        id: "sentiment-analysis",
        title: "Sentimental Analysis",
        year: "2024",
        description: "AI model to analyze textual data and accurately classify emotions using Neural Networks.",
        tags: ["Naive Bayes", "Python", "ML", "NLP"],
        challenge: "Accurately classifying subtle emotional nuances in text.",
        featured: false,
        github: "https://github.com/avianage/emotion-detection-classifier",
        image: "/projects/sentimental-analysis.png",
        details: {
            overview: "Built an AI model to analyze textual data and accurately classify emotions such as sadness, joy, love, anger, fear, and surprise.",
            architecture: "Leveraged SpaCy for tokenization/preprocessing and TF-IDF for feature extraction. Trained a Multinomial Naïve Bayes classifier.",
            keyDecisions: "Used Multinomial Naïve Bayes for its efficiency with high-dimensional text data. Achieved 85% accuracy.",
            learnings: "Deepened understanding of NLP pipelines, text preprocessing, and evaluating classification models with precision/recall."
        }
    },
    {
        id: "movie-recommender",
        title: "Movie Recommender",
        year: "2023",
        description: "Content-based movie recommendation system using the TMDB 5000 dataset.",
        tags: ["ML", "Flask", "Python"],
        challenge: "Handling large datasets and generating relevant recommendations efficiently.",
        featured: false,
        github: "https://github.com/avianage/movie-recommender-system",
        image: "/projects/movie-recommender.png",
        details: {
            overview: "This system harnesses the power of the TMDB 5000 dataset to offer movie recommendations, detailed movie information, and an enjoyable movie discovery experience.",
            architecture: "Python-based recommendation logic using cosine similarity on movie features. Served via a Flask web application.",
            keyDecisions: "Implemented content-based filtering to provide recommendations based on movie metadata (genres, keywords, cast) rather than user history.",
            learnings: "Gained practical experience in building recommendation engines, vectorizing text data, and deploying ML models with Flask."
        }
    }
];

export const EXPERIENCE = [
    {
        role: "Associate Systems Engineer",
        company: "IBM India",
        year: "May 2026 - Present",
        logo: "/logos/IBM.png",
        points: [
            "Completed IBM's 7-week Cloud Full Stack Developer training track covering Core Java, Spring Boot, Microservices, Docker, Kubernetes, CI/CD with Jenkins, Angular, React, Node.js, MongoDB, and SQL, applied across hands-on project builds.",
            "Currently working on BFSI-domain systems"
        ]
    },
    {
        role: "Full Stack Developer Intern",
        company: "Averlon Enterprise Solutions Private Limited",
        year: "March 2026 - May 2026",
        logo: "/logos/averlon.png",
        points: [
            "Building a multi-tenant SaaS Billing Management System from scratch using Node.js, Express, React (Vite), and PostgreSQL.",
            "Designed normalized relational schema supporting tenant isolation, subscription plans, and invoice lifecycle management.",
            "Developed RESTful APIs for billing operations including plan management, usage tracking, and payment workflows."
        ]
    },
    {
        role: "Machine Learning Intern",
        company: "Tata Consulting Engineers Ltd.",
        year: "Dec 2023 - Jan 2024",
        logo: "/logos/tce.png",
        points: [
            "Developed predictive maintenance models using Python, Pandas, and scikit-learn on industrial datasets.",
            "Applied feature engineering and exploratory modeling to improve system efficiency and reliability.",
            "Collaborated on scalable data pipelines, ensuring clean and structured data flow for analytics."
        ]
    },
    {
        role: "Web Development Intern",
        company: "TechEntrepreneurs",
        year: "Feb 2023 - Apr 2023",
        logo: "/logos/techentre.png",
        points: [
            "Developed and enhanced frontend features for a job portal using HTML, CSS, JavaScript, and PHP.",
            "Implemented dynamic user interfaces for job listings, authentication forms, and profile management.",
            "Participated in team development workflow using Git and version control practices."
        ]
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
        achievements: ["Second Division"]
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
        year: "2018 - 2019",
        achievements: ["83% in SSC"]
    }
];

export const CERTIFICATIONS = [

    // --- Technical Certifications ---

    // Anthropic
    {
        title: "Claude Partner Badge - Claude Code",
        issuer: "Anthropic",
        year: "2026",
        month: "August",
        expiryMonth: "February",
        expiryYear: "2027",
        link: "https://www.credly.com/badges/3566fde6-99a4-4718-94f2-23fa8f28f284/public_url",
        domain: "Agentic AI",
        platform: "Anthropic",
        category: "Technical",
        image: "/certs/tech/anthropic/anthropic-claude-partner-badge-claude-code.png",
        score: ""
    },
    {
        title: "Claude Code 101",
        issuer: "Anthropic",
        year: "2026",
        month: "",
        expiryMonth: "",
        expiryYear: "",
        link: "https://verify.skilljar.com/c/4m6mwoiwdcq6",
        domain: "Claude Code",
        platform: "Anthropic",
        category: "Technical",
        image: "/certs/tech/anthropic/anthropic-claude-code-101.jpg",
        score: ""
    },
    {
        title: "Claude Code in Action",
        issuer: "Anthropic",
        year: "2026",
        month: "",
        expiryMonth: "",
        expiryYear: "",
        link: "https://verify.skilljar.com/c/4bmudqedt46n",
        domain: "Claude Code",
        platform: "Anthropic",
        category: "Technical",
        image: "/certs/tech/anthropic/anthropic-claude-code-in-action.jpg",
        score: ""
    },

    // Coursera
    {
        title: "Intro to Artificial Intelligence",
        issuer: "IBM via Coursera",
        year: "2023",
        month: "October",
        expiryMonth: "",
        expiryYear: "",
        link: "https://coursera.org/share/36c15ecc77fc7de2d33de5b75d193951",
        domain: "AI/ML",
        platform: "Coursera",
        category: "Technical",
        image: "/certs/tech/coursera/coursera-ibm-ai.png"
    },

    // IBM Learning
    {
        title: "IBM - Core Training 2026",
        issuer: "IBM",
        year: "2026",
        month: "June",
        expiryMonth: "",
        expiryYear: "",
        link: "",
        domain: "Fundamentals",
        platform: "IBM",
        category: "Technical",
        image: "/certs/tech/ibm/ibm-core-training.jpg",
        score: ""
    },
    {
        title: "IBM - Role Based Cyber Security Training",
        issuer: "IBM Learning",
        year: "2026",
        month: "June",
        expiryMonth: "",
        expiryYear: "",
        link: "",
        domain: "Cyber Security",
        platform: "IBM",
        category: "Technical",
        image: "/certs/tech/ibm/ibm-cybersec-training.jpg",
        score: ""
    },
    {
        title: "IBM - Enterprise Design Thinking Practitioner",
        issuer: "IBM Learning",
        year: "2026",
        month: "June",
        expiryMonth: "",
        expiryYear: "",
        link: "https://www.credly.com/badges/306a82b9-ea9e-4836-9c25-e086563929ff/public_url",
        domain: "Design Thinking",
        platform: "IBM",
        category: "Technical",
        image: "/certs/tech/ibm/ibm-enterprise-design-thinking.jpg",
        score: ""
    },
    {
        title: "IBM - Garage Essentials",
        issuer: "IBM Learning",
        year: "2026",
        month: "June",
        expiryMonth: "",
        expiryYear: "",
        link: "https://www.credly.com/badges/daf75f51-c19f-4873-88bd-42e7529a1581/public_url",
        domain: "Design Thinking",
        platform: "IBM",
        category: "Technical",
        image: "/certs/tech/ibm/ibm-garage-essentials.jpg",
        score: ""
    },
    {
        title: "IBM - Generative & Agentic AI Foundation",
        issuer: "IBM Learning",
        year: "2026",
        month: "June",
        expiryMonth: "June",
        expiryYear: "2027",
        link: "https://www.credly.com/badges/6b4dc63a-443d-4986-ad98-d2336d0769b1/public_url",
        domain: "Generative AI",
        platform: "IBM",
        category: "Technical",
        image: "/certs/tech/ibm/ibm-gen-ai-agentic-ai-foundation.jpg",
        score: ""
    },
    {
        title: "IBM - Intro to Agentic AI",
        issuer: "IBM Learning",
        year: "2026",
        month: "June",
        expiryMonth: "",
        expiryYear: "",
        link: "",
        domain: "Agentic AI",
        platform: "IBM",
        category: "Technical",
        image: "/certs/tech/ibm/ibm-intro-to-agentic-ai.jpg",
        score: ""
    },

    // Kaggle
    {
        title: "Intro to Programming",
        issuer: "Kaggle",
        year: "2023",
        month: "August",
        expiryMonth: "",
        expiryYear: "",
        link: "https://www.kaggle.com/learn/certification/avianage/intro-to-programming",
        domain: "Fundamentals",
        platform: "Kaggle",
        category: "Technical",
        image: "/certs/tech/kaggle/kaggle-intro-prog.png"
    },
    {
        title: "Python Programming",
        issuer: "Kaggle",
        year: "2023",
        month: "March",
        expiryMonth: "",
        expiryYear: "",
        link: "https://www.kaggle.com/learn/certification/avianage/python",
        domain: "Fundamentals",
        platform: "Kaggle",
        category: "Technical",
        image: "/certs/tech/kaggle/kaggle-python.png"
    },
    {
        title: "Intro to AI Ethics",
        issuer: "Kaggle",
        year: "2023",
        month: "December",
        expiryMonth: "",
        expiryYear: "",
        link: "https://www.kaggle.com/learn/certification/avianage/intro-to-ai-ethics",
        domain: "AI/ML",
        platform: "Kaggle",
        category: "Technical",
        image: "/certs/tech/kaggle/kaggle-intro-ai-ethics.png"
    },
    {
        title: "Intro to Machine Learning",
        issuer: "Kaggle",
        year: "2023",
        month: "September",
        expiryMonth: "",
        expiryYear: "",
        link: "https://www.kaggle.com/learn/certification/avianage/intro-to-machine-learning",
        domain: "AI/ML",
        platform: "Kaggle",
        category: "Technical",
        image: "/certs/tech/kaggle/kaggle-intro-ml.png"
    },

    // NPTEL
    {
        title: "Introduction to Machine Learning",
        issuer: "NPTEL Online Certification",
        year: "2024",
        month: "September",
        expiryMonth: "",
        expiryYear: "",
        link: "#",
        domain: "AI/ML",
        platform: "NPTEL",
        category: "Technical",
        image: "/certs/tech/nptel/nptel-intro-ml.png",
        score: "76%"
    },

    // NVIDIA
    {
        title: "Fundamentals of Deep Learning",
        issuer: "NVIDIA Deep Learning Institute",
        year: "2022",
        month: "September",
        expiryMonth: "",
        expiryYear: "",
        link: "#",
        domain: "DL",
        platform: "NVIDIA",
        category: "Technical",
        image: "/certs/tech/nvidia/nvidia-fdl.jpg"
    },

    // OpenAI
    {
        title: "OpenAI Foundational Knowledge",
        issuer: "OpenAI",
        year: "2026",
        month: "August",
        expiryMonth: "August",
        expiryYear: "2027",
        link: "",
        domain: "AI",
        platform: "OpenAI",
        category: "Technical",
        image: "/certs/tech/openai/openai-foundational-knowledge.jpg",
        score: ""
    },
    {
        title: "API Deployment Practitioner",
        issuer: "OpenAI",
        year: "2026",
        month: "September",
        expiryMonth: "September",
        expiryYear: "2027",
        link: "",
        domain: "AI",
        platform: "OpenAI",
        category: "Technical",
        image: "/certs/tech/openai/openai-api-deployment-practitioner.jpg",
        score: ""
    },
    {
        title: "Codex Deployment Practitioner",
        issuer: "OpenAI",
        year: "2026",
        month: "September",
        expiryMonth: "September",
        expiryYear: "2027",
        link: "",
        domain: "AI",
        platform: "OpenAI",
        category: "Technical",
        image: "/certs/tech/openai/openai-codex-deployment.jpg",
        score: ""
    },
    {
        title: "OpenAI Consultative Solutions Practitioner",
        issuer: "OpenAI",
        year: "2026",
        month: "September",
        expiryMonth: "September",
        expiryYear: "2027",
        link: "",
        domain: "AI",
        platform: "OpenAI",
        category: "Technical",
        image: "/certs/tech/openai/openai-consultative-solutions-practitioner.jpg",
        score: ""
    },
    {
        title: "OpenAI Cyber Deployment Practitioner",
        issuer: "OpenAI",
        year: "2026",
        month: "September",
        expiryMonth: "September",
        expiryYear: "2027",
        link: "",
        domain: "AI",
        platform: "OpenAI",
        category: "Technical",
        image: "/certs/tech/openai/openai-cyber-deployment.jpg",
        score: ""
    },
    {
        title: "OpenAI Technical Practitioner",
        issuer: "OpenAI",
        year: "2026",
        month: "August",
        expiryMonth: "August",
        expiryYear: "2027",
        link: "",
        domain: "AI",
        platform: "OpenAI",
        category: "Technical",
        image: "/certs/tech/openai/openai-technical-practitioner.jpg",
        score: ""
    },

    // Spoken Tutorial, IIT Bombay
    {
        title: "Git Training",
        issuer: "Spoken Tutorial, IIT Bombay",
        year: "2024",
        month: "October",
        expiryMonth: "",
        expiryYear: "",
        link: "#",
        domain: "Tools",
        platform: "Spoken Tutorial",
        category: "Technical",
        image: "/certs/tech/spoken-tutorial/st-git-iitb.png",
        score: "73.33%"
    },
    {
        title: "GIMP Training",
        issuer: "Spoken Tutorial, IIT Bombay",
        year: "2022",
        month: "June",
        expiryMonth: "",
        expiryYear: "",
        link: "#",
        domain: "Tools",
        platform: "Spoken Tutorial",
        category: "Technical",
        image: "/certs/tech/spoken-tutorial/st-gimp-iitb.jpg"
    },
    {
        title: "Linux Training",
        issuer: "Spoken Tutorial, IIT Bombay",
        year: "2025",
        month: "April",
        expiryMonth: "",
        expiryYear: "",
        link: "#",
        domain: "Fundamentals",
        platform: "Spoken Tutorial",
        category: "Technical",
        image: "/certs/tech/spoken-tutorial/st-linux-iitb.png",
        score: "76.67%"
    },
    {
        title: "LaTeX Training",
        issuer: "Spoken Tutorial",
        year: "2023",
        month: "November",
        expiryMonth: "",
        expiryYear: "",
        link: "#",
        domain: "Tools",
        platform: "Spoken Tutorial",
        category: "Technical",
        image: "/certs/tech/spoken-tutorial/st-latex-iitb.jpg",
        score: "73.33%"
    },

    // Udemy
    {
        title: "Business Etiquette - The Polished Professinal",
        issuer: "Udemy",
        year: "2026",
        month: "June",
        expiryMonth: "",
        expiryYear: "",
        link: "https://www.udemy.com/certificate/UC-9fcacc1e-564c-474d-bb21-0877a83074d2/",
        domain: "Soft Skills",
        platform: "Udemy",
        category: "Technical",
        image: "/certs/tech/udemy/udemy-business-etiquette.jpg",
        score: ""
    },
    {
        title: "Playwright JS/TS Automation Testing from Scratch & Framework",
        issuer: "Udemy",
        year: "2026",
        month: "September",
        expiryMonth: "",
        expiryYear: "",
        link: "https://www.udemy.com/certificate/UC-ec08490a-a4a6-49ed-a038-69255556a99e/",
        domain: "Automation Testing",
        platform: "Udemy",
        category: "Technical",
        image: "/certs/tech/udemy/udemy-playwright-automation-testing.jpg",
        score: ""
    },

    // Others
    {
        title: "Cyber Security and Ethical Hacking",
        issuer: "Institute for Design of Electrical Measuring Instruments",
        year: "2021",
        month: "August",
        expiryMonth: "",
        expiryYear: "",
        link: "#",
        domain: "Cyber Security",
        platform: "Others",
        category: "Technical",
        image: "/certs/tech/others/cs-eh.jpg"
    },

    // --- Domain / industry certifications ---

    // Insurance Industry
    {
        title: "Insurance Industry Fundamentals from Primerli",
        issuer: "Primerli",
        year: "2026",
        month: "August",
        expiryMonth: "",
        expiryYear: "",
        link: "#",
        domain: "Insurance",
        platform: "IBM Learning",
        category: "Domain",
        image: "/certs/domain/insurance/primerli-insurance-industry-fundamentals.jpg",
        score: ""
    }
];

export const LEADERSHIP = [
    {
        organization: "Class Representative, Computer Engineering Department",
        period: "2021 – 2025",
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


