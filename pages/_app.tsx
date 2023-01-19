import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap'
import Nabvar from '../components/Navbar/Navbar'
import { AuthProvider } from '../context/auth.context';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Gifty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Container>
      <Nabvar />
    </>
  )
}
