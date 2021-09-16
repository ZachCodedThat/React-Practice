import TimoutComponent from "@customHooks/useTimeOut";
import Navbar from "@components/Navbar";

import styles from "@styles/Home.module.css";

export default function ReferenceExample() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <TimoutComponent />
        <p className={styles.explination}>
          This hook allows you to set timeout functions which can be cleared
          using the "clear" button while the "reset" button reactivates the 1
          second clear function.
        </p>
      </div>
    </>
  );
}
