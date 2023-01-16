
import navbarTopLeft from '../public/assets/HomePage/top-navbar-right-top.png';
import navbarTopRightTop from '../public/assets/HomePage/top-navbar-right-top.png';
import navbarTopRightBot from '../public/assets/HomePage/top-navbar-right-bot.png';

import Nabvar from '../components/Navbar/Navbar'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import ProductAPI from '../services/product.service'
import CardProductSearchList from '../components/CardProductSearchList/CardProductSearchList';
import { Row } from 'react-bootstrap';


const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductAPI.getTopSix().then(products => {
      console.log(products)
      setProducts(products)
    })
  }, [])

  return (
    <>
      <Image id={styles.navbartopleft} src={navbarTopLeft} alt="NavbarTopLeft" />
      <Image id={styles.navbartoprighttop} src={navbarTopRightTop} alt="NavbarTopRightTop" />
      <Image id={styles.navbartoprightbot} src={navbarTopRightBot} alt="NavbarTopRightBot" />

      <main className={styles.main}>
        <h1>Hola Mundo</h1>
        <Link href='/test1'>
          <h2>test</h2>
        </Link>
        <Row>
          {
            products?.map(product => <CardProductSearchList key={product._id} product={product}></CardProductSearchList>)
          }
        </Row>
        <Nabvar />
      </main>
    </>
  )
}



export default Home;


