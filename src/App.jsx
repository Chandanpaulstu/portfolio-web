import React, { useState } from 'react';
import { ExternalLink, Mail, Linkedin, Github } from 'lucide-react';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);

  const projects = [
    {
      title: "Multi-Tenant SaaS Application",
      description: "Built a B2B platform where each organization gets isolated data and custom branding. The interesting challenge was designing the database schema for true tenant isolation while keeping queries performant.",
      technical: "Implemented row-level security in PostgreSQL, used Laravel's multi-tenancy package, and built a middleware layer that automatically scopes all queries. The trickiest part was handling cross-tenant data for admin dashboards without breaking isolation.",
      learned: "Learned a lot about database design patterns, the trade-offs between shared vs isolated databases, and how to design APIs that are tenant-aware by default.",
      tech: ["Laravel", "React", "PostgreSQL", "Redis"],
      live: "https://project1.example.com"
    },
    {
      title: "Security Audit Dashboard",
      description: "Created a tool that aggregates security logs from multiple sources and visualizes potential vulnerabilities. Part of my master's research project on automated threat detection.",
      technical: "Used Elasticsearch for log aggregation, built custom parsers for different log formats (syslog, JSON, CEF), and implemented basic anomaly detection using statistical thresholds. The frontend uses WebSockets for real-time updates.",
      learned: "Got hands-on with the ELK stack, understood how to normalize heterogeneous data, and realized how challenging it is to reduce false positives in security alerting.",
      tech: ["Laravel", "Vue.js", "Elasticsearch", "WebSocket"],
      live: "https://project2.example.com"
    },
    {
      title: "Payment Processing Integration",
      description: "Integrated multiple payment gateways (Stripe, PayPal, local providers) behind a unified API. Needed to handle webhooks, idempotency, and automatic retries.",
      technical: "Designed an adapter pattern to abstract gateway differences, implemented webhook signature verification for each provider, and built a job queue system for handling failed transactions. Used database transactions carefully to prevent double-charging.",
      learned: "Learned about distributed systems challenges like idempotency, eventual consistency, and how hard it is to build reliable payment systems. Also got deep into Laravel's job queue and event system.",
      tech: ["Laravel", "React", "MySQL", "Queue Workers"],
      live: "https://project3.example.com"
    },
    {
      title: "API Rate Limiter & Monitoring",
      description: "Built middleware for API rate limiting with Redis and a monitoring dashboard to track usage patterns. Needed to handle different rate limits per user tier and prevent abuse.",
      technical: "Implemented token bucket algorithm using Redis sorted sets, built sliding window rate limiting, and added circuit breaker pattern for downstream services. The monitoring uses Prometheus metrics.",
      learned: "Deep dive into Redis data structures, understanding different rate limiting algorithms, and the importance of observability in distributed systems.",
      tech: ["Laravel", "Redis", "Prometheus", "Grafana"],
      live: "https://project4.example.com"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with inventory management, order processing, and admin dashboard. First major project where I handled the entire architecture.",
      technical: "Used Laravel for REST API with JWT authentication, React for the frontend with Context API for state management. Implemented optimistic locking for inventory to prevent overselling, and used database transactions for order creation.",
      learned: "First time dealing with race conditions in production, learned about database indexing when queries got slow, and understood why you need proper error handling and logging.",
      tech: ["Laravel", "React", "MySQL", "Stripe"],
      live: "https://project5.example.com"
    }
  ];

  const skills = [
    {
      category: "Backend",
      items: [
        "Laravel (3 years, most comfortable here)",
        "PHP 8.x - traits, generators, attributes",
        "RESTful API design & versioning",
        "Database design - PostgreSQL, MySQL",
        "Redis for caching & queues",
        "Understanding of SOLID principles"
      ]
    },
    {
      category: "Frontend",
      items: [
        "React.js with hooks",
        "JavaScript/ES6+ (async/await, promises)",
        "State management (Context, Redux basics)",
        "Responsive CSS, Tailwind",
        "Performance optimization (memoization, lazy loading)",
        "Basic TypeScript"
      ]
    },
    {
      category: "Security & Infrastructure",
      items: [
        "OWASP Top 10 vulnerabilities",
        "SQL injection prevention, XSS mitigation",
        "JWT, OAuth2 authentication flows",
        "Docker basics for development",
        "CI/CD with GitHub Actions",
        "AWS EC2, S3 (learning Kubernetes)"
      ]
    },
    {
      category: "Currently Learning",
      items: [
        "Advanced cryptography (master's program)",
        "System design patterns at scale",
        "GraphQL and API federation",
        "Microservices architecture",
        "Terraform for infrastructure as code",
        "Advanced React patterns"
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Simple Header */}
      <header className={`border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} sticky top-0 backdrop-blur-sm ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} z-10`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold">Your Name</h1>
          <div className="flex gap-6 items-center">
            <a href="#projects" className={`text-sm ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>Projects</a>
            <a href="#skills" className={`text-sm ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>Skills</a>
            <a href="#contact" className={`text-sm ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a>
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`text-xs px-3 py-1 rounded ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {isDark ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Full-Stack Developer</h2>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            I'm a software engineer with 3 years of experience building web applications with Laravel and React. Currently pursuing a Master's in Information & Cybersecurity, which has made me more conscious about building secure systems.
          </p>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            I enjoy the problem-solving aspect of development—figuring out why something isn't working, designing database schemas that make sense, and writing code that's easy for others (and future me) to understand. Most of my experience is in backend architecture and API design, but I'm comfortable working across the full stack.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={`py-16 ${isDark ? 'bg-gray-800/30' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-8">Projects</h3>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <article key={index} className={`${isDark ? 'border-gray-700' : 'border-gray-200'} pb-12 ${index !== projects.length - 1 ? 'border-b' : ''}`}>
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-sm ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                </div>
                
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h5 className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Technical Details</h5>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>
                    {project.technical}
                  </p>
                </div>
                
                <div className="mb-4">
                  <h5 className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>What I Learned</h5>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>
                    {project.learned}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-8">Skills & Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-3">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className={`py-16 ${isDark ? 'bg-gray-800/30' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-1">Master's in Information & Cybersecurity</h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>University Name | In Progress</p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Focusing on secure software development, cryptography, network security, and threat modeling. Working on research related to automated vulnerability detection.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Bachelor's in Computer Science</h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>University Name | 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm open to freelance projects, full-time opportunities, or just chatting about interesting technical problems.
          </p>
          <div className="flex gap-6 flex-wrap">
            <a 
              href="mailto:your.email@example.com"
              className={`flex items-center gap-2 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
            >
              <Mail size={18} />
              your.email@example.com
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a 
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} py-6`}>
        <div className="max-w-4xl mx-auto px-6">
          <p className={`text-sm text-center ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}