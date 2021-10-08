import Layout from 'components/layout/Layout'
import ImgAbout from 'assets/img/img3.png'
import Image from 'next/image'
import Head from 'next/head'
import FormContact from './FormContact'

export default function index() {
    return (
        <Layout image={ImgAbout}>
            <Head>
                <title>Contact</title>
            </Head>
            <h1>Contact</h1>
            <h3>Location</h3>
            <p>
                Sona Topas Tower,<br />
                Jl. Jend. Sudirman No.Kav 26, RT.4/RW.2, Karet,<br />
                Jakarta Selatan, 12920.
            </p>
            <h3>Email</h3>
            <p>info@62trade.com</p>

            <FormContact />
        </Layout>
    )
}