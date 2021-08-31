import Navbar from "@components/Navbar";
import RefsDemo from "@components/refsDemo";
import styles from "@styles/Home.module.css";

export default function ReferenceExample() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <RefsDemo />
      </div>
    </>
  );
}
