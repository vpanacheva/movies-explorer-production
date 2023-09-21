import React from 'react'
import './SearchForm.css'

function SearchForm() {
  return (
    <form className='searchform'>
       <div className="searchform__container">
      <label className='searchform__input-container'>
        <input
          className='searchform__input'
          placeholder='Фильм'
          required
        ></input>
       </label>
        <button className='searchform__btn button' type='submit'></button>
      </div>
  
      <div className='searchform__checkbox-conteiner'>
        <input
          type='checkbox'
          className='searchform__checkbox'
          id='searchform__checkbox'
          value='yes'
        ></input>
        <label className='searchform__label link' htmlFor='searchform__checkbox'>Короткометражки</label>
      </div>
    </form>
  )
}

export default SearchForm
