import styles from "./Header.module.css";

//Шапка сайта

function Header() {
  return (
    <header>
      <p>
        <span className={styles.logo}>Жилфонд</span>
      </p>

      <p className='user'>Пользователь</p>
    </header>
  );
}

export default Header;
