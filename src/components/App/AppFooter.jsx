import styles from "./css-modules/Sidebar.module.css";

function AppFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copyright {new Date().getFullYear()} by WorldWise Inc
      </p>
    </footer>
  );
}

export default AppFooter;
