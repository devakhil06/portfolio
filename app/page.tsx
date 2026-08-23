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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    const onPointer = (event: PointerEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="cursor-orbit" ref={cursorRef} aria-hidden="true">🏸</div>

      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <a className="wordmark" href="#top" aria-label="Akhil, back to top">
          AKHIL<span>.</span>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#credentials" onClick={closeMenu}>Credentials</a>
        </nav>
        <a className="header-contact" href="mailto:tanukuakhil.tech@gmail.com">
          Let&apos;s talk <Arrow diagonal />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle menu">
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
          <h1 className="hero-rise hero-title">
            I build intelligence
            <span>into useful systems.</span>
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
            <img src="https://avatars.githubusercontent.com/u/292966275?v=4" alt="Tanuku Akhil" />
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
          <h2>Projects built to solve<br />real problems.</h2>
          <a href="https://github.com/devakhil06" target="_blank" rel="noreferrer">
            All GitHub projects <Arrow diagonal />
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a className={`project-card ${project.className} reveal`} href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <div className="project-topline">
                <span>{project.number}</span>
                <span>{project.eyebrow}</span>
                <span className="project-arrow"><Arrow diagonal /></span>
              </div>
              <div className="project-visual" aria-hidden="true">
                {project.className === "metrivo" ? (
                  <div className="analytics-window">
                    <div className="window-bar"><i /><i /><i /></div>
                    <div className="chart-copy"><span>Revenue signal</span><strong>+24.8%</strong></div>
                    <div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /></div>
                    <div className="ai-pill">AI analyst · grounded</div>
                  </div>
                ) : (
                  <div className="board-window">
                    <div className="board-sidebar"><i /><i /><i /><i /></div>
                    <div className="board-column"><span>IN PROGRESS</span><i /><i /></div>
                    <div className="board-column"><span>REVIEW</span><i /><i /><i /></div>
                  </div>
                )}
              </div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-intro reveal">
          <p className="kicker">ABOUT</p>
          <h2>Curious by default.<br />Practical by choice.</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy reveal">
            <p className="large-copy">
              I learn by building, testing and improving. That loop has shaped how I approach both intelligent systems and everyday problem-solving.
            </p>
            <p>
              I&apos;m pursuing a B.Tech in Computer Science, specialising in Artificial Intelligence and Machine Learning at CVR College of Engineering. I enjoy turning complex ideas into systems that feel clear, useful and reliable.
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
            <h2>The stack behind<br />the work.</h2>
          </div>
          <div className="skill-cloud" aria-label="Technical skills">
            {skills.map((skill, index) => <span className="reveal" style={{ transitionDelay: `${index * 45}ms` }} key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="section credentials-section" id="credentials">
        <div className="credential-columns">
          <div className="achievement-block reveal">
            <p className="kicker">MILESTONES</p>
            <h2>Proof in<br />the process.</h2>
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
