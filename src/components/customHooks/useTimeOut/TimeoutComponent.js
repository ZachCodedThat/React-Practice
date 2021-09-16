import { useState } from "react";
import useTimeout from "./useTimeout";

import styles from "@styles/Home.module.css";

export default function TimeoutComponent() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);

  return (
    <div className={styles.container}>
      <div>{count}</div>
      <button className={styles.button} onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
      <button className={styles.button} onClick={clear}>
        Clear Timeout
      </button>
      <button className={styles.button} onClick={reset}>
        Reset Timeout
      </button>
    </div>
  );
}
