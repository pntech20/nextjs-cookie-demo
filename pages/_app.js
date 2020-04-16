import Head from "next/head";
import GlobalStyles from "../components/GlobalStyles";

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Nextjs auth demo</title>
      </Head>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </>
  );
};
