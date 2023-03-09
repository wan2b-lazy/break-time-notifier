import "../styles/global.scss";
import Layout from "components/layout";

export default function App({ Component, pageProps }) {
  const pageTitle = Component.pageTitle;

  switch (pageTitle) {
    case "Index":
      return (
        <Layout pageTitle={pageTitle}>
          <Component {...pageProps} />
        </Layout>
      );

    case "AlarmProgress":
      return (
        <Layout pageTitle={pageTitle}>
          <Component {...pageProps} />
        </Layout>
      );

    case "AlarmNotification":
      return (
        <Layout pageTitle={pageTitle}>
          <Component {...pageProps} />
        </Layout>
      );
  }
}
