import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.js'

function MoviesCardList({ card, cards }) {
  return (
    <div className='moviescardlist'>
      <ul className='moviescardlist__list'>
        {cards.map((card, index) => (<MoviesCard key={index} />))}
      </ul>
    </div>
  )
}

export default MoviesCardList
