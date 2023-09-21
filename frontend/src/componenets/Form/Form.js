import './Form.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'

function Form(props) {
  const { header, children, submit, text, link, path } = props

  return (
    <section className='form'>
      <div className='form__container'>
        <Link to='/' className='form__link'>
          <img className='form__logo' src={logo} alt='Логотип'></img>
        </Link>
        <h1 className='form__name'>{header}</h1>
        <form className='form__content'>
          <div className='form__inputs'>{children}</div>
          <button type='submit' className='form__button button' disabled>{submit}</button>
        </form>
        <p className='form__footer'>{text}
          <Link to={path} className='form__link'>{link}</Link>
        </p>
      </div>
    </section>
  )
}

export default Form
