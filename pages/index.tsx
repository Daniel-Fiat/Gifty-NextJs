import Head from 'next/head'
import { Carousel, Row } from "react-bootstrap"

import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>

      <main className={styles.main}>
        <h1>Hola Mundo</h1>
        <Link href='/test1'>
          <h2>test</h2>
        </Link>
      </main>
    </>
  )
}

export default Home;


