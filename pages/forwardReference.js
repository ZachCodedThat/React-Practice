import FRParentInput from "@components/forwardRef";
import styles from "@styles/Home.module.css";
import Navbar from "@components/Navbar";

export default function forwardReferenceExample() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <FRParentInput />
      </div>
    </>
  );
}
