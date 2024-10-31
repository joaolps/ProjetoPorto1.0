import Agendar from "../../components/Agendar/Agendar";
import MenuProblema from "../../components/ProblemaConteudo/MenuProblema";
import styles from "./Inicio.module.css"


export default function Inicio() {

  document.title = "Página Inicial"

  return (
    <section className={styles.conteudo}>
      <MenuProblema />
      <Agendar />
    </section>
  )
}
