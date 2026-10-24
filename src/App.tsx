import { motion } from "motion/react";
import { Mail, Phone, Globe, ExternalLink, Download, FileText } from "lucide-react";

const RESUME_DATA = {
  name: "Jastin G. Lamug",
  title: "Software Developer",
  contact: {
    email: "jastinlamug26@gmail.com",
    phone: "0917 457 2531",
    portfolio: "kixkixx2.github.io/jstin.portfolio/",
  },
  experience: [
    {
      id: 1,
      role: "Internship",
      company: "Department of Migrant Workers - DMW",
      date: "Feb 2026 - May 2026",
      description: [
        "Architected and deployed a standalone, local-network Paperless Queuing System using SQLite to streamline and optimize real-time client routing between DMW and OWWA offices.",
        "Processed and consolidated large-scale demographic datasets into structured, highly organized spreadsheets, improving record accuracy and access efficiency.",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      name: "Queue Management System",
      date: "Feb 2026",
      role: "Solo Developer",
      stack: "React, TypeScript, Vite, Tailwind CSS, Lucide React, Firebase Firestore, Firebase Authentication, Firebase Hosting, React Router DOM",
      description: [
        "Architected and deployed a real-time paperless queuing system using Firebase Firestore, updating the public TV board instantly the moment an officer calls a client.",
        "Implemented Firebase Authentication and role-based routing with React Router DOM to separate access between admins, officers (DMW/OWWA), and the public kiosk/TV board.",
        "Built a fully responsive, dark-mode UI with Tailwind CSS and Lucide React, eliminating manual paper handling and physical wait times.",
      ],
    },
    {
      id: 2,
      name: "K-UMAP Health Analytics",
      date: "Dec 2025",
      link: "https://k-umap.onrender.com",
      role: "Solo Developer / Data Analyst",
      stack: "Python, Flask, Flask-CORS, Gunicorn, NumPy, Pandas, Scikit-Learn, UMAP-learn, SciPy, Optuna, Joblib",
      description: [
        "Built a dimensionality-reduction and clustering pipeline (UMAP + K-Means) to analyze student clinical health datasets at Isabela State University Echague Infirmary, optimizing cluster separation with Optuna.",
        "Deployed the pipeline as a Flask REST API on Gunicorn with a CORS-enabled backend, delivering actionable insights for campus health administration.",
      ],
    },
    {
      id: 3,
      name: "J.P. Lamug-Daquioag OB-GYNE Clinic Website",
      date: "Sept 2026",
      link: "https://j-p-lamug-daquioag.vercel.app",
      role: "Solo Developer",
      stack: "TypeScript, HTML, API, Chatbot",
      description: [
        "Designed, developed, and deployed the official clinic website for J.P. Lamug-Daquioag OB-GYNE Clinic, establishing its first online presence.",
        "Integrated an API-driven chatbot to support patient inquiries and improve engagement.",
        "Expanded reach for the clinic's healthcare services in San Agustin, Isabela through a fast, mobile-friendly TypeScript build.",
      ],
    },
    {
      id: 4,
      name: "Stock Market News Intelligence Analyzer",
      date: "Aug 2026",
      link: "",
      role: "Solo Developer / Automation Engineer",
      stack: "n8n, Google Gemini (AI/LLM), RSS Feeds, REST APIs, JSON, Discord Webhooks, Cron/Scheduled Triggers, JavaScript",
      description: [
        "Built an automated financial-news monitoring pipeline in n8n, consolidating stock-market news from multiple RSS and REST API sources on a scheduled cron trigger.",
        "Applied Google Gemini (AI/LLM) to analyze and filter incoming stories, delivering real-time, formatted insights to Discord via webhook and removing the need to manually monitor news sources.",
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science (Major in Data Mining)",
      school: "Isabela State University - Echague Main Campus",
      date: "Aug 2022 - Jul 2026",
      gwa: "Final GWA: 1.518",
    },
  ],
  certifications: [
    {
      id: 1,
      name: "Certificate of Eligibility",
      issuer: <>Honor Graduate Eligibility - <strong className="font-bold text-slate-900">Cum Laude</strong> (PD - 907)</>,
      date: "Jul 2026",
    },
    {
      id: 2,
      name: "Certificate of Completion",
      issuer: "Accenture Technology Academy - Salesforce",
      date: "Feb 2026 - Apr 2026",
    },
    {
      id: 3,
      name: "Civil Service Eligible",
      issuer: "Civil Service Eligible - Professional",
      date: "Mar 2024",
    },
  ],
  skills: [
    {
      category: "Developer Stack",
      items: ["Python", "JavaScript / TypeScript", "C++", "HTML/CSS", "SQL"],
    },
    {
      category: "Web & cloud",
      items: ["React, Vite, Tailwind", "Firebase (Auth, Firestore, Hosting)", "Flask, REST APIs", "n8n automation"],
    },
    {
      category: "AI & Modern Tools",
      items: ["AI-Assisted Development", "AI Debugging", "Prompt Engineering", "Claude, Gemini, Codex"],
    },
    {
      category: "Office & productivity",
      items: ["MS Office Suite (Excel, Word, PowerPoint)", "Data entry", "Documentation"],
    },
  ],
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-16 px-6 sm:px-12 font-sans selection:bg-blue-100 selection:text-blue-900">
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Header Section */}
        <header className="space-y-5">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              {RESUME_DATA.name}
            </h1>
            <p className="text-lg sm:text-xl text-blue-600 mt-2 font-medium">
              {RESUME_DATA.title}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-blue-500" />
              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="hover:text-blue-600 transition-colors"
              >
                {RESUME_DATA.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-blue-500" />
              <span>{RESUME_DATA.contact.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-blue-500" />
              <a
                href={`https://${RESUME_DATA.contact.portfolio}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                {RESUME_DATA.contact.portfolio}
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a 
              href={`${import.meta.env.BASE_URL}Jastin_Lamug_Resume.pdf`} 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-sm font-medium transition-colors"
            >
              <FileText className="w-4 h-4" />
              Preview Resume
            </a>
            <a 
              href={`${import.meta.env.BASE_URL}Jastin_Lamug_Resume.pdf`} 
              download="Jastin_Lamug_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </header>

        <div className="w-full h-px bg-slate-200" />

        {/* Experience Section */}
        <section className="space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Experience
          </h2>
          <div className="space-y-10">
            {RESUME_DATA.experience.map((exp) => (
              <div key={exp.id} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                  <h3 className="font-semibold text-slate-900 text-lg">
                    {exp.role} <span className="text-slate-300 font-normal mx-1">|</span> <span className="text-slate-600 font-medium">{exp.company}</span>
                  </h3>
                  <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 text-sm leading-relaxed">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="pl-1">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Projects Section */}
        <section className="space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Technical Projects
          </h2>
          <div className="space-y-10">
            {RESUME_DATA.projects.map((proj) => (
              <div key={proj.id} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-slate-900 text-lg">
                      {proj.name}
                    </h3>
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1 text-sm bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                        <ExternalLink className="w-3 h-3" />
                        Link
                      </a>
                    )}
                  </div>
                  <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                    {proj.date}
                  </span>
                </div>
                <div className="text-sm space-y-1">
                  <p><span className="font-medium text-slate-900">Role:</span> <span className="text-slate-600">{proj.role}</span></p>
                  <p><span className="font-medium text-slate-900">Tech Stack:</span> <span className="text-slate-600 italic">{proj.stack}</span></p>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 text-sm leading-relaxed">
                  {proj.description.map((desc, i) => (
                    <li key={i} className="pl-1">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section className="grid sm:grid-cols-2 gap-12 sm:gap-6">
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Education
            </h2>
            <div className="space-y-6">
              {RESUME_DATA.education.map((edu) => (
                <div key={edu.id} className="space-y-2">
                  <h3 className="font-semibold text-slate-900 leading-snug">{edu.degree}</h3>
                  <p className="text-slate-700 text-sm">{edu.school}</p>
                  <div className="flex flex-col gap-0.5 text-sm text-slate-500">
                    <span>{edu.date}</span>
                    <span className="font-medium text-slate-700">{edu.gwa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Certifications & Eligibility
            </h2>
            <div className="space-y-5">
              {RESUME_DATA.certifications.map((cert) => (
                <div key={cert.id} className="space-y-1">
                  <h3 className="font-semibold text-slate-900 text-sm">{cert.name}</h3>
                  <p className="text-slate-600 text-sm">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs font-medium">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Key Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {RESUME_DATA.skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-3">
                <h3 className="font-medium text-slate-900 text-sm border-b border-slate-200 pb-2">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-1.5">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-sm text-slate-600">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </motion.main>
    </div>
  );
}
