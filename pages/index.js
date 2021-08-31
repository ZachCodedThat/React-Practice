import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <button
          className={styles.button}
          type="button"
          onClick={() => router.push("/reference")}
        >
          Reference example
        </button>
      </div>
      <div className={styles.container}>
        <button
          className={styles.button}
          type="button"
          onClick={() => router.push("/forwardReference")}
        >
          forwardReference example
        </button>
      </div>
    </>
  );
}
