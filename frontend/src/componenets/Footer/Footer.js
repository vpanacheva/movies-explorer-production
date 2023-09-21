import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__content'>
        <p className='footer__copyright'>&copy; {new Date().getFullYear()}</p>
        <ul className='footer__links'>
          <li className="footer__list">
          <a
            href='https://practikum.yandex.ru'
            className='footer__link link'
            target='_blank'
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>
          </li>
          <li className="footer__list">
          <a
            href='https://github.com/vpanacheva'
            className='footer__link link'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
