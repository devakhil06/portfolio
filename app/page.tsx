"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  "Python",
  "Machine Learning",
  "LLMs",
  "Computer Vision",
  "React",
  "FastAPI",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Git",
];

const projects = [
  {
    number: "01",
    title: "Metrivo",
    eyebrow: "AI · FINTECH · ANALYTICS",
    description:
      "An AI-powered business analytics platform that turns UPI statements, bank records and spreadsheets into clear, data-grounded decisions.",
    stack: ["Next.js", "FastAPI", "Python", "MongoDB"],
    href: "https://github.com/devakhil06/Metrivo",
    className: "metrivo",
    image: "https://raw.githubusercontent.com/devakhil06/Metrivo/main/public/og.png",
    imageAlt: "Metrivo financial analytics dashboard",
    problem: "Small businesses have useful financial data, but it is scattered across UPI statements, bank records and spreadsheets.",
    build: "Built an ingestion-to-insight workflow that normalises transactions, surfaces business metrics and lets an AI Analyst answer questions from the user’s own data.",
    engineering: "Document ingestion, transaction classification, deduplication, analytical dashboards, grounded AI answers, forecasting and anomaly detection.",
  },
  {
    number: "02",
    title: "SyncNode",
    eyebrow: "FULL STACK · COLLABORATION",
    description:
      "A real-time workspace for teams to organise projects, assign tasks, share files and keep progress visible in one place.",
    stack: ["React", "Node.js", "Socket.IO", "MongoDB"],
    href: "https://github.com/devakhil06/SyncNode",
    className: "syncnode",
    image: "https://github.com/user-attachments/assets/314f874c-5a4f-4cac-bb69-556f0d13e90d",
    imageAlt: "SyncNode project management dashboard",
    problem: "Small teams often split their work across chats, documents and spreadsheets, making ownership and progress difficult to follow.",
    build: "Built a shared workspace where teams can create projects, assign tasks, upload files and receive real-time updates from one interface.",
    engineering: "React and Vite frontend, Express APIs, JWT authentication, MongoDB persistence, Cloudinary uploads and Socket.IO collaboration.",
  },
];

const blogs = [
  {
    number: "01",
    label: "PROJECT NOTE · AI FINTECH",
    title: "Metrivo: giving financial data a usable voice.",
    href: "https://github.com/devakhil06/Metrivo",
    problem:
      "Small businesses often hold their financial story across UPI statements, bank records and spreadsheets. The data exists, but turning it into a clear view of revenue, expenses and risks takes time and manual effort.",
    why:
      "Metrivo is designed to shorten the distance between raw transactions and a decision. Its Analyst uses verified data tools so questions about the business are answered from the user's own records, rather than with generic chatbot responses.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "MongoDB"],
    future: [
      "Support more financial-statement formats and ingestion paths.",
      "Make forecasting and anomaly explanations more configurable for each business.",
      "Expand the AI Analyst into a more guided planning workflow.",
    ],
  },
  {
    number: "02",
    label: "PROJECT NOTE · COLLABORATION",
    title: "SyncNode: one clear place for team work.",
    href: "https://github.com/devakhil06/SyncNode",
    problem:
      "Small teams commonly spread work across chats, notes and spreadsheets. Tasks lose context, ownership becomes unclear and deadlines are easy to miss.",
    why:
      "SyncNode brings workspaces, projects, tasks, files and live updates together so students and small teams can spend less time searching for information and more time moving work forward.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Socket.IO", "Cloudinary", "JWT"],
    future: [
      "Add drag-and-drop task planning and a calendar view.",
      "Introduce notifications, team roles and task comments.",
      "Build activity history and a dark-mode experience.",
    ],
  },
];

const credentials = [
  { title: "Deep Learning: Neural Networks", issuer: "Udemy", year: "2025", href: "/deep-learning-certificate.pdf" },
  { title: "AI/ML Virtual Internship", issuer: "EduSkills", year: "2025", href: "/google-aiml-eduskills.pdf" },
  { title: "Machine Learning", issuer: "Honeywell", year: "2026" },
  { title: "Python", issuer: "Red Hat", year: "2026" },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte · Forage", year: "2026" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        cursorRef.current.classList.add("is-visible");
      }
    };
    const onPointerOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      cursorRef.current?.classList.toggle(
        "is-interactive",
        Boolean(target?.closest("a, button, summary")),
      );
    };
    const onPointerDown = () => cursorRef.current?.classList.add("is-pressed");
    const onPointerUp = () => cursorRef.current?.classList.remove("is-pressed");
    const onPointerLeave = () => cursorRef.current?.classList.remove("is-visible");
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const syncPointerMode = () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      document.body.classList.toggle("has-shuttle-cursor", pointerQuery.matches);
      if (pointerQuery.matches) {
        window.addEventListener("pointermove", onPointer, { passive: true });
        window.addEventListener("pointerover", onPointerOver, { passive: true });
        window.addEventListener("pointerdown", onPointerDown, { passive: true });
        window.addEventListener("pointerup", onPointerUp, { passive: true });
        document.documentElement.addEventListener("mouseleave", onPointerLeave);
      } else if (cursorRef.current) {
        cursorRef.current.style.transform = "translate3d(-100px, -100px, 0)";
        cursorRef.current.classList.remove("is-visible", "is-interactive", "is-pressed");
      }
    };
    const revealElements = document.querySelectorAll(".reveal");
    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
        { threshold: 0.08, rootMargin: "0px 0px -7% 0px" },
      );
      revealElements.forEach((element) => observer?.observe(element));
    } else {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    }
    const onVisibilityChange = () => {
      document.body.classList.toggle("is-page-hidden", document.hidden);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
      onScroll();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    pointerQuery.addEventListener("change", syncPointerMode);
    document.addEventListener("visibilitychange", onVisibilityChange);
    syncPointerMode();
    onScroll();
    onVisibilityChange();
    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      pointerQuery.removeEventListener("change", syncPointerMode);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      document.body.classList.remove("has-shuttle-cursor");
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <div className="cursor-orbit" ref={cursorRef} aria-hidden="true">
        <svg className="cursor-shuttle" viewBox="0 0 44 54" focusable="false">
          <path className="cursor-feather cursor-feather-left" d="M11.4 5.2 21.8 31 14 34.3 3.8 14.5Z" />
          <path className="cursor-feather cursor-feather-center" d="M18.2 2.7 27.3 29.5 21.8 31 11.4 5.2Z" />
          <path className="cursor-feather cursor-feather-right" d="M26.4 5.4 34.6 20.7 27.3 29.5 18.2 2.7Z" />
          <path className="cursor-band" d="m14 34.3 13.3-4.8 2.2 6.2-13.1 4.8Z" />
          <path className="cursor-cork" d="M16.4 40.5 29.5 35.7l1.2 3.2a7 7 0 0 1-4.2 9l-.8.3a7 7 0 0 1-9-4.2Z" />
          <path className="cursor-detail" d="m8.1 12.5 18.7 19.1M15.2 5.1l12.3 25.5M31.2 14l-7.9 17.8" />
        </svg>
      </div>

      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <a className="wordmark" href="#top" aria-label="Akhil, back to top">
          AKHIL<span>.</span>
        </a>
        <nav id="main-navigation" className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#blogs" onClick={closeMenu}>Blogs</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#credentials" onClick={closeMenu}>Credentials</a>
        </nav>
        <a className="header-contact" href="mailto:tanukuakhil.tech@gmail.com">
          Let&apos;s talk <Arrow diagonal />
        </a>
        <button className={menuOpen ? "menu-button is-open" : "menu-button"} onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label="Toggle menu">
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="court-line court-line-one" aria-hidden="true" />
        <div className="court-line court-line-two" aria-hidden="true" />
        <div className="hero-copy">
          <div className="availability hero-rise">
            <span className="status-dot" />
            Open to AI/ML roles
          </div>
          <div className="focus-reel hero-rise" aria-label="Focused on AI systems, machine learning products and full-stack experiences">
            <span className="focus-label">FOCUS /</span>
            <div className="focus-window" aria-hidden="true">
              <div className="focus-track">
                <span>AI systems</span>
                <span>ML products</span>
                <span>full-stack experiences</span>
                <span>AI systems</span>
              </div>
            </div>
          </div>
          <h1 className="hero-rise hero-title">
            <span className="hero-line">I build <em>intelligence</em></span>
            <span className="hero-line hero-line-alt">into useful systems.</span>
          </h1>
          <div className="hero-bottom hero-rise">
            <p>
              AI/ML undergraduate building practical products with Python,
              machine learning and full-stack engineering.
            </p>
            <a className="round-cta" href="#work" aria-label="See selected work">
              See work <Arrow />
            </a>
          </div>
        </div>

        <aside className="profile-card hero-rise">
          <div className="profile-image-wrap">
            <img
              src="https://avatars.githubusercontent.com/u/292966275?v=4"
              alt="Tanuku Akhil"
              width="580"
              height="725"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="profile-stamp">HYD · INDIA</div>
          </div>
          <div className="profile-meta">
            <span>Tanuku Akhil</span>
            <span>AI/ML Engineer · 2027</span>
          </div>
        </aside>

        <div className="shuttle-note hero-rise" aria-label="Badminton enthusiast">
          <span className="shuttle-emoji">🏸</span>
          <span>Build. Learn.<br />Play the next shot.</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}<i>✦</i></span>
          ))}
        </div>
      </div>

      <section className="section work-section" id="work">
        <div className="section-heading reveal">
          <p className="kicker">SELECTED WORK</p>
          <h2>Projects built to solve<br /><em>real problems.</em></h2>
          <a href="https://github.com/devakhil06" target="_blank" rel="noreferrer">
            All GitHub projects <Arrow diagonal />
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.className} reveal ${index % 2 === 0 ? "reveal-left" : "reveal-right"}`} key={project.title}>
              <div className="project-topline">
                <span>{project.number}</span>
                <span>{project.eyebrow}</span>
                <a className="project-arrow" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}><Arrow diagonal /></a>
              </div>
              <a className="project-visual project-screenshot" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository`}>
                <img src={project.image} alt={project.imageAlt} width="1200" height="675" loading="lazy" decoding="async" />
                <span className="screenshot-label">ACTUAL PRODUCT VIEW</span>
              </a>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-actions">
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View GitHub <Arrow diagonal /></a>
                  <details className="case-study">
                    <summary>Read case study <span aria-hidden="true">+</span></summary>
                    <div className="case-study-content">
                      <div>
                        <span>01 / Problem</span>
                        <p>{project.problem}</p>
                      </div>
                      <div>
                        <span>02 / What I built</span>
                        <p>{project.build}</p>
                      </div>
                      <div>
                        <span>03 / Engineering</span>
                        <p>{project.engineering}</p>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section blogs-section" id="blogs">
        <div className="blogs-heading reveal">
          <p className="kicker">BUILD NOTES</p>
          <div>
            <h2>Behind the<br /><em>projects.</em></h2>
            <p>Short reads on the problems I chose, the systems I used, and where each project can go next.</p>
          </div>
        </div>

        <div className="blog-list">
          {blogs.map((blog) => (
            <article className="blog-card reveal" key={blog.title}>
              <div className="blog-card-meta">
                <span>{blog.number}</span>
                <span>{blog.label}</span>
                <a href={blog.href} target="_blank" rel="noreferrer" aria-label={`Open ${blog.title} on GitHub`}><Arrow diagonal /></a>
              </div>
              <div className="blog-card-body">
                <h3>{blog.title}</h3>
                <div className="blog-copy-grid">
                  <div>
                    <span>Problem</span>
                    <p>{blog.problem}</p>
                  </div>
                  <div>
                    <span>Why this exists</span>
                    <p>{blog.why}</p>
                  </div>
                </div>
                <div className="blog-stack" aria-label={`${blog.title} technology stack`}>
                  {blog.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <details className="blog-future">
                  <summary>Future development <span aria-hidden="true">+</span></summary>
                  <ul>
                    {blog.future.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-intro reveal">
          <p className="kicker">ABOUT</p>
          <h2>Curious by default.<br /><em>Practical by choice.</em></h2>
        </div>
        <div className="about-grid">
          <div className="about-copy reveal">
            <p className="large-copy">
              I learn by building, testing and improving. That loop has shaped how I approach both intelligent systems and everyday problem-solving.
            </p>
            <div className="about-actions">
              <a className="text-link" href="/tanuku-akhil-resume.pdf" target="_blank">View résumé <Arrow diagonal /></a>
              <a className="text-link" href="https://leetcode.com/u/tanukuakhil-codes/" target="_blank" rel="noreferrer">LeetCode <Arrow diagonal /></a>
            </div>
          </div>
          <div className="education-card reveal">
            <span className="education-year">2023—27</span>
            <div>
              <p>CVR College of Engineering</p>
              <h3>B.Tech · CSE<br />(AI &amp; ML)</h3>
              <span>CGPA 7.89 / 10</span>
            </div>
            <div className="racket-rings" aria-hidden="true"><i /><i /><i /></div>
          </div>
        </div>
      </section>

      <section className="skills-panel">
        <div className="section reveal">
          <div className="skills-heading">
            <p className="kicker">TOOLKIT</p>
            <h2>The stack behind<br /><em>the work.</em></h2>
          </div>
          <div className="skill-reels" aria-label="Technical skills">
            <div className="skill-reel">
              <div className="skill-reel-track">
                {[...skills.slice(0, 5), ...skills.slice(0, 5)].map((skill, index) => <span aria-hidden={index >= 5} key={`top-${skill}-${index}`}>{skill}<i>↗</i></span>)}
              </div>
            </div>
            <div className="skill-reel reverse">
              <div className="skill-reel-track">
                {[...skills.slice(5), ...skills.slice(5)].map((skill, index) => <span aria-hidden={index >= 5} key={`bottom-${skill}-${index}`}>{skill}<i>✦</i></span>)}
              </div>
            </div>
            <p className="skill-caption">A practical toolkit for taking ideas from model to interface.</p>
          </div>
        </div>
      </section>

      <section className="section credentials-section" id="credentials">
        <div className="credential-columns">
          <div className="achievement-block reveal">
            <p className="kicker">MILESTONES</p>
            <h2>Proof in<br /><em>the process.</em></h2>
            <div className="achievement-list">
              <article>
                <strong>Runner-up</strong>
                <p>All India Hackathon 2024 · Anurag University</p>
                <span>DevBoard · 24 teams</span>
              </article>
              <article>
                <strong>Finalist</strong>
                <p>ImagiPrompt 2024 · CVR College of Engineering</p>
                <span>Prompt engineering · 230 participants</span>
              </article>
            </div>
          </div>
          <div className="credential-block reveal">
            <div className="credential-header"><span>Credentials</span><span>05</span></div>
            {credentials.map((item, index) => {
              const content = <><span className="credential-index">0{index + 1}</span><div><strong>{item.title}</strong><p>{item.issuer}</p></div><span className="credential-year">{item.year}{item.href ? " ↗" : ""}</span></>;
              return item.href ? <a href={item.href} target="_blank" className="credential-row" key={item.title}>{content}</a> : <div className="credential-row" key={item.title}>{content}</div>;
            })}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-court" aria-hidden="true"><i /><i /></div>
        <div className="contact-inner reveal">
          <p className="kicker">NEXT RALLY</p>
          <h2>Have a hard problem?<br /><span>Let&apos;s take a swing.</span></h2>
          <a className="contact-button" href="mailto:tanukuakhil.tech@gmail.com">Start a conversation <Arrow diagonal /></a>
        </div>
      </section>

      <footer>
        <a className="wordmark inverse" href="#top">AKHIL<span>.</span></a>
        <p>Building intelligent systems from Hyderabad.</p>
        <div className="footer-links">
          <a href="https://github.com/devakhil06" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/akhiltanuku/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="mailto:tanukuakhil.tech@gmail.com">Email ↗</a>
        </div>
        <span>© 2026 Tanuku Akhil</span>
      </footer>
    </main>
  );
}
