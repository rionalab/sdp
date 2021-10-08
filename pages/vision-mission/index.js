import Layout from 'components/layout/Layout'
import ImgAbout from 'assets/img/img2.png'
import ImgMap from 'assets/img/map.png'
import Image from 'next/image'
import Head from 'next/head'

export default function index() {
    return (
        <Layout image={ImgAbout}>
            <Head>
                <title>Contact</title>
            </Head>
            <h1>Vision Mission</h1>
            <h3>Our Vision</h3>
            <p>Becoming number one preferred digital platform of international trades for Indonesia and the world.</p>
            <h3>Our Mission</h3>
            <p>Empowering Indonesia’s MSME nationwide to go international, collaboration with all supporting function such as financial, supply chain and logistic, and expanding international network by building partnership with overseas well known digital platform.</p>
            <h3>Values</h3>
            <ol>
                <li>Simple</li>
                <li>Trustworthy</li>
                <li>Problem Solver</li>
            </ol>
            <Image alt="map" src={ImgMap} />
        </Layout>
    )
}