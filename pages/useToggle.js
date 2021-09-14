import ToggleComponment from "@components/customHooks/useToggle";
import Navbar from "@components/Navbar";

import styles from "@styles/Home.module.css";

export default function ReferenceExample() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <ToggleComponment />
        <p className={styles.explination}>
          This small hooks allows for an easy toggle between a true and false
          vlaue
        </p>
      </div>
    </>
  );
}
