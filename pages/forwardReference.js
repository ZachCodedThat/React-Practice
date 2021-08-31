import FRParentInput from "@components/forwardRef";
import styles from "@styles/Home.module.css";
import Navbar from "@components/Navbar";

export default function forwardReferenceExample() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <FRParentInput />
        <p className={styles.explination}>
          notice the button produced by the Parent component focuses the cursor
          to the input box made by the child component.
        </p>
      </div>
    </>
  );
}
