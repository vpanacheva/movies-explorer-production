import './Profile.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header.js'
import { useState } from 'react';

const Profile = () => {
  const isLoggedIn = useState(true);
  return (
    <>
      <Header loggedIn={isLoggedIn} />
      
    <main className='profile'>
      <section className='profile_container'>
        <form className='profile__form'>
          <h3 className='profile__title'>Привет, Виталий!</h3>
          <div className='profile__fields'>
            <label className='profile__name'>Имя</label>
              <input
                className='input'
                defaultValue='Виталий'
                placeholder='Имя'
                minLength={2}
                maxLength={12}
                required
              />
          </div>
          <div className='profile__fields'>
            <label className='profile__name'>E-mail</label>
              <input
                className='input'
                defaultValue='pochta@yandex.ru'
                placeholder='email@email.ru'
                required
              />
          </div>
           
        </form>
        <form className='profile__form' action='/profile'>
          <input type='submit' className='profile__button' value='Редактировать'/>
        </form>
        <Link to='/' className='profile__link'>Выйти из аккаунта</Link>
      </section>
    </main>
    </>
  )
}

export default Profile
