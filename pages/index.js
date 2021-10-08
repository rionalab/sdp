import Head from 'next/head'
import Image from 'next/image'
import ImgAbout from 'assets/img/img1.png'
import Layout from 'components/layout/Layout'


export default function Home() {
  return (
    <Layout image={ImgAbout}>
      <Head>
        <title>About Us</title>
      </Head>
      <h1>About Us</h1>
      <p className="subtitle">Spanning from East to West. <br />With 54,000 km Coastline and 17,500 Islands.</p>
      <h2>INDONESIA, a resourceful land. <br />Rich of flavors, natural beauties, and biodiversity.</h2>
      <p>62trade.com ready to take important role to empower international trades between Indonesia and the rest of the world.</p>
      <p>Ready to be a digital gateway for everyone, at any level of business.</p>
      <p>Let us walk together, hand in hand for a better future.</p>
    </Layout>
  )
}
