import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap'


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Gifty</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}
