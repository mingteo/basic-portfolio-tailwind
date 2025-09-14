import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Client from './components/Client'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Client />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default Home