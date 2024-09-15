import TextoMais from "../../components/TextoMais/TextoMais"
import TextoMaisD from "../../components/TextoMaisD/TextoMaisD"
import styles from "./Mais.module.css"

export default function Mais() {

  document.title = "Mais Informações"
  return (
    <section className={styles.conteudo}>
      <TextoMais />
      <TextoMaisD />
    </section>
  )
}
