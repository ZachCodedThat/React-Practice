import React, { createRef, useEffect } from "react";
import styles from "@styles/Home.module.css";

export default function RefsDemo() {
  const inputRef = createRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const clickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <div className={styles.insideContainer}>
      <input
        className={styles.input}
        type="text"
        ref={inputRef}
        placeholder="ref example"
      />
      <button className={styles.innerButton} onClick={clickHandler}>
        Focus input
      </button>
    </div>
  );
}
