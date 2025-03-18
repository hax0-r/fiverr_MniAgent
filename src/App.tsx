import './App.css'
import Router from './Router/Router'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

function App() {
  const lenis = new Lenis();

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  )
}

export default App
