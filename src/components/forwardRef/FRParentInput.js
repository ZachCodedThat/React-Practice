import React, { createRef } from "react";
import FRInputs from "./FRInputs";
import styles from "@styles/Home.module.css";

export default function FRParentInput() {
  const inputRef = createRef();

  const clickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <div className={styles.insideContainer}>
      <FRInputs ref={inputRef} />
      <button className={styles.innerButton} onClick={clickHandler}>
        Focus input
      </button>
    </div>
  );
}
