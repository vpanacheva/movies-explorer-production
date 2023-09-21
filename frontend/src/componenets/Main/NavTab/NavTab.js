import React from 'react'
import { Link } from 'react-scroll'
import './NavTab.css'

function NavTab() {
  return (
    <div className='navtab'>
      <nav className='navtab__nav'>
        <ul className='navtab__links'>
          <li className='navtab__link-block'>
            <Link to='aboutproject' smooth={true} duration={500} className='navtab__link button'>О проекте</Link>
          </li>
          <li className='navtab__link-block'>
            <Link to='techs' smooth={true} duration={500} className='navtab__link link'>Технологии</Link>
          </li>
          <li className='navtab__link-block'>
            <Link to='aboutme' smooth={true} duration={500} className='navtab__link link'>Студент</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavTab
