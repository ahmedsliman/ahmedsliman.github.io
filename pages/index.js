import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { useEffect } from "react";

const PROJECTS = [
  {
    name: "Concept Atlas",
    url: "https://ahmedsliman.github.io/concept-atlas/",
    description: "Interactive visual explorer for DDD concepts and software design patterns.",
    emoji: "🗺️",
    accentColor: "#8b5cf6",
    accentBg: "#faf5ff",
    hidden: false,
  },
  {
    name: "Wordle DE",
    url: "https://ahmedsliman.github.io/wordle-de/",
    description: "German Wordle with single-player and 2-player online multiplayer modes.",
    emoji: "🎮",
    accentColor: "#06b6d4",
    accentBg: "#ecfdf5",
    hidden: false,
  },
  {
    name: "Terminal Gym",
    url: "https://terminal-gym.onrender.com/",
    description: "Learn Linux by doing — 17 hands-on missions straight from your terminal. Web interface included.",
    emoji: "💻",
    accentColor: "#10b981",
    accentBg: "#f0fdf4",
    liveUrl: "https://terminal-gym.onrender.com/",
    githubUrl: "https://github.com/ahmedsliman/terminal-gym",
    hidden: false,
  },
  {
    name: "Security Gym",
    url: "https://github.com/ahmedsliman/security-gym",
    description: "Security challenges and exercises for hands-on learning.",
    emoji: "🔐",
    accentColor: "#ef4444",
    accentBg: "#fef2f2",
    hidden: true,
  },
];

const STACK = ["PHP", "Laravel", "Symfony", "JavaScript", "Vue", "TypeScript"];

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ahmed Soliman",
  "url": "https://ahmedsliman.github.io",
  "jobTitle": "Full Stack Software Engineer",
  "worksFor": { "@type": "Organization", "name": "epay, a Euronet Company" },
  "address": { "@type": "PostalAddress", "addressCountry": "DE" },
  "knowsAbout": ["PHP", "Laravel", "Symfony", "JavaScript", "Vue.js", "TypeScript"],
  "sameAs": [
    "https://www.linkedin.com/in/ahmedsliman/",
    "https://github.com/ahmedsliman",
    "https://x.com/ahmeds_link"
  ]
};

export default function Home({ allPostsData }) {
  const visibleProjects = PROJECTS.filter((p) => !p.hidden);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(PERSON_SCHEMA);
    document.head.appendChild(script);
    return () => { if (document.head.contains(script)) document.head.removeChild(script); };
  }, []);

  return (
    <Layout home>
      <Head>
        <title>Ahmed Soliman — Full Stack Software Engineer</title>
        <meta name="description" content="Full Stack Software Engineer based in Germany. Building with PHP, Laravel, Symfony, JavaScript, Vue, and TypeScript. Currently at epay." />
        <link rel="canonical" href="https://ahmedsliman.github.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ahmedsliman.github.io/" />
        <meta property="og:title" content="Ahmed Soliman — Full Stack Software Engineer" />
        <meta property="og:description" content="Full Stack Software Engineer based in Germany. Building with PHP, Laravel, Symfony, JavaScript, Vue, and TypeScript." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahmed Soliman — Full Stack Software Engineer" />
        <meta name="twitter:description" content="Full Stack Software Engineer based in Germany. Building with PHP, Laravel, Symfony, JavaScript, Vue, and TypeScript." />
      </Head>

      {/* Bio */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ margin: "0 0 0.85rem", fontSize: "0.85rem", color: "var(--muted)" }}>
          Currently at <strong style={{ color: "var(--text)", fontWeight: "500" }}>epay</strong>, building payment solutions.
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          {STACK.map((tech) => (
            <span key={tech} style={{
              fontSize: "0.75rem",
              fontWeight: "600",
              color: "var(--accent)",
              background: "var(--accent-bg)",
              padding: "0.2rem 0.65rem",
              borderRadius: "999px",
              letterSpacing: "0.01em",
            }}>
              {tech}
            </span>
          ))}
        </div>
        <a
          href="https://www.linkedin.com/in/ahmedsliman/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "0.82rem", fontWeight: "500", color: "var(--accent)" }}
        >
          Get in touch →
        </a>
      </div>

      {/* Two-column grid */}
      <div className="home-grid">

        {/* Projects — bordered cards */}
        <section>
          <div style={{
            fontSize: "0.7rem",
            fontWeight: "700",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "1rem",
          }}>
            Projects
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {visibleProjects.map((project) => (
              <li key={project.name}>
                <div
                  className="project-card"
                  style={{
                    border: `2px solid ${project.accentColor}`,
                    borderRadius: "8px",
                    padding: "1rem 1.1rem",
                    background: project.accentBg,
                    transition: "all 0.2s ease",
                    transform: "translateY(0)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = project.accentColor;
                    e.currentTarget.style.boxShadow = `0 8px 16px ${project.accentColor}20`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = project.accentColor;
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flex: 1 }}>
                      <span style={{ fontSize: "1.4rem" }}>{project.emoji}</span>
                      <span style={{ fontWeight: "600", fontSize: "0.9rem", color: "var(--text)" }}>
                        {project.name}
                      </span>
                    </div>
                  </div>
                  <p style={{ margin: "0 0 0.7rem 0", fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.55 }}>
                    {project.description}
                  </p>
                  <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          color: project.accentColor,
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          padding: "0.35rem 0.7rem",
                          borderRadius: "4px",
                          background: "rgba(255,255,255,0.5)",
                          transition: "all 0.15s",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = project.accentColor;
                          e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.5)";
                          e.currentTarget.style.color = project.accentColor;
                        }}
                      >
                        Live Demo →
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          color: "var(--muted)",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          padding: "0.35rem 0.7rem",
                          borderRadius: "4px",
                          background: "rgba(0,0,0,0.03)",
                          transition: "all 0.15s",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = "rgba(0,0,0,0.1)";
                          e.currentTarget.style.color = "var(--text)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = "rgba(0,0,0,0.03)";
                          e.currentTarget.style.color = "var(--muted)";
                        }}
                      >
                        Source
                      </a>
                    )}
                    {!project.liveUrl && !project.githubUrl && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          color: project.accentColor,
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          padding: "0.35rem 0.7rem",
                          borderRadius: "4px",
                          background: "rgba(255,255,255,0.5)",
                          transition: "all 0.15s",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = project.accentColor;
                          e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.5)";
                          e.currentTarget.style.color = project.accentColor;
                        }}
                      >
                        Visit →
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Writing — clean table rows */}
        <section>
          <div style={{
            fontSize: "0.7rem",
            fontWeight: "700",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "1rem",
          }}>
            Writing
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {allPostsData.map(({ id, date, title }) => (
              <li
                key={id}
                style={{
                  borderTop: "1px solid var(--border)",
                  padding: "0.85rem 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "1rem",
                }}
              >
                <Link
                  href={`/posts/${id}`}
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    color: "var(--text)",
                    flexShrink: 1,
                    lineHeight: 1.4,
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}
                >
                  {title}
                </Link>
                <span style={{ fontSize: "0.72rem", color: "var(--muted)", whiteSpace: "nowrap", flexShrink: 0 }}>
                  <Date dateString={date} short />
                </span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}
