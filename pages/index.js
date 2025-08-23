import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "900px",
          margin: "3rem auto",
          padding: "2rem",
          backgroundColor: "#f5f5f5",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <img
          src="https://raw.githubusercontent.com/mohamedabusrea/mohamedabusrea/master/profile-img.png"
          alt="Ahmed Soliman"
          style={{
            width: "180px",
            borderRadius: "50%",
            marginBottom: "1.5rem",
          }}
        />
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          Hi, I'm Ahmed Soliman 👋
        </h1>
        <p style={{ marginBottom: "1rem" }}>
          Software developer passionate about creating technology to elevate
          people. I work with <strong>PHP, MySQL</strong> and{" "}
          <strong>JavaScript</strong>.
        </p>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <a
            href="https://twitter.com/ahmeds_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.shields.io/badge/twitter-%231FA1F1?style=flat&logo=twitter&logoColor=white" />
          </a>
        </div>
        <div style={{ textAlign: "center", lineHeight: "1.6" }}>
          <h4>- 🔭 I'm a software developer in Germany</h4>
          <h4>
            - 💬 Ask me about <strong>PHP and Backend</strong>
          </h4>
        </div>
      </section>

      {/* Blog Section */}
      <section
        style={{ maxWidth: "900px", margin: "3rem auto", padding: "0 1rem" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "2rem",
            color: "#111",
          }}
        >
          Blog
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "grid",
            gap: "1rem",
          }}
        >
          {allPostsData.map(({ id, date, title }) => (
            <li
              key={id}
              style={{
                padding: "1rem 1.5rem",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 6px 15px rgba(0,0,0,0.05)",
                transition: "transform 0.2s",
              }}
            >
              <Link href={`/posts/${id}`}>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#0070f3",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                  }}
                >
                  {title}
                </a>
              </Link>
              <br />
              <small style={{ color: "#666", fontSize: "0.85rem" }}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}
