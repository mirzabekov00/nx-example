import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '@nx-example/header';
import './styles.less';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>
      <Header />
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
