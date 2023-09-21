import React from 'react';
import './AboutMe.css';
import studentPic from '../../../images/student-pic.png';

function AboutMe() {
  return (
    <section className='about-me' id='aboutme'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__profile'>
        <div className='about-me__content'>
          <h3 className='about-me__name'>Варвара</h3>
          <p className='about-me__job'>Фронтенд-разработчик, 23 года</p>
          <p className='about-me__text'>
          Привет, меня зовут Варя и фронтенд-разработчик. Совсем недавно я ушла с постоянной работы и отравилась в путешествие по миру разработки. 
          Теперь моё увлечение - написание кода. 
          Добро пожаловать на страницу моего дипломного проекта!
          </p>
          <a className='about-me__link' href='https://github.com/vpanacheva' target='_blank' rel='noreferrer'>Github</a>
        </div>
        <img className='about-me__pic' src={studentPic} alt='Аватар студента Яндекс.Практикум' />
      </div>
    </section>
  );
}

export default AboutMe;