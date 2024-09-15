import styles from "./TextoMaisD.module.css"

export default function TextoMaisD() {
  return (
    <nav className={styles.pagina}>
    <div className={styles.textoD}>
      <p>Descreva os Problemas ou Serviços Necessários: Explique os problemas que você está enfrentando ou os serviços
        que deseja realizar durante a manutenção do seu veículo. Quanto mais detalhes você fornecer, melhor será para
        a oficina entender suas necessidades.</p>

       <p>Agende uma Data e Hora Conveniente: Escolha uma data e hora que seja conveniente para você deixar o seu carro
        na oficina para a manutenção. Certifique-se de considerar o tempo necessário para concluir os serviços
        solicitados.</p>

       <p> Confirme o Agendamento: Confirme o agendamento com a oficina antes da data marcada para garantir que tudo
        esteja programado corretamente.</p>

       <p>Prepare-se para a Manutenção: Antes de levar o seu veículo para a oficina, certifique-se de remover quaisquer
        objetos pessoais do interior e limpar o carro, se necessário. Isso facilitará o trabalho da equipe de
        manutenção e garantirá uma avaliação mais precisa do estado do veículo.</p>
    </div>
  </nav>
  )
}
