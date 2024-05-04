
import React from 'react'
import Header from './componet/Header/Header'
import Nav from './componet/Nav/Nav'
import About from './componet/about/About'
import Contact from './componet/contact/contact'
import Services from './componet/Services/Services'
import Testmonials from './componet/Testmonials/Testmonials';
import Footer from './componet/Footer/Footer'
import Portfolio from './componet/portfolio/Portfolio'
import Exprence from './componet/Exprence/Exprence'
const App = () => {
  return (
  <>
  <Header />
  <Nav />
  <About />
  <Exprence />
  <Services />
  <Portfolio />
  <Testmonials />
  <Contact />
  <Footer />
  
  </>
  )
}

export default App;
