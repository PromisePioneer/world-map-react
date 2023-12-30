import styles from "./css-modules/Logo.module.css";

function Logo() {
  return <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />;
}

export default Logo;
