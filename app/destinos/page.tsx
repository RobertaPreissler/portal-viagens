
import CardDestino from "../../components/CardDestino";
import { destinos } from "../../data/destinos";
import styles from "./page.module.css";

export default function DestinosPage() {
  return (
    <section className={styles.secao}>
      <div className={styles.cabecalho}>
        <h1 className={styles.titulo}>Explore nossos destinos</h1>

        <p className={styles.descricao}>
          Descubra lugares incríveis, conheça novas culturas
          e planeje sua próxima aventura com a Viaje+.
        </p>
      </div>

      <div className={styles.lista}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            destino={destino}
          />
        ))}
      </div>
    </section>
  );
}
