import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navigation from '../Navigation/Navigation.js'
import LoginNavigation from '../LoginNavigation/LoginNavigation.js'
import './Header.css'
import logo from '../../images/logo.svg'

const Header = ({ loggedIn }) => {
  // eslint-disable-next-line no-unused-vars
  const location = useLocation()
  return (
    <header className='header'>
      <Link to='/' className='header__link link'>
        {<img className='header__logo' src={logo} alt='Логотип' />}
      </Link>
      {!loggedIn && <LoginNavigation/> 
      }
      {loggedIn && <Navigation/>
}
    </header>
  )
}

export default Header
