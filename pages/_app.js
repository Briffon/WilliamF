// import '../styles/globals.css'
import '../styles/main.scss'
import Nav from '../components/nav/index'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return <>
    <Nav />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
