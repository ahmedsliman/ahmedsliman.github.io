import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";
import { useEffect } from "react";

export default function Post({ postData }) {
  const url = `https://ahmedsliman.github.io/posts/${postData.id}`;

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": postData.title,
      "description": postData.excerpt,
      "datePublished": postData.date,
      "url": url,
      "author": {
        "@type": "Person",
        "name": "Ahmed Soliman",
        "url": "https://ahmedsliman.github.io"
      }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { if (document.head.contains(script)) document.head.removeChild(script); };
  }, [postData.id]);

  return (
    <Layout>
      <Head>
        <title>{postData.title} | Ahmed Soliman</title>
        <meta name="description" content={postData.excerpt} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={`${postData.title} | Ahmed Soliman`} />
        <meta property="og:description" content={postData.excerpt} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${postData.title} | Ahmed Soliman`} />
        <meta name="twitter:description" content={postData.excerpt} />
      </Head>
      <article style={{ maxWidth: "min(620px, 100%)" }}>
        <h1 style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "1.4rem",
          fontWeight: "600",
          letterSpacing: "-0.02em",
          lineHeight: 1.3,
          margin: "0 0 0.5rem",
          color: "var(--text)",
        }}>
          {postData.title}
        </h1>
        <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "2rem" }}>
          <Date dateString={postData.date} />
        </div>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <style>{`
        .post-content { line-height: 1.75; }
        .post-content h2 { font-family: 'IBM Plex Mono', monospace; font-size: 1.05rem; font-weight: 600; margin: 2rem 0 0.75rem; }
        .post-content h3 { font-size: 0.95rem; font-weight: 600; margin: 1.5rem 0 0.5rem; }
        .post-content p  { margin: 0 0 1rem; color: var(--text); }
        .post-content a  { color: var(--accent); }
        .post-content code { font-family: 'IBM Plex Mono', monospace; font-size: 0.82em; background: var(--border); padding: 0.15em 0.4em; border-radius: 3px; }
        .post-content pre { background: #1a1a1a; color: #f0ece4; padding: 1rem 1.25rem; border-radius: 6px; overflow-x: auto; margin: 1.25rem 0; }
        .post-content pre code { background: none; padding: 0; font-size: 0.82rem; }
        .post-content blockquote { border-left: 2px solid var(--border); margin: 1.25rem 0; padding: 0 0 0 1rem; color: var(--muted); }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}
