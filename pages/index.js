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

      <section
        className={utilStyles.headingMd}
        style={{ textAlign: "center", marginBottom: "3rem" }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          Hi, I'm Ahmed Soliman 👋
        </h1>

        <p style={{ marginBottom: "1rem" }}>
          <a
            href="https://twitter.com/ahmeds_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.shields.io/badge/twitter-%231FA1F1?style=flat&logo=twitter&logoColor=white" />
          </a>
        </p>

        <img
          src="https://raw.githubusercontent.com/mohamedabusrea/mohamedabusrea/master/profile-img.png"
          style={{
            float: "right",
            width: "25%",
            borderRadius: "8px",
            marginLeft: "1rem",
            marginBottom: "1rem",
          }}
          alt="Ahmed Soliman"
        />

        <p style={{ lineHeight: "1.7", maxWidth: "700px", margin: "0 auto" }}>
          I'm a software developer passionate about creating technology to
          elevate people. I enjoy working with <strong>PHP, MySQL</strong> and{" "}
          <strong>JavaScript</strong>.
        </p>

        <div style={{ marginTop: "1.5rem", lineHeight: "1.6" }}>
          <h4>- 🔭 I'm a software developer in Germany</h4>
          <h4>
            - 💬 Ask me about <strong>PHP and Backend</strong>
          </h4>
        </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2
          className={utilStyles.headingLg}
          style={{ textAlign: "center", marginBottom: "1.5rem" }}
        >
          Blog
        </h2>
        <ul
          className={utilStyles.list}
          style={{ maxWidth: "700px", margin: "0 auto", padding: 0 }}
        >
          {allPostsData.map(({ id, date, title }) => (
            <li
              className={utilStyles.listItem}
              key={id}
              style={{
                marginBottom: "1rem",
                borderBottom: "1px solid #eee",
                paddingBottom: "0.5rem",
              }}
            >
              <Link href={`/posts/${id}`}>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#0070f3",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                  }}
                >
                  {title}
                </a>
              </Link>
              <br />
              <small
                className={utilStyles.lightText}
                style={{ color: "#666", fontSize: "0.85rem" }}
              >
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
