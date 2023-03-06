import styles from "../styles/globals.module.scss";

export default function AlarmProgress() {
  return (
    <>
      <h1 className={styles.title}>次回のアラーム予定は</h1>
      <h2 className={styles.title}>12:00</h2>
      <button className={styles.button}>アラームを中断</button>
    </>
  );
}
