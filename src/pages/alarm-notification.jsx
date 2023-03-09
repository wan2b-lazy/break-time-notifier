import styles from "../styles/globals.module.scss";

export default function AlarmNotification() {
  return (
    <>
      <h1 className={styles.title}>休憩時間です</h1>
      <button className={styles.button}>ストレッチ開始</button>
      <button className={styles.button}>ストレッチ完了</button>
      <button className={styles.button}>中断</button>
    </>
  );
}

AlarmNotification.pageTitle = "AlarmNotification";
