export const metadata = {
  title: "Kalpana Devi | Backend Developer",
  description:
    "Backend Developer specializing in AI, FastAPI, RAG systems, and scalable backend architecture.",
};

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen scroll-smooth">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-cyan-400">PORTFOLIO</h1>
        <div className="space-x-6 text-gray-300 hidden md:block">
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#experience" className="hover:text-cyan-400">Experience</a>

          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Kalpana Devi T
        </h1>

        <p className="text-cyan-400 text-xl mt-6">
          Backend Developer | AI & Automation Engineer
        </p>

        <p className="max-w-2xl mx-auto mt-8 text-gray-400 leading-relaxed">
          Backend-focused Computer Science Engineer experienced in designing scalable API architectures, implementing RAG-based AI systems, and building secure OAuth 2.0 authentication workflows for intelligent automation platforms.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/kalpanadevi07"
            target="_blank"
            className="bg-cyan-500 px-8 py-3 rounded-xl text-black font-semibold hover:bg-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kalpana-devi-4b1140264/"
            target="_blank"
            className="bg-cyan-500 px-8 py-3 rounded-xl text-black font-semibold hover:bg-cyan-400 transition"
          >
            LinkedIn
          </a>
          {/* Resume Download */}
  <a
    href="/Kalpana_devi_resume.pdf"
    download
    className="bg-cyan-500 px-8 py-3 rounded-xl text-black font-semibold hover:bg-cyan-400 transition"
  >
    📄 Download Resume
  </a>


        </div>
        
      </section>

      {/* SKILLS */}
<section id="skills" className="py-20 px-6 bg-slate-900">
  <h2 className="text-3xl font-bold text-center mb-14">
    Technical Skills
  </h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto text-gray-300">

    {/* Programming */}
    <div className="bg-slate-800 p-6 rounded-2xl">
      <h3 className="text-cyan-400 font-semibold mb-4">
        Programming Languages
      </h3>
      <p>Python, C,JavaScript, HTML,CSS</p>
    </div>

    {/* Backend */}
    <div className="bg-slate-800 p-6 rounded-2xl">
      <h3 className="text-cyan-400 font-semibold mb-4">
        Backend & API Development
      </h3>
      <p>
        FastAPI, RESTful APIs, API Integration, OAuth 2.0 Authentication,
        Token-Based Authorization, Background Task Processing
      </p>
    </div>

    {/* Databases */}
    <div className="bg-slate-800 p-6 rounded-2xl">
      <h3 className="text-cyan-400 font-semibold mb-4">
        Databases & Storage
      </h3>
      <p>
        Supabase, SQL (Basics), Data Modeling, Vector Indexing (FAISS)
      </p>
    </div>

    {/* Architecture */}
    <div className="bg-slate-800 p-6 rounded-2xl">
      <h3 className="text-cyan-400 font-semibold mb-4">
        Software Architecture & Concepts
      </h3>
      <p>
        Modular Architecture, Scalable System Design,
        Configuration-Driven Development, Service-Oriented Design,
        Environment-Based Configuration
      </p>
    </div>

    {/* Libraries */}
    <div className="bg-slate-800 p-6 rounded-2xl">
      <h3 className="text-cyan-400 font-semibold mb-4">
        Libraries & Frameworks
      </h3>
      <p>
        Pandas, NumPy, Scikit-learn, OpenCV, Keras, Puppeteer (JS)
      </p>
    </div>

    {/* Tools */}
    <div className="bg-slate-800 p-6 rounded-2xl">
      <h3 className="text-cyan-400 font-semibold mb-4">
        Tools & Platforms
      </h3>
      <p>
        Git, GitHub, Swagger UI, VS Code
      </p>
    </div>

  </div>
</section>
{/* WORK EXPERIENCE HORIZONTAL TIMELINE */}
<section id="experience" className="py-20 px-6 bg-slate-950">
  <h2 className="text-3xl font-bold text-center mb-16">
    Work Experience
  </h2>

  <div className="overflow-x-auto">
    <div className="flex items-center min-w-[1000px] relative">

      {/* Horizontal Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-cyan-500 transform -translate-y-1/2"></div>

     {/* ITEM 1 - CURRENT ROLE (HIGHLIGHTED) */}
<div className="relative flex flex-col items-center w-1/4 text-center">

  {/* Glowing Dot */}
  <div className="z-10 bg-cyan-400 w-7 h-7 rounded-full animate-pulse shadow-[0_0_20px_#22d3ee]"></div>

  {/* Card */}
  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 
                  p-6 rounded-2xl mt-6 w-72 
                  shadow-2xl border border-cyan-400 
                  hover:scale-105 transition duration-300">

    {/* Badge */}
    <span className="absolute -top-3 right-4 bg-cyan-400 text-slate-900 
                     text-xs font-bold px-3 py-1 rounded-full shadow-md">
      CURRENTLY WORKING
    </span>

    <h3 className="text-lg font-bold text-cyan-300 mt-2">
      Python & AI Developer Intern
    </h3>

    <p className="text-cyan-400 text-sm mt-1 font-medium">
      BRANDINGBEEZ — Coimbatore
    </p>

    <p className="text-gray-300 text-sm mt-3 leading-relaxed">
      Developing AI-powered backend systems, scalable FastAPI APIs,
      and automation solutions integrated with LLM technologies.
    </p>
  </div>
</div>


      {/* ITEM 2 */}
      <div className="relative flex flex-col items-center w-1/4 text-center">
        <div className="z-10 bg-cyan-500 w-6 h-6 rounded-full"></div>
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg mt-6 w-72">
          <h3 className="text-lg font-semibold text-cyan-400">
            Business Analyst Intern
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Sakthi Veera Green Energy Pvt. Ltd — Chennai
          </p>
          <p className="text-gray-300 text-sm mt-3">
            Conducted freeze drying machinery market research,
            cost comparison analysis, and strategic feasibility studies.
          </p>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="relative flex flex-col items-center w-1/4 text-center">
        <div className="z-10 bg-cyan-500 w-6 h-6 rounded-full"></div>
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg mt-6 w-72">
          <h3 className="text-lg font-semibold text-cyan-400">
            IoT Intern
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Iyarkai Tech Lab Pvt. Ltd — Chennai
          </p>
          <p className="text-gray-300 text-sm mt-3">
            Built IoT-based monitoring systems integrating sensors,
            automation workflows, and real-time dashboards.
          </p>
        </div>
      </div>

      {/* ITEM 4 */}
      <div className="relative flex flex-col items-center w-1/4 text-center">
        <div className="z-10 bg-cyan-500 w-6 h-6 rounded-full"></div>
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg mt-6 w-72">
          <h3 className="text-lg font-semibold text-cyan-400">
            AI & Data Intern
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Novitech R&D Pvt. Ltd
          </p>
          <p className="text-gray-300 text-sm mt-3">
            Completed internships in Data Analytics, Artificial Intelligence,
            and Machine Learning with predictive modeling projects.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-cyan-400">
              AI-Based Automated Web Analysis & SEO System
            </h3>
            <p className="mt-4 text-gray-400">
              Modular backend system for automated web scraping, contextual
              filtering, and structured SEO report generation using LLM
              integration and asynchronous API workflows.
            </p>
            <p className="text-sm text-gray-500 mt-4">
    Python, FastAPI, Node.js, Headless Browser Automation, REST APIs, JSON
Processing, Asynchronous Programming, Version Control (Git).
  </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-cyan-400">
              Hybrid AI Chatbot (RAG Architecture)
            </h3>
            <p className="mt-4 text-gray-400">
              Production-ready chatbot integrating FAISS-based semantic retrieval
              with OpenAI APIs, strict brand-tone enforcement, and scalable service orchestration.
            </p>
            <p className="text-sm text-gray-500 mt-4">
    Python, FastAPI, OpenAI API, FAISS, RAG, LLMs, REST APIs, Web Scraping
  </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-cyan-400">
              Gmail Automation System
            </h3>
            <p className="mt-4 text-gray-400">
              Secure Gmail automation using OAuth 2.0 authentication, token-based
              authorization, unsubscribe detection logic, and background task execution.
            </p>
             <p className="text-sm text-gray-500 mt-4">
    Python, FastAPI, Gmail API, OAuth 2.0, REST APIs, Swagger UI, Background Tasks
  </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-cyan-400">
              IoT Automated Hydroponic System
            </h3>
            <p className="mt-4 text-gray-400">
              ESP32-based hydroponic automation system with sensor integration
              and real-time monitoring via AWS IoT Core and Blynk.
            </p>
            <p className="text-sm text-gray-500 mt-4">
    Arduino, ESP32, AWS IoT Core, ThingSpeak, Blynk, Sensors and IoT
  </p>
          </div>
          {/* AI Web Scraper & Summarizer */}
<div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
  <h3 className="text-xl font-semibold text-cyan-400">
    AI-Powered Web Scraper & Article Summarizer
  </h3>
  <p className="mt-4 text-gray-400">
    Developed an end-to-end Python application that scrapes news/blog
    articles, generates AI-based summaries, and stores structured
    results in Supabase. Built a simple frontend to display article
    titles, summaries, and metadata.
  </p>
  <p className="text-sm text-gray-500 mt-4">
    Python, Web Scraping, AI/NLP, Supabase, HTML, CSS
  </p>
</div>

{/* Face Recognition System */}
<div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
  <h3 className="text-xl font-semibold text-cyan-400">
    Face Recognition System
  </h3>
  <p className="mt-4 text-gray-400">
    Implemented real-time face detection and recognition using
    OpenCV and Haar Cascade classifiers, optimized for efficient
    video frame processing and live recognition accuracy.
  </p>
  <p className="text-sm text-gray-500 mt-4">
    Python, OpenCV, Haar Cascade, Computer Vision
  </p>
</div>

{/* Moving Object Detection */}
<div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
  <h3 className="text-xl font-semibold text-cyan-400">
    Moving Object Detection
  </h3>
  <p className="mt-4 text-gray-400">
    Built a real-time motion detection system using Python and OpenCV,
    applying image processing techniques and contour tracking for
    accurate object movement detection.
  </p>
  <p className="text-sm text-gray-500 mt-4">
    Python, OpenCV, Image Processing, Computer Vision
  </p>
</div>


        </div>
      </section>
    {/* ACHIEVEMENTS SECTION */}
<section id="achievements" className="py-20 px-6 bg-slate-900">
  <h2 className="text-3xl font-bold text-center mb-16">
    Achievements & Recognitions
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

    {/* Achievement 1 - National Level */}
    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 
                    p-8 rounded-2xl shadow-2xl border border-cyan-400 
                    hover:scale-105 transition duration-300">

      <span className="absolute -top-3 right-4 bg-cyan-400 text-slate-900 
                       text-xs font-bold px-3 py-1 rounded-full">
        NATIONAL LEVEL
      </span>

      <h3 className="text-xl font-bold text-cyan-300 mt-4">
        Top 100 Teams – Hack4Purpose
      </h3>

      <p className="text-gray-400 text-sm mt-2">
        Anna University, Chennai
      </p>

      <p className="text-gray-300 text-sm mt-4 leading-relaxed">
        Selected among the top 100 teams in a national-level idea presentation
        for the project <span className="text-cyan-400 font-medium">
        IoT Automated Hydroponic System</span>, showcasing innovation in smart agriculture.
      </p>
    </div>


    {/* Achievement 2 - 2nd Prize */}
    <div className="relative bg-slate-800 p-8 rounded-2xl shadow-xl 
                    hover:scale-105 transition duration-300">

      <span className="absolute -top-3 right-4 bg-yellow-400 text-slate-900 
                       text-xs font-bold px-3 py-1 rounded-full">
        2nd PRIZE
      </span>

      <h3 className="text-xl font-bold text-cyan-300 mt-4">
        Paper Presentation Winner
      </h3>

      <p className="text-gray-400 text-sm mt-2">
        Karunya University
      </p>

      <p className="text-gray-300 text-sm mt-4 leading-relaxed">
        Secured second prize for presenting research on 
        <span className="text-cyan-400 font-medium">
        IoT Automated Hydroponic System</span>, focusing on sustainable
        agriculture and automated nutrient management.
      </p>
    </div>


    {/* Achievement 3 - Technical Participation */}
    <div className="bg-slate-800 p-8 rounded-2xl shadow-xl 
                    hover:scale-105 transition duration-300">

      <h3 className="text-xl font-bold text-cyan-300">
        Technical Event Participation
      </h3>

      <p className="text-gray-300 text-sm mt-4 leading-relaxed">
        Actively participated in multiple technical symposiums and
        inter-college competitions across various institutions,
        strengthening problem-solving and presentation skills.
      </p>
    </div>

  </div>
</section>


      {/* CONTACT */}
<section id="contact" className="py-24 text-center bg-slate-900">
  <h2 className="text-3xl font-bold mb-10">Contact</h2>

  <div className="flex flex-col items-center gap-6">

    {/* Email Button */}
    <a
      href="mailto:kalpanadevi7e@gmail.com"
      className="bg-cyan-500 px-8 py-3 rounded-xl text-black font-semibold hover:bg-cyan-400 transition"
    >
      📧 kalpanadevi7e@gmail.com
    </a>

    {/* Phone Number */}
    <p className="text-gray-300 text-lg">
      📱 +91 82200 93277
    </p>

    {/* Location */}
    <p className="text-gray-400">
      📍 Theni, Tamil Nadu
    </p>

  </div>

  <p className="text-gray-500 text-sm mt-12">
    © 2026 Kalpana Devi. Built with Next.js & Tailwind.
  </p>
</section>


    </div>
  );
}
