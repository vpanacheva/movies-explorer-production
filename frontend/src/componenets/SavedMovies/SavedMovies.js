import React from 'react'
import './SavedMovies.css'
import SearchForm from '../Movies/SearchForm/SearchForm.js'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList.js'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import { useState } from 'react';

function SavedMovies(props) {
  const isLoggedIn = useState(true);
  return (
    <>
      <Header loggedIn={isLoggedIn} />
      <main className='savedmovies'>
        <SearchForm />
        <MoviesCardList cards={props.cards} />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
