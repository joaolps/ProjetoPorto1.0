import styles from "./Cabecalho.module.css"
import logoPorto from "/img/porto-seguro.png"
import { Link } from "react-router-dom"

export default function Cabecalho() {
  return (
    <header>
    <nav className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img src={logoPorto} alt="logo da porto seguro" />
      </Link>
      <label htmlFor="pesquisa">
        <input
          type="text"
          className={styles.searchTxt}
          placeholder="Pesquisar..."
        /></label>
      <div className={styles.navCriar}>
        <Link to="/cadastro">Conta</Link>
      </div>
    </nav>
  </header>
  )
}
