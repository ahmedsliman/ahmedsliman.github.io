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
    hidden: false,
  },
  {
    name: "Wordle DE",
    url: "https://ahmedsliman.github.io/wordle-de/",
    description: "German Wordle with single-player and 2-player online multiplayer modes.",
    hidden: false,
  },
  {
    name: "Terminal Gym",
    url: "https://ahmedsliman.github.io/terminal-gym/",
    description: "Learn Linux by doing — 17 hands-on missions straight from your terminal.",
    hidden: false,
  },
  {
    name: "Security Gym",
    url: "https://github.com/ahmedsliman/security-gym",
    description: "Security challenges and exercises for hands-on learning.",
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
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div className="project-card"
                    style={{
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "1rem 1.1rem",
                      background: "var(--bg)",
                      transition: "border-color 0.15s, box-shadow 0.15s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-bg)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
                      <span style={{ fontWeight: "600", fontSize: "0.9rem", color: "var(--text)" }}>
                        {project.name}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, opacity: 0.4 }}>
                        <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.55 }}>
                      {project.description}
                    </p>
                  </div>
                </a>
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
