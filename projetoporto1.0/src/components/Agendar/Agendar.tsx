import styles from "./Agendar.module.css";
import agendamento from "/img/adendamento.jpg";
import { Link } from "react-router-dom";

export default function Agendar() {
  return (
    <nav className={styles.clAgendamento}>
      <div className={styles.agendamento}>
        <div>
        <img src={agendamento} alt="imagem do agendamento" />
        <h1>AGENDE JÁ A SUA MANUTENÇÃO!</h1>
        </div>
        <Link to="/cadastro" className={styles.btnLink}>CLIQUE AQUI</Link>
      </div>
    </nav>
  )
}