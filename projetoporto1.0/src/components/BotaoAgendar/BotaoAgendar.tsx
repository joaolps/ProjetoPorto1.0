import { Link } from 'react-router-dom';
import styles from './BotaoAgendar.module.css';

export default function BotaoAgendar() {
  return (
    <div className={styles.container}>
      <Link to="/cadastro" className={styles.button}>
        Gostaria de agendar sua visita?
      </Link>
    </div>
  );
}
