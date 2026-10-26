
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.titulo}>O mundo espera por você!</h1>

      <p className={styles.descricao}>
        Descubra lugares incríveis, conheça novas culturas
        e encontre inspiração para sua próxima aventura.
      </p>

      <Link href="/destinos" className={styles.botao}>
        Explorar destinos
      </Link>
    </section>
  );
}
