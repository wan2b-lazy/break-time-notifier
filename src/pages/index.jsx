import styles from "@/styles/globals.module.scss";
import { useRouter } from "next/router";

export default function Index({ setInterval, setClosingTime, startAlarm }) {
  const router = useRouter();

  //index.jsxではsetIntervalを実行した後startAlarmを実行するまでに再レンダリングできないため、活動開始ボタンを押したときに_app.jsxのintervalを参照することなく[間隔（分）input]を参照するようにする。
  const handleClick = (event) => {
    event.preventDefault();
    if (document.querySelector("#interval").value) {
      const inputValueOfInterval = Number(
        document.querySelector("#interval").value
      );
      const inputValueOfClosingTime = Number(
        document.querySelector("#closingTime").value
      );

      setInterval(inputValueOfInterval);
      setClosingTime(inputValueOfClosingTime);
      startAlarm(inputValueOfInterval);

      router.push("/alarm-progress");
    }
  };

  return (
    <>
      <h1 className={styles.title}>アラーム設定</h1>

      <form action="#" className={styles.form}>
        <div className={styles.form__inputItems}>
          <div className={styles.form__inputItem}>
            <label htmlFor="interval" className={styles.form__label}>
              間隔(分)
            </label>
            <input
              type="number"
              name="interval"
              id="interval"
              required
              className={styles.form__input}
            />
          </div>
          <div className={styles.form__inputItem}>
            <label htmlFor="closingTime" className={styles.form__label}>
              終了予定
            </label>
            <input
              type="time"
              name="closingTime"
              id="closingTime"
              className={styles.form__input}
            />
          </div>
        </div>
        <button type="submit" className={styles.button} onClick={handleClick}>
          活動開始
        </button>
      </form>
    </>
  );
}

Index.pageTitle = "Index";
