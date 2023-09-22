import React from "react"
import "./Portfolio.css"

function Portfolio() {
  return (
    <section className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__links'>
        <li className='portfolio__link-item'>
          <a href='https://github.com/vpanacheva/how-to-learn' className='portfolio__link link' target='_blank' rel="noreferrer">
            <p className='portfolio__subtitle'>Статичный сайт</p>
            <p className='portfolio__arrow'>&#8599;</p>
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a href='https://github.com/vpanacheva/russian-travel' className='portfolio__link link' target='_blank' rel="noreferrer">
            <p className='portfolio__subtitle'>Адаптивный сайт</p>
            <p className='portfolio__arrow'>&#8599;</p>
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a href='https://github.com/vpanacheva/react-mesto-api-full-gha' className='portfolio__link link' target='_blank' rel="noreferrer">
            <p className='portfolio__subtitle'>Одностраничное приложение</p>
            <p className='portfolio__arrow'>&#8599;</p>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio
