import './NavBurgerMenu.css'
import { useState } from 'react'

const NavBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => setIsOpen(!isOpen)

  return (
    <button
      className='button'
      type='button'
      onClick={openMenu}
    ></button>
  )
}
export default NavBurgerMenu
