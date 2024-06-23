import React, {useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Daftar from './components/Daftar/Daftar'
import Footer from './components/Footer/Footer'
import './App.css'

import Aos from 'aos';
import 'aos/dist/aos.css'

const App = () => {

    useEffect(() => {
      Aos.init({duration: 500})
  }, [])

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Gallery/>
      <Daftar/>
      <Footer/>
    </div>
  )
}

export default App
