import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

const name = 'Ahmed Soliman';
export const siteTitle = 'Ahmed Soliman';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="https://github.com/ahmedsliman.png" />
        <meta name="twitter:image" content="https://github.com/ahmedsliman.png" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerLeft}>
          {home ? (
            <span className={styles.headerName}>{name}</span>
          ) : (
            <Link href="/" className={styles.headerName}>{name}</Link>
          )}
          <div className={styles.headerRole}>Full Stack Software Engineer · Germany</div>
        </div>
        <nav className={styles.nav}>
          <a href="https://www.linkedin.com/in/ahmedsliman/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/ahmedsliman" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://x.com/ahmeds_link" target="_blank" rel="noopener noreferrer">X</a>
        </nav>
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back</Link>
        </div>
      )}

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Ahmed Soliman</span>
        <span className={styles.footerLinks}>
          <a href="https://www.linkedin.com/in/ahmedsliman/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/ahmedsliman" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://x.com/ahmeds_link" target="_blank" rel="noopener noreferrer">X</a>
        </span>
      </footer>
    </div>
  );
}
