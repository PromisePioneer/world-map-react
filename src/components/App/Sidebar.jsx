import styles from "./css-modules/Sidebar.module.css";
import Logo from "../Reusable/Logo.jsx";
import AppNav from "./AppNav.jsx";
import AppFooter from "./AppFooter.jsx";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/*  necessary for nested routes*/}
      <Outlet />
      <AppFooter />
    </div>
  );
}

export default Sidebar;
