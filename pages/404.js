import Layout from '../components/layout';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout>
      <div style={{ padding: "4rem 0", textAlign: "center" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1rem" }}>
          404
        </p>
        <h1 style={{ fontSize: "1.4rem", fontWeight: "600", color: "var(--text)", margin: "0 0 0.75rem", letterSpacing: "-0.03em" }}>
          Page not found
        </h1>
        <p style={{ fontSize: "0.85rem", color: "var(--muted)", margin: "0 0 2rem" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" style={{ fontSize: "0.85rem", fontWeight: "500", color: "var(--accent)" }}>
          ← Back to home
        </Link>
      </div>
    </Layout>
  );
}
