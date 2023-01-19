
import navbarTopLeft from '../public/assets/HomePage/top-navbar-left.png';
import navbarTopRightTop from '../public/assets/HomePage/top-navbar-right-top.png';
import navbarTopRightBot from '../public/assets/HomePage/top-navbar-right-bot.png';
import navbarTopCenter from '../public/assets/HomePage/top-navbar-center.png';
import Desayunos from '../public/assets/CategoryImages/Desayunos.png';
import Picadas from '../public/assets/CategoryImages/Picadas.png';
import Pasteleria from '../public/assets/CategoryImages/Pasteleria.png';

import Image from "next/image";
import Nabvar from '../components/Navbar/Navbar'

import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react';
import Link from 'next/link'
import ProductAPI from '../services/product.service'
import CardProductSearchList from '../components/CardProductSearchList/CardProductSearchList';
import { Carousel, Row } from 'react-bootstrap';


const inter = Inter({ subsets: ['latin'] })

const Home = ({ products }) => {

  return (
    <>
      <Image
        id='navbartopleft'
        src={navbarTopLeft}
        height={100}
        width={100}
        alt="NavbarTopLeft" />
      <Image
        id='navbartoprighttop'
        src={navbarTopRightTop}
        height={90}
        width={100}
        alt="NavbarTopRightTop" />
      <Image
        id='navbartoprightbot'
        src={navbarTopRightBot}
        height={70}
        width={100}
        alt="NavbarTopRightBot" />
      <div id="home-title-background">
        <h1 id="home-title">Gifty</h1>
      </div>
      <Image
        id='navbar-top-center'
        src={navbarTopCenter}
        height={50}
        width={100}
        alt="NavbarTopRightBot" />
      <div id="home-featured">
        <h2 id='title-featured'>Discounts</h2>
        <Carousel id="Carousel">
          <Carousel.Item interval={2500}>
            <Link href="/search/category-breakfast">
              <Image
                className="d-block w-100"
                height={300}
                width={100}
                src={Desayunos}
                alt="First slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>Breakfast</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <Link href="/search/category-cakes">
              <Image
                className="d-block w-100"
                height={300}
                width={100}
                src={Pasteleria}
                alt="First slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>Cakes</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <Link href="/search/category-tapas">
              <Image
                className="d-block w-100"
                height={300}
                width={100}
                src={Picadas}
                alt="First slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>Tapas</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h2 id='title-featured'>Featured</h2>
        <Row>
          {
            products.length === 0 ? <p>No hay productos</p> : products.map(product => <CardProductSearchList key={product._id} product={product}></CardProductSearchList>)
          }
        </Row>
      </div>
    </>
  )
}
export default Home

export async function getServerSideProps() {
  const products = await ProductAPI.getTopSix()

  return {
    props: {
      products
    }
  }
}





