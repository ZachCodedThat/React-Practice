import React from "react";
import { useRouter } from "next/router";
import styles from "@styles/Home.module.css";

export default function Navbar() {
  const router = useRouter();
  return (
    <header>
      <div className={styles.navbar}>
        <button
          className={styles.button}
          type="button"
          onClick={() => router.push("/")}
        >
          Back
        </button>
      </div>
    </header>
  );
}
