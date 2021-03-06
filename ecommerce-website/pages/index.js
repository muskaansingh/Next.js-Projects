import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import About from '../Components/About';
import DiscountBanner from '../Components/DiscountBanner';
import StoreFeatures from '../Components/StoreFeatures';
import Products from '../Components/Products';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <About/>
      <DiscountBanner/>
      <StoreFeatures/>
      <Products/>
    </div>
  )
}
