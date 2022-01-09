import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Restaurant App</title>
        <meta name="description" content="Restaurant App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList />
    </div>
  )
}
