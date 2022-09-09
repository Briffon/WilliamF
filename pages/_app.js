// import '../styles/globals.css'
import '../styles/main.scss'
import Nav from '../components/nav/index'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return <>
    <Nav />
    <Component {...pageProps} />
  </>
}

export default MyApp
