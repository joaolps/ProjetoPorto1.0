import Agendar from "../../components/Agendar/Agendar";
import Manutencao from "../../components/Manutencao/Manutencao";
import styles from "./Inicio.module.css"


export default function Inicio() {

  document.title = "Página Inicial"

  return (
    <section className={styles.conteudo}>
      <Manutencao />
      <Agendar />
    </section>
  )
}
