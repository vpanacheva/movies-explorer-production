import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className='navigation'>
      <button className='navigation__open button' type='button' onClick={handleOpen}></button>

      <div className={`navigation__container ${ isOpen ? 'navigation__container_active' : '' }`}>
        <div className='navigation__sidebar'>
          
          <div className='navigation__content'>
            <button className='navigation__close button' type='button' onClick={handleOpen}></button>

            <nav className='navigation__links'>
              <div className='navigation__links_block navigation__links_main-block'>
                <NavLink to='/' className={({ isActive }) => `navigation__link link ${ isActive ? 'navigation__link_active' : '' }`}>Главная</NavLink>
              </div>
              
              <div className='navigation__links_block'>
                <NavLink to='/movies' className={({ isActive }) => `navigation__link link ${ isActive ? 'navigation__link_active' : '' }`}>Фильмы</NavLink>
              </div>
              
              <div className='navigation__links_block'>
                <NavLink to='/saved-movies' className={({ isActive }) => `navigation__link link ${ isActive ? 'navigation__link_active' : '' }`}>Сохранённые фильмы</NavLink>
              </div>
            </nav>
          </div>

          <NavLink to='/profile' className='navigation__link navigation__link_profile'>Аккаунт</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navigation;