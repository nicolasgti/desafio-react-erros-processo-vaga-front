import styles from "./header.module.css";
import logo from "../../assets/logo.svg";

export function Header() {
  //reforço da semantica, adiçao de um fallback e remocao de alt desnecessario
  return (
    <header className={styles.header} role="banner"> 
      <img src={logo} alt="Logotipo da aplicação Todo" onError={(e) => (e.currentTarget.style.display = 'none')} />
      <strong style={{ display: 'none' }}>Todo App</strong>
    </header>
  );
}