import MapaCentros from "../../components/Mapa/MapaCentros";
import styles from "./PertoDeVoce.module.css";

export default function PertoDeVoce() {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Perto de você</h1>
        <p className={styles.description}>Encontre os centros automotivos mais próximos para atender suas necessidades.</p>
      </div>
      <div className={styles.mapSection}>
        <MapaCentros />
      </div>
    </div>
  );
}
