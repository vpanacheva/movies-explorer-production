import React from 'react'
import './Main.css'
import Header from '../Header/Header.js'
import Promo from './Promo/Promo.js'
import AboutProject from './AboutProject/AboutProject.js'
import Techs from './Techs/Techs.js'
import AboutMe from './AboutMe/AboutMe.js'
import Portfolio from './Portfolio/Portfolio.js'
import Footer from '../Footer/Footer.js'
import { useState } from 'react'

function Main() {
  const [isLoggedIn] = useState(false)
  return (
    <>
      <Header loggedIn={isLoggedIn} />
      <main className='main'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Main
