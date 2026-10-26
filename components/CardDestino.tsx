
import type { Destino } from "../data/destinos";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
  destino: Destino;
}

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <article className={styles.card}>
      <img
        src={destino.imagem}
        alt={destino.nome}
        className={styles.imagem}
      />

      <div className={styles.conteudo}>
        <h2>{destino.nome}</h2>
        <p>{destino.descricao}</p>
      </div>
    </article>
  );
}
