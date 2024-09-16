import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CadastroVeiculo.module.css";

export default function CadastroVeiculo() {
  const navegar = useNavigate();

  const [veiculo, setVeiculo] = useState<string>("");
  const [modeloVeiculo, setModeloVeiculo] = useState<string>("");
  const [placa, setPlaca] = useState<string>("");
  const [ano, setAno] = useState<string>("");
  const [problema, setProblema] = useState<string>("");
  const [passageiros, setPassageiros] = useState<string>("");

  const [logradouro, setLogradouro] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [complemento, setComplemento] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");
  const [cep, setCep] = useState<string>("");

  const [validacaoVeiculo, setValidacaoVeiculo] = useState<boolean>(true);
  const [validacaoModeloVeiculo, setValidacaoModeloVeiculo] = useState<boolean>(true);
  const [validacaoPlaca, setValidacaoPlaca] = useState<boolean>(true);
  const [validacaoAno, setValidacaoAno] = useState<boolean>(true);
  const [validacaoProblema, setValidacaoProblema] = useState<boolean>(true);
  const [validacaoPassageiros, setValidacaoPassageiros] = useState<boolean>(true);

  const [validacaoLogradouro, setValidacaoLogradouro] = useState<boolean>(true);
  const [validacaoNumero, setValidacaoNumero] = useState<boolean>(true);
  const [validacaoBairro, setValidacaoBairro] = useState<boolean>(true);
  const [validacaoCep, setValidacaoCep] = useState<boolean>(true);

  // Funções de validação para o veículo
  const validarVeiculo = (): boolean => {
    if (veiculo.length > 0) {
      setValidacaoVeiculo(true);
      return true;
    } else {
      setValidacaoVeiculo(false);
      return false;
    }
  };

  const validarModeloVeiculo = (): boolean => {
    if (modeloVeiculo.length > 0) {
      setValidacaoModeloVeiculo(true);
      return true;
    } else {
      setValidacaoModeloVeiculo(false);
      return false;
    }
  };

  const validarPlaca = (): boolean => {
    if (placa.length === 7) {
      setValidacaoPlaca(true);
      return true;
    } else {
      setValidacaoPlaca(false);
      return false;
    }
  };

  const validarAno = (): boolean => {
    if (ano.length === 4 && /^[0-9]+$/.test(ano)) {
      setValidacaoAno(true);
      return true;
    } else {
      setValidacaoAno(false);
      return false;
    }
  };

  const validarProblema = (): boolean => {
    if (problema.length > 0) {
      setValidacaoProblema(true);
      return true;
    } else {
      setValidacaoProblema(false);
      return false;
    }
  };

  const validarPassageiros = (): boolean => {
    if (/^[0-9]+$/.test(passageiros) && passageiros.length > 0) {
      setValidacaoPassageiros(true);
      return true;
    } else {
      setValidacaoPassageiros(false);
      return false;
    }
  };

  const validarLogradouro = (): boolean => {
    if (logradouro.length > 0) {
      setValidacaoLogradouro(true);
      return true;
    } else {
      setValidacaoLogradouro(false);
      return false;
    }
  };

  const validarNumero = (): boolean => {
    if (/^[0-9]+$/.test(numero)) {
      setValidacaoNumero(true);
      return true;
    } else {
      setValidacaoNumero(false);
      return false;
    }
  };

  const validarBairro = (): boolean => {
    if (bairro.length > 0) {
      setValidacaoBairro(true);
      return true;
    } else {
      setValidacaoBairro(false);
      return false;
    }
  };

  const validarCep = (): boolean => {
    if (cep.length === 8 && /^[0-9]+$/.test(cep)) {
      setValidacaoCep(true);
      return true;
    } else {
      setValidacaoCep(false);
      return false;
    }
  };

  const verificarErro = () => {
    const veiculoValido = validarVeiculo();
    const modeloVeiculoValido = validarModeloVeiculo();
    const placaValida = validarPlaca();
    const anoValido = validarAno();
    const problemaValido = validarProblema();
    const passageirosValido = validarPassageiros();
    const logradouroValido = validarLogradouro();
    const numeroValido = validarNumero();
    const bairroValido = validarBairro();
    const cepValido = validarCep();

    setValidacaoVeiculo(veiculoValido);
    setValidacaoModeloVeiculo(modeloVeiculoValido);
    setValidacaoPlaca(placaValida);
    setValidacaoAno(anoValido);
    setValidacaoProblema(problemaValido);
    setValidacaoPassageiros(passageirosValido);
    setValidacaoLogradouro(logradouroValido);
    setValidacaoNumero(numeroValido);
    setValidacaoBairro(bairroValido);
    setValidacaoCep(cepValido);

    if (veiculoValido && modeloVeiculoValido && placaValida && anoValido && problemaValido && passageirosValido && logradouroValido && numeroValido && bairroValido && cepValido) {
      navegar("/pagamento");
    }
  };

  return (
    <section className={styles.sectionCadastro}>
        <div className={styles.cadastro}>
        <div className={styles.veiculo}>
      <div>
        <h1 className={styles.cadastroH1}>DADOS DO VEÍCULO</h1>
      </div>
      <div className={styles.searchBoxL}>
        <ul>
          <li>
            <h2>Veículo:</h2>
            <input
              type="text"
              className={styles.cadastroInput}
              placeholder="Selecione seu veículo"
              value={veiculo}
              onChange={(e) => setVeiculo(e.target.value)}
            />
            {!validacaoVeiculo && <p className={styles.msgErro}>Campo obrigatório.</p>}
          </li>
          <li>
            <h2>Modelo do Veículo:</h2>
            <input
              type="text"
              className={styles.cadastroInput}
              placeholder="Selecione o modelo do veículo"
              value={modeloVeiculo}
              onChange={(e) => setModeloVeiculo(e.target.value)}
            />
            {!validacaoModeloVeiculo && <p className={styles.msgErro}>Campo obrigatório.</p>}
          </li>
          <li>
            <h2>Placa:</h2>
            <input
              type="text"
              className={styles.cadastroInput}
              placeholder="Digite a placa do seu veículo"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
            />
            {!validacaoPlaca && <p className={styles.msgErro}>A placa deve ter 7 caracteres.</p>}
          </li>
          <li>
            <h2>Ano:</h2>
            <input
              type="text"
              className={styles.cadastroInput}
              placeholder="Digite o ano do seu veículo"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            />
            {!validacaoAno && <p className={styles.msgErro}>Ano inválido. Deve conter 4 dígitos.</p>}
          </li>
          <li>
            <h2>Problema no Veículo:</h2>
            <input
              type="text"
              className={styles.cadastroInput}
              placeholder="Digite o problema do veículo"
              value={problema}
              onChange={(e) => setProblema(e.target.value)}
            />
            {!validacaoProblema && <p className={styles.msgErro}>Campo obrigatório.</p>}
          </li>
          <li>
            <h2>Passageiros:</h2>
            <input
              type="text"
              className={styles.cadastroInput}
              placeholder="Digite a quantidade de passageiros"
              value={passageiros}
              onChange={(e) => setPassageiros(e.target.value)}
            />
            {!validacaoPassageiros && <p className={styles.msgErro}>Digite um número válido.</p>}
          </li>
        </ul>
      </div>
      </div>
      <div className={styles.endereco}>
      <div className={styles.respostasEndereco}>
        <h1>ENDEREÇO</h1>
        <h2>Logradouro:</h2>
        <input
          type="text"
          className={styles.respostaTxt}
          placeholder="Digite o logradouro"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
        />
        {!validacaoLogradouro && <p className={styles.msgErro}>Campo obrigatório.</p>}
        <h2>Número:</h2>
        <input
          type="text"
          className={styles.respostaTxt}
          placeholder="Digite o número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        {!validacaoNumero && <p className={styles.msgErro}>Número inválido.</p>}
        <h2>Complemento:</h2>
        <input
          type="text"
          className={styles.respostaTxt}
          placeholder="Digite o complemento (opcional)"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
        />
        <h2>Bairro:</h2>
        <input
          type="text"
          className={styles.respostaTxt}
          placeholder="Digite o bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
        {!validacaoBairro && <p className={styles.msgErro}>Campo obrigatório.</p>}
        <h2>CEP:</h2>
        <input
          type="text"
          className={styles.respostaTxt}
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        {!validacaoCep && <p className={styles.msgErro}>CEP inválido. Deve conter 8 dígitos.</p>}
      </div>
      </div>
      </div>
      <div className={styles.button}>
        <button onClick={verificarErro} className={styles.cadastroButton}>
          Enviar
        </button>
      </div>
    </section>
  );
}