import React from 'react'
import { useLocation } from 'react-router-dom'
import './MoviesCard.css'
import MoviePoster from '../../../images/harvey.png'

function MoviesCard() {
  const location = useLocation()

  return (
    <li className='card'>
      <a href='https://www.youtube.com/watch?v=_zIK7IloRM4' className='card__link link' target='_blank' rel='noreferrer'>
        <img className='card__pic' src={MoviePoster} alt="Постер к найденному фильму"/>
      </a>
      {location.pathname === '/movies' && (<button className='card__button_save' type='button'></button>)}
      {location.pathname === '/saved-movies' && (<button className='card__button_remove' type='button'></button>)}
      
      {/* {<button className={`${ location.pathname === '/saved-movies' ? "card__button__saved" : "card__button_remove"}`}></button>} */}
      <div className='card__info'>
        <h2 className='card__name'>Пи Джей Харви: A dog called money</h2>
        <p className='card__duration'>1ч 17м</p>
      </div>
    </li>
  )
}

export default MoviesCard 