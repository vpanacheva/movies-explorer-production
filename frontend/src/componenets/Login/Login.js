import Form from '../Form/Form.js'

function Login() {
  return (
    <main className='login'>
      <Form
        className='form'
        header='Рады видеть!'
        submit='Войти'
        text='Ещё не зарегистрированы?'
        link='Регистрация'
        path='/signup'
      >
        <div className='form__in'>
        <p className='form__input-name'>E-mail</p>
        <label className='form__input'>
          <input
            type='email'
            className='form__input-data'
            placeholder='Введите адрес электронной почты'
            required
          />
        </label>
        <p className='form__error'>Что-то пошло не так...</p>
        </div>
        <div className='form__in'>
        <p className='form__input-name'>Пароль</p>
        <label className='form__input'>
        
          <input
            type='password'
            className='form__input-data form__input-data_color-error'
            minLength={3}
            maxLength={25}
            placeholder='Введите пароль'
            required
          />
         
        </label>
        <p className='form__error form__error-display'>
            Что-то пошло не так...
          </p>
        </div>
      </Form>
    </main>
  )
}

export default Login
