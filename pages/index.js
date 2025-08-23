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
          backgroundColor: "#f5f5f5",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <p>Software developer passionate about creating technology to elevate people. I work with <strong>PHP, MySQL</strong> and{" "}  <strong>JavaScript</strong>. </p>
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
              <Link href={`/posts/${id}`} legacyBehavior>
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
