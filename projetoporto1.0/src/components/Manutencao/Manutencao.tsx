import styles from "./Manutencao.module.css"
import { Link } from "react-router-dom";

export default function Manutencao() {
  return (
    <nav className={styles.pagina}>
      <div className={styles.ttConteudo}>
        <h1>MANUTENÇÃO AUTOMOTIVA</h1>
      </div>
      <div className={styles.texto}>
        <p>A manutenção automotiva refere-se ao
          conjunto de atividades planejadas e
          executadas para garantir o funcionamento
          seguro, eficiente e durável de veículos
          motorizados. Ela engloba uma variedade
          de procedimentos, incluindo inspeções
          regulares, troca de óleo, substituição
          de peças desgastadas, ajustes mecânicos,
          reparos e diagnósticos de problemas mecânicos,
          elétricos ou eletrônicos.
        </p>
        <p>
          Essas atividades são realizadas de acordo com as
          recomendações do fabricante do veículo e podem variar
          dependendo do tipo de veículo, sua quilometragem, condições
          de operação e outros fatores. A manutenção automotiva é
          crucial para garantir a segurança dos ocupantes do
          veículo, bem como para preservar o valor e a
          confiabilidade do mesmo ao longo do tempo. Além disso,
          uma manutenção adequada pode ajudar a evitar problemas
          mecânicos graves e custosos no futuro.
        </p>
        
      </div>
      <Link to="/mais" className={styles.btnMais}>Mais...</Link>
    </nav>
  )
}
