import styles from "@/styles/globals.module.scss";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>アラーム設定</h1>

      <form action="#" className={styles.form}>
        <ul className={styles.form__inputItems}>
          <li className="form__inputItem">
            <label htmlFor="interval" className={styles.form__label}>
              間隔(分)
            </label>
            <input
              type="number"
              name="interval"
              id="interval"
              className={styles.form__input}
            />
          </li>
          <li className="form__inputItem">
            <label htmlFor="closingTime" className={styles.form__label}>
              終了予定
            </label>
            <input
              type="time"
              name="closingTime"
              id="closingTime"
              className={styles.form__input}
            />
          </li>
        </ul>
        <button type="button" className={styles.button}>
          活動開始
        </button>
      </form>
    </>
  );
}
