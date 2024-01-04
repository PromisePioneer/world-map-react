import Sidebar from "../components/App/Sidebar.jsx";
import styles from "./AppLayout.module.css";
import Map from "../components/Map/Map.jsx";
import User from "../components/User.jsx";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
