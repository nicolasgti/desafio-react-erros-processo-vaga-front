import styles from "./header.module.css";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header} role="banner"> //reforço da semantica, adiçao de um fallback e remocao de alt desnecessario
      <img src={logo} alt="Logotipo da aplicação Todo" onError={(e) => (e.currentTarget.style.display = 'none')} />
      <strong style={{ display: 'none' }}>Todo App</strong>
    </header>
  );
}