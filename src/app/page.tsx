import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Subhero from './components/Subhero'
import Footer from './components/Footer'
import ProductPage from './products/page'

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Subhero />
       <ProductPage />
      <Footer />
    </div>
  )
}

export default Home