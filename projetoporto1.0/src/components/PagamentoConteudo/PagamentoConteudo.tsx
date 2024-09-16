import styles from "./PagamentoConteudo.module.css"

export default function PagamentoConteudo() {
  return (
    <section className={styles.conteudo}>
            <div className={styles.fundoAzul}>
                <div className={styles.retanguloCentral}>
                    <div className={styles.quadradoD9}>
                        <div className={styles.textos}>
                            <div>
                                <h1 className={styles.quadradoD9H1}>
                                    Por último, selecione a forma de pagamento para cadastramento do pedido.
                                </h1>
                            </div>
                            <div>
                                <p className={styles.quadradoD9P}>Selecione a forma de pagamento</p>
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Selecione a forma de pagamento" 
                                    className={styles.quadradoD9Input} 
                                />
                            </div>
                        </div>
                        <div>
                            <p className={styles.textoAgendamento}>
                                Em até 30 dias entraremos em contato via email agendando a melhor data para atende-lo!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
