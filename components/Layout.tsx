
import Link from "next/link";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.site}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          Viaje+
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Início</Link>
          <Link href="/destinos">Destinos</Link>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>© 2026 Viaje+ | Explore o mundo!</p>
      </footer>
    </div>
  );
}
