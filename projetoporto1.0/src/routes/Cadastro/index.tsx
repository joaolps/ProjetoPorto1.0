import Cadastrar from "../../components/Cadastrar/Cadastrar";
import Login from "../../components/Login/Login";
import styles from "./Cadastro.module.css"

export default function Cadastro() {

  document.title = "Cadastro"
  return (
    <div className={styles.conteudo}>
      <Cadastrar />
      <Login />
    </div>
  )
}
