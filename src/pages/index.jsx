export default function Home() {
  return (
    <>
      <h1 className="title">アラーム設定</h1>

      <form action="#" className="form">
        <ul>
          <li className="form__inputItem">
            <label htmlFor="interval" className="form__label">
              間隔(分)
            </label>
            <input
              type="number"
              name="interval"
              id="interval"
              className="form__input"
            />
          </li>
          <li className="form__inputItem">
            <label htmlFor="closingTime" className="form__label">
              終了予定
            </label>
            <input
              type="time"
              name="closingTime"
              id="closingTime"
              className="form__input"
            />
          </li>
        </ul>
        <button type="button" className="button">
          活動開始
        </button>
      </form>
    </>
  );
}
