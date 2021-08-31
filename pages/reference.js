import Navbar from "@components/Navbar";
import RefsDemo from "@components/refsDemo";
import styles from "@styles/Home.module.css";

export default function ReferenceExample() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <RefsDemo />
        <p className={styles.explination}>
          notice on page load/reload the focus is on the input by default. The
          button also points the focus the input box.
        </p>
      </div>
    </>
  );
}
