import styles from "@/styles/globals.module.scss";

export default function Index({ setInterval, setClosingTime, startAlarm }) {
  //onClickが発火したときにsetIntervalとsetClosingTimeを実行したいが、再レンダリングせずにstartAlarmを実行すると、intervalとclosingTimeがnullから更新されないままstartAlarmが実行されてしまう問題を解決したい
  const handleClick = () => {
    setInterval(0);
    setClosingTime(0);
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
        <button type="button" className={styles.button} onClick={handleClick}>
          活動開始
        </button>
      </form>
    </>
  );
}

Index.pageTitle = "Index";
