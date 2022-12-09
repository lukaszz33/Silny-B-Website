import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Newsletter from './components/newsletter/newslettersubscribe'

const App = () => {

  return (
    <>
      <Header />
      <Nav />
      <Services />
      <Experience />
      <Portfolio />
      <Newsletter />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App