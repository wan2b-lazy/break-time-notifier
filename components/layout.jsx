import Head from "next/head";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>title</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
