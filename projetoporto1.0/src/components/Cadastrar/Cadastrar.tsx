import { useState } from "react";
import styles from "./Cadastrar.module.css";

export default function Cadastrar() {
    const [nome, setNome] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const [validacaoNome, setValidacaoNome] = useState<boolean>(true);
    const [validacaoCpf, setValidacaoCpf] = useState<boolean>(true);
    const [validacaoTelefone, setValidacaoTelefone] = useState<boolean>(true);
    const [validacaoEmail, setValidacaoEmail] = useState<boolean>(true);
    const [validacaoSenha, setValidacaoSenha] = useState<boolean>(true);

    const validarNome = (): boolean => {
        if (nome.length > 3) {
            setValidacaoNome(true);
            return true;
        } else {
            setValidacaoNome(false);
            return false;
        }
    };

    const validarCpf = (): boolean => {
        if (cpf.length === 11) {
            setValidacaoCpf(true);
            return true;
        } else {
            setValidacaoCpf(false);
            return false;
        }
    };

    const validarTelefone = (): boolean => {
        if (telefone.length >= 10) {
            setValidacaoTelefone(true);
            return true;
        } else {
            setValidacaoTelefone(false);
            return false;
        }
    };

    const validarEmail = (): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setValidacaoEmail(true);
            return true;
        } else {
            setValidacaoEmail(false);
            return false;
        }
    };

    const validarSenha = (): boolean => {
        if (senha.length >= 8) {
            setValidacaoSenha(true);
            return true;
        } else {
            setValidacaoSenha(false);
            return false;
        }
    };

    const verificarErro = () => {
        const nomeValido = validarNome();
        const cpfValido = validarCpf();
        const telefoneValido = validarTelefone();
        const emailValido = validarEmail();
        const senhaValida = validarSenha();

        if (nomeValido && cpfValido && telefoneValido && emailValido && senhaValida) {
            handleCadastro();
        }
    };

    const handleCadastro = () => {
        const usuario = {
            nome,
            cpf,
            telefone,
            email,
            senha,
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));
        alert("Cadastro realizado com sucesso!");
    };

    return (
        <section className={styles.cadastro}>
            <div>
                <h1 className={styles.cadastroH1}>CADASTRO</h1>
            </div>
            <div className={styles.searchBoxL}>
                <ul>
                    <li>
                        <h2>Nome:</h2>
                        <input
                            type="text"
                            className={styles.cadastroInput}
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        {!validacaoNome && <p className={styles.msgErro}>Nome muito curto.</p>}
                    </li>
                    <li>
                        <h2>Data de Nascimento:</h2>
                        <input
                            type="date"
                            className={styles.cadastroInput}
                            placeholder="Digite sua data de nascimento"
                        />
                    </li>
                    <li>
                        <h2>CPF:</h2>
                        <input
                            type="text"
                            className={styles.cadastroInput}
                            placeholder="Digite seu CPF"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                        {!validacaoCpf && <p className={styles.msgErro}>CPF deve ter 11 dígitos.</p>}
                    </li>
                    <li>
                        <h2>Telefone:</h2>
                        <input
                            type="text"
                            className={styles.cadastroInput}
                            placeholder="Digite seu telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                        {!validacaoTelefone && <p className={styles.msgErro}>Telefone inválido.</p>}
                    </li>
                    <li>
                        <h2>Email:</h2>
                        <input
                            type="text"
                            className={styles.cadastroInput}
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {!validacaoEmail && <p className={styles.msgErro}>Email inválido.</p>}
                    </li>
                    <li>
                        <h2>Senha:</h2>
                        <input
                            type="password"
                            className={styles.cadastroInput}
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        {!validacaoSenha && <p className={styles.msgErro}>A senha deve ter pelo menos 8 caracteres.</p>}
                    </li>
                </ul>
            </div>
            <div className={styles.button}>
                <button onClick={verificarErro} className={styles.cadastroButton}>
                    Cadastrar
                </button>
            </div>
        </section>
    );
}
