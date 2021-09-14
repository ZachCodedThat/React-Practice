import useToggle from "./useToggle";
import styles from "@styles/Home.module.css";

export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);

  return (
    <div className={styles.container}>
      <strong>
        <div>{value.toString()}</div>
      </strong>
      <button className={styles.button} onClick={toggleValue}>
        Toggle
      </button>
      <button className={styles.button} onClick={() => toggleValue(true)}>
        Make True
      </button>
      <button className={styles.button} onClick={() => toggleValue(false)}>
        Make False
      </button>
    </div>
  );
}
