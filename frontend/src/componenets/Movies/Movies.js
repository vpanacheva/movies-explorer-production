import React from 'react'
import './Movies.css'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import SearchForm from './SearchForm/SearchForm.js'
import MoviesCardList from './MoviesCardList/MoviesCardList.js'
import { useState } from 'react';

function Movies(props) {
  const isLoggedIn = useState(true);
  return (
    <>
      <Header loggedIn={isLoggedIn} />
      
      <main className='movies'>
        <SearchForm />
        <MoviesCardList cards={props.cards} />
        {/* <MoviesCardList cards={moviesArray} /> */}
        <button className='movies__add-cards movies__add-cards_inactive button' type='button'>
          Ещё
        </button>
      </main>
      <Footer />
    </>
  )
}

export default Movies
