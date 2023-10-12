import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ThemeProvider, BaseStyles } from "@primer/react"

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider colorMode="dark">
      <BaseStyles>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
