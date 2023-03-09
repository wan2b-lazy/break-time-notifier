import Head from "next/head";
import styles from "./layout.module.scss";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
