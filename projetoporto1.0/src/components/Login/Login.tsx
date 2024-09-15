import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [validacaoEmail, setValidacaoEmail] = useState<boolean>(true);
    const [validacaoSenha, setValidacaoSenha] = useState<boolean>(true);
    const navigate = useNavigate();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validarEmail = (): boolean => {
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
        const emailValido = validarEmail();
        const senhaValida = validarSenha();

        if (emailValido && senhaValida) {
            navigate('/veiculo');
        }
    };

    return (
        <section className={styles.login}>
            <h1 className={styles.loginH1}>LOG-IN</h1>
            <ul>
                <div className={styles.searchBoxL}>
                    <li>
                        <h2>Email:</h2>
                        <input 
                            type="text" 
                            className={styles.loginInput} 
                            placeholder="Digite seu email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {!validacaoEmail && <p className={styles.msgErro}>Email inválido</p>}
                    </li>
                    <li>
                        <h2>Senha:</h2>
                        <input 
                            type="password" 
                            className={styles.loginInput} 
                            placeholder="Digite sua senha" 
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        {!validacaoSenha && <p className={styles.msgErro}>A senha deve ter pelo menos 8 caracteres</p>}
                    </li>
                </div>
            </ul>
            <div className={styles.button}>
                <button onClick={verificarErro} className={styles.loginButton}>Conectar</button>
            </div>
        </section>
    );
}

