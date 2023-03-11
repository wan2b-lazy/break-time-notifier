import "../styles/global.scss";
import { useState } from "react";
import Layout from "components/layout";

export default function App({ Component, pageProps }) {
  const pageTitle = Component.pageTitle;
  const [interval, setInterval] = useState(null);
  const [closingTime, setClosingTime] = useState(null);

  const startAlarm = (interval) => {
    console.log(interval);
  };

  const stopAlarm = () => {
    console.log("stop alarm");
  };

  switch (pageTitle) {
    case "Index":
      return (
        <Layout pageTitle={pageTitle}>
          <Component
            {...pageProps}
            setInterval={setInterval}
            setClosingTime={setClosingTime}
            startAlarm={startAlarm}
          />
        </Layout>
      );

    case "AlarmProgress":
      return (
        <Layout pageTitle={pageTitle}>
          <Component
            {...pageProps}
            interval={interval}
            closingTime={closingTime}
          />
        </Layout>
      );

    case "AlarmNotification":
      return (
        <Layout pageTitle={pageTitle}>
          <Component
            {...pageProps}
            interval={interval}
            startAlarm={startAlarm}
            stopAlarm={stopAlarm}
          />
        </Layout>
      );
  }
}
