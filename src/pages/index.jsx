export default function Home() {
  return (
    <>
      <h1>アラーム設定</h1>

      <form action="#">
        <ul>
          <li>
            <label htmlFor="#">間隔（分）</label>
            <input type="number" name="#" id="#" />
          </li>
          <li>
            <label htmlFor="#">終了予定</label>
            <input type="number" name="#" id="#" />
          </li>
          <li>
            <button type="button">活動開始</button>
          </li>
        </ul>
      </form>
    </>
  )
}
