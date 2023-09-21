import '../../index.css';
import './App.css';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Register from '../Register/Register.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import NotFoundError from '../NotFoundError/NotFoundError.js';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from '../Header/Header';
// import LoginNavigation from '../LoginNavigation/LoginNavigation';
// import Navigation from '../Navigation/Navigation';

function App() {
  const [isLoggedIn] = useState(true);

  const cards = 12;
  const savedCards = 4;
  const cardsList = Array(cards).fill(null);
  const saveCards = Array(savedCards).fill(null);
  return (
    <div className='root'>
      <Routes>
        <Route path='/' element={<Main loggedIn={isLoggedIn} />} />
        <Route path='/movies' element={<Movies loggedIn={isLoggedIn} cards={cardsList} />}/>
        <Route path='/saved-movies' element={<SavedMovies loggedIn={isLoggedIn} cards={saveCards} />}/>
        <Route path='/profile' element={<Profile loggedIn={isLoggedIn} />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFoundError />} />
      </Routes>
    </div>
  );
}

export default App;