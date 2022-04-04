import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Header/>
     <h1>Главная</h1>
     <Link href='/burgers'><a>Все бургеры</a></Link>
     <Footer/>
    </div>
  )
}
