import type { Project } from "@/lib/types";

export const roles = [
  "Python & AI Developer",
  "Backend Developer",
  "RAG Systems Engineer",
  "AI Automation Developer",
  "Generative AI Developer"
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/contact" }
];

export const valueCards = [
  {
    title: "AI Systems",
    code: "01 / INTELLIGENCE",
    text: "Building LLM-powered applications, RAG pipelines, intelligent chatbots, prompt workflows and AI analysis tools."
  },
  {
    title: "Backend Engineering",
    code: "02 / INFRASTRUCTURE",
    text: "Designing modular FastAPI and Node.js services, secure APIs, background tasks, authentication workflows and scalable data architectures."
  },
  {
    title: "Automation",
    code: "03 / ORCHESTRATION",
    text: "Creating systems that reduce repetitive work through email automation, web scraping, scheduled processes and API integrations."
  }
];

export const skillGroups = [
  {
    title: "Programming & Frontend",
    code: "PF",
    skills: ["Python", "JavaScript", "C", "HTML", "CSS", "React", "Next.js"]
  },
  {
    title: "Backend & APIs",
    code: "API",
    skills: [
      "FastAPI",
      "Node.js",
      "Express",
      "RESTful APIs",
      "API Integration",
      "OAuth 2.0",
      "Token Authorization",
      "Background Tasks"
    ]
  },
  {
    title: "AI & Machine Learning",
    code: "AI",
    skills: [
      "Generative AI",
      "LLM Integration",
      "RAG",
      "Prompt Engineering",
      "LangGraph",
      "Dialogflow",
      "NLP",
      "Machine Learning",
      "Computer Vision",
      "Deep Learning",
      "Feature Engineering",
      "Model Evaluation"
    ]
  },
  {
    title: "Databases & Storage",
    code: "DB",
    skills: ["Supabase", "MongoDB", "SQL", "FAISS", "Vector Databases", "Data Modeling"]
  },
  {
    title: "Libraries",
    code: "LIB",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Keras", "OpenCV", "Puppeteer"]
  },
  {
    title: "Tools & Platforms",
    code: "OPS",
    skills: ["Git", "GitHub", "Docker", "Postman", "Swagger UI", "VS Code", "Headless Browser Automation"]
  },
  {
    title: "Architecture",
    code: "ARC",
    skills: ["Modular Architecture", "Scalable System Design", "Configuration-Driven Development", "Service-Oriented Architecture"]
  }
];

export const experiences = [
  {
    role: "Python & AI Developer",
    company: "BrandingBeez, Coimbatore",
    period: "2025 - Present",
    current: true,
    bullets: [
      "Built a production AI web-analysis platform that automates website scraping, keyword extraction and SEO report generation using LLM integration, FastAPI and Node.js.",
      "Deployed a RAG-based AI chatbot using FastAPI, OpenAI API and FAISS with intent classification, brand-tone enforcement and real-time fallback handling.",
      "Built a Gmail automation system using OAuth 2.0 with automated unsubscribe processing, background-task execution and Swagger UI documentation.",
      "Developed an AI-powered web scraper and article summarizer that stores structured information in Supabase and displays the content through an HTML/CSS frontend."
    ]
  },
  {
    role: "Data Analytics, Artificial Intelligence and Machine Learning Intern",
    company: "Novitech R&D Pvt. Ltd",
    period: "2022 - 2024",
    bullets: [
      "Completed three focused internships covering data analytics, artificial intelligence and machine learning, gaining experience in model building, feature engineering and data pipelines."
    ]
  },
  {
    role: "IoT Intern",
    company: "Iyarkai Tech Lab Pvt. Ltd, Chennai",
    period: "2023",
    bullets: ["Worked on IoT-based embedded systems and sensor-integration projects."]
  },
  {
    role: "Business Analyst Intern",
    company: "Sakthi Veera Green Energy Pvt. Ltd, Chennai",
    period: "2023",
    bullets: [
      "Analysed business processes related to freeze-drying machinery operations and delivered structured reports."
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "ai-web-analysis-system",
    title: "AI-Based Automated Web Analysis System",
    value: "Transforms websites into structured AI-assisted SEO analysis.",
    description:
      "Developed and deployed a production-grade AI web-analysis platform that automates website scraping, keyword extraction and structured SEO report generation using LLM integration and modular backend services.",
    technologies: ["Python", "FastAPI", "Node.js", "REST APIs", "LLM Integration", "Headless Browser Automation"],
    categories: ["Production AI", "Backend"],
    liveUrl: "https://brandingbeez.co.uk",
    liveLabel: "Visit Website",
    featured: true,
    visual: "/projects/web-analysis.svg",
    flow: ["Website", "Crawler", "Keyword Engine", "LLM Analysis", "Structured Report"],
    caseStudy: {
      challenge:
        "Website analysis often requires repetitive crawling, content extraction, keyword review and manual report preparation. The goal was to connect those steps into one reliable production workflow.",
      architecture: [
        "A browser-automation layer collects page content and metadata.",
        "Backend services normalize extracted data before AI processing.",
        "LLM prompts convert raw findings into structured report sections.",
        "REST endpoints coordinate analysis, report generation and delivery."
      ],
      workflow: [
        "Receive and validate a target website URL.",
        "Crawl permitted pages and extract meaningful content.",
        "Identify keywords, technical signals and page-level context.",
        "Send normalized evidence to the AI analysis layer.",
        "Return a structured report through the application interface."
      ],
      responsibilities: [
        "Designed modular FastAPI and Node.js service boundaries.",
        "Implemented web scraping and headless browser workflows.",
        "Integrated LLM processing with structured response validation.",
        "Connected API responses to report-generation workflows."
      ],
      decisions: [
        "Separated crawling from AI generation to make failures easier to isolate.",
        "Used configuration-driven limits for crawl depth and page counts.",
        "Kept report outputs structured instead of relying on free-form model text.",
        "Designed fallbacks so partial data could still produce a useful response."
      ],
      outcome:
        "The resulting platform provides a practical end-to-end workflow for collecting website evidence and turning it into organized AI-assisted analysis without relying on unsupported performance claims."
    }
  },
  {
    slug: "hybrid-rag-chatbot",
    title: "Hybrid AI Chatbot with RAG Architecture",
    value: "Grounds AI conversations in retrieved business knowledge.",
    description:
      "Designed and deployed a production RAG chatbot using FastAPI, OpenAI APIs and FAISS, with intent classification, brand-tone enforcement and fallback handling.",
    technologies: ["Python", "FastAPI", "OpenAI API", "FAISS", "RAG", "REST APIs"],
    categories: ["Production AI", "Backend"],
    liveUrl: "https://acgraphics.com",
    liveLabel: "Visit Website",
    featured: true,
    visual: "/projects/rag-chatbot.svg",
    flow: ["Question", "Intent Classification", "Retrieval", "Context", "LLM", "Brand-Safe Response"],
    caseStudy: {
      challenge:
        "A useful business chatbot needs to answer from relevant company information, preserve tone and handle questions that fall outside the available knowledge base.",
      architecture: [
        "FastAPI receives messages and validates request structure.",
        "Intent classification routes each message through the correct path.",
        "FAISS retrieves semantically related knowledge chunks.",
        "The LLM receives retrieved context and brand-response instructions.",
        "Fallback logic handles missing or low-confidence context."
      ],
      workflow: [
        "Accept a user question.",
        "Classify the intent and determine whether retrieval is required.",
        "Search the vector index for relevant context.",
        "Build a grounded prompt with tone and safety constraints.",
        "Generate and return a brand-aligned response."
      ],
      responsibilities: [
        "Implemented the FastAPI chatbot endpoints.",
        "Prepared knowledge chunks and FAISS indexing workflows.",
        "Integrated OpenAI API calls and structured fallback handling.",
        "Added intent and tone logic around model generation."
      ],
      decisions: [
        "Retrieved context before generation to reduce unsupported answers.",
        "Kept intent classification separate from response generation.",
        "Added fallback responses for questions without relevant context.",
        "Used brand-tone rules as explicit prompt constraints."
      ],
      outcome:
        "The chatbot combines retrieval, generation and business rules in a production-oriented conversational architecture that prioritizes grounded and brand-appropriate answers."
    }
  },
  {
    slug: "gmail-automation-system",
    title: "Gmail Automation System",
    value: "Automates authenticated mailbox actions through secure APIs.",
    description:
      "Built a Gmail automation system using OAuth 2.0 and Gmail API authentication, supporting automated unsubscribe processing, background execution and production-grade API documentation.",
    technologies: ["Python", "FastAPI", "Gmail API", "OAuth 2.0", "Background Tasks", "Swagger UI"],
    categories: ["Automation", "Backend"],
    featured: true,
    visual: "/projects/gmail-automation.svg",
    flow: ["OAuth Consent", "Token Handling", "Mailbox Query", "Background Task", "Action Result"],
    caseStudy: {
      challenge:
        "Mailbox automation needs secure authorization, clear API boundaries and a reliable way to process repetitive actions without blocking user-facing requests.",
      architecture: [
        "OAuth 2.0 handles user authorization for Gmail access.",
        "FastAPI endpoints manage authentication and automation requests.",
        "Background tasks execute longer mailbox-processing operations.",
        "Swagger UI documents and tests the available API workflow."
      ],
      workflow: [
        "Start the Google OAuth authorization flow.",
        "Store and refresh authorized tokens securely.",
        "Search messages that match unsubscribe criteria.",
        "Queue background processing for selected mailbox actions.",
        "Return a structured completion or error response."
      ],
      responsibilities: [
        "Implemented OAuth 2.0 and Gmail API integration.",
        "Built FastAPI endpoints for authentication and processing.",
        "Added asynchronous background-task execution.",
        "Documented request and response models through Swagger UI."
      ],
      decisions: [
        "Used delegated OAuth authorization instead of collecting passwords.",
        "Separated interactive authentication from automation execution.",
        "Moved longer work to background tasks to keep APIs responsive.",
        "Returned structured status messages for easier debugging."
      ],
      outcome:
        "The system demonstrates a secure and maintainable approach to third-party email automation using authorized access, modular APIs and background execution."
    }
  },
  {
    slug: "ai-event-registration-platform",
    title: "AI Event Registration Platform",
    value: "Coordinates registration, reminders and event-specific engagement.",
    description:
      "Built a full-stack multi-event registration platform for business events with dynamic registration forms, live seat countdowns, automated email sequences, scheduled reminders and analytics integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB Atlas", "Nodemailer", "Zoho Mail", "node-cron", "Google Tag Manager"],
    categories: ["Full Stack", "Automation"],
    liveUrl: "https://brandingbeez.co.uk/events",
    liveLabel: "View Events",
    featured: true,
    visual: "/projects/event-platform.svg",
    highlights: [
      "Automated five-email event sequences",
      "Multi-event MongoDB architecture",
      "Dynamic event-based form switching",
      "Live seat countdown",
      "Social-proof registration notifications",
      "Cron-scheduled reminders",
      "Funnel tracking through Google Tag Manager"
    ],
    caseStudy: {
      challenge:
        "Multiple business events needed one reusable system for registrations, event-specific forms, seat displays, email communication and funnel tracking.",
      architecture: [
        "React renders event-aware landing pages and registration forms.",
        "Express APIs validate registrations and store event-linked records.",
        "MongoDB Atlas supports a multi-event data model.",
        "Nodemailer and Zoho Mail deliver scheduled communication.",
        "node-cron coordinates reminder sequences and follow-ups."
      ],
      workflow: [
        "Load event configuration and available form fields.",
        "Validate and submit a registration to the backend.",
        "Store the attendee against the correct event record.",
        "Trigger confirmation and scheduled email sequences.",
        "Track relevant funnel actions through Google Tag Manager."
      ],
      responsibilities: [
        "Built dynamic React event and form experiences.",
        "Implemented Express registration APIs and MongoDB models.",
        "Configured automated email sequences and reminders.",
        "Added seat-count and social-proof interface behavior."
      ],
      decisions: [
        "Used configuration-driven event pages to avoid duplicated forms.",
        "Kept attendees associated with explicit event identifiers.",
        "Separated immediate confirmation from scheduled reminder jobs.",
        "Only exposed live links that were provided for the project."
      ],
      outcome:
        "The platform provides one reusable full-stack workflow for managing multiple event registrations and communication sequences while keeping the user experience event-specific."
    }
  },
  {
    slug: "company-landing-page",
    title: "Company Landing Page",
    value: "Presents a focused service proposition through a responsive interface.",
    description:
      "Designed and developed a responsive company landing page with smooth interface animations and cross-device optimization.",
    technologies: ["React", "Next.js", "MongoDB Atlas", "Nodemailer", "Zoho Mail"],
    categories: ["Frontend", "Full Stack"],
    liveUrl: "https://brandingbeez.co.uk/idr",
    liveLabel: "View Landing Page",
    visual: "/projects/landing-page.svg"
  },
  {
    slug: "article-summarizer",
    title: "AI-Powered Web Scraper and Article Summarizer",
    value: "Converts online articles into stored structured summaries.",
    description:
      "Built an end-to-end Python application that extracts online articles, generates AI-assisted summaries and stores structured results in Supabase.",
    technologies: ["Python", "Web Scraping", "AI / NLP", "Supabase", "HTML", "CSS"],
    categories: ["AI / Data", "Backend"],
    visual: "/projects/article-summarizer.svg"
  },
  {
    slug: "hydroponic-system",
    title: "IoT Automated Hydroponic System",
    value: "Connects environmental sensors with intelligent agriculture monitoring.",
    description:
      "Developed an ESP32-based hydroponic automation concept using sensor integration and real-time monitoring for intelligent agriculture.",
    technologies: ["Arduino", "ESP32", "AWS IoT Core", "ThingSpeak", "Blynk", "Sensors"],
    categories: ["IoT"],
    visual: "/projects/hydroponics.svg"
  }
];

export const visionLabs = [
  {
    title: "License Plate Recognition System",
    description:
      "Built an Automatic License Plate Recognition system using OpenCV and Pytesseract OCR. The processing pipeline included grayscale conversion, Canny edge detection, contour filtering, region-of-interest extraction and text recognition.",
    technologies: ["Python", "OpenCV", "Pytesseract", "OCR", "Canny Edge Detection"]
  },
  {
    title: "Face Recognition System",
    description:
      "Developed a real-time face detection and recognition system using OpenCV and Haar Cascade classifiers with optimized video-frame processing.",
    technologies: ["Python", "OpenCV", "Haar Cascade", "Computer Vision"]
  },
  {
    title: "Moving Object Detection",
    description:
      "Built a real-time motion-detection system using frame differencing, background subtraction, contour detection and bounding-box tracking.",
    technologies: ["Python", "OpenCV", "Image Processing", "Computer Vision"]
  }
];

export const education = [
  {
    qualification: "B.E. Computer Science Engineering",
    institution: "Jansons Institute of Technology, Coimbatore",
    period: "2022 - 2026",
    result: "CGPA: 7.8"
  },
  {
    qualification: "Higher Secondary Certificate",
    institution: "Scism Matriculation Higher Secondary School",
    period: "2022",
    result: "83%"
  },
  {
    qualification: "Secondary School Leaving Certificate",
    institution: "Scism Matriculation Higher Secondary School",
    period: "2020",
    result: "93%"
  }
];

export const certifications = [
  "Programming Languages: C, C++ and Python",
  "Data Analytics",
  "Artificial Intelligence",
  "Machine Learning"
];

export const achievements = [
  {
    number: "01",
    title: "Second Prize - Paper Presentation",
    institution: "Karunya University",
    text: "Won second prize for presenting work related to the IoT Automated Hydroponic System and technology-driven sustainable agriculture."
  },
  {
    number: "02",
    title: "Top 100 Teams - Hack4Purpose",
    institution: "Anna University, Chennai",
    text: "Selected among the Top 100 teams in a national-level idea-presentation competition for the IoT Automated Hydroponic System."
  },
  {
    number: "03",
    title: "Technical Events",
    institution: "Inter-college participation",
    text: "Participated in technical symposiums and inter-college competitions, strengthening technical communication, presentation and problem-solving experience."
  }
];
