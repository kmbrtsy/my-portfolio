import React from 'react'
import Navbar from './components/NavBar'
import LandingPage from './components/LandingPage'
import ServiceSection from './components/ServiceSection'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <ServiceSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default App
