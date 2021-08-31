import React, { forwardRef } from "react";
import styles from "@styles/Home.module.css";

const FRInputs = forwardRef((props, ref) => {
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        ref={ref}
        placeholder="Child component"
      />
    </div>
  );
});

export default FRInputs;
