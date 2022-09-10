// import '../styles/globals.css'
import '../styles/main.scss'
import Nav from '../components/nav/index'
import Footer from '../components/footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return <>
    <Head>
      <title>William Francoletti</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
