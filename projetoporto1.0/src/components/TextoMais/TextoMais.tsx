import styles from "./TextoMais.module.css"

export default function TextoMais() {
  return (
    <nav className={styles.pagina}>
      <div className={styles.ttConteudoD}>
        <h1>Primeiros Passos</h1>
      </div>
      <div className={styles.textoE}>
        <p>Verifique o Manual do Proprietário: Consulte o manual do proprietário do seu veículo para determinar os
          intervalos recomendados de manutenção e os serviços necessários para o seu modelo específico.</p>

         <p>Identifique as Necessidades de Manutenção: Observe quaisquer problemas ou sintomas que o seu carro esteja
          apresentando, como luzes de aviso acesas no painel, ruídos estranhos, vazamentos de fluidos ou problemas de
          desempenho. </p>

         <p>Escolha uma Oficina Confiável: Pesquise e escolha uma oficina ou concessionária confiável e de boa reputação
          para realizar a manutenção do seu veículo. Verifique as avaliações online e pergunte a amigos e familiares por
          recomendações.</p>

        <p>Entre em Contato com a Oficina: Entre em contato com a oficina escolhida por telefone, e-mail ou pessoalmente
          para agendar um horário de manutenção. Esteja preparado para fornecer informações sobre o seu veículo, como
          marca, modelo, ano e quilometragem.</p>
      </div>
    </nav>
  )
}
