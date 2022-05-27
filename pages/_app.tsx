import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import initTwitterScriptInner from 'zenn-embed-elements';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
