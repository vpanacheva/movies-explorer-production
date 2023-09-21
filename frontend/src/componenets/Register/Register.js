import Form from '../Form/Form.js'

function Register() {
  return (
    <main className='register'>
      <Form
        className='form'
        header='Добро пожаловать!'
        submit='Зарегистрироваться'
        text='Уже зарегистрированы?'
        link='Войти'
        path='/signin'
      >
        <div className='form__input'>
          <p className='form__input-name'>Имя</p>
          <input
            type='text'
            className='form__input-data'
            defaultValue='Виталий'
            placeholder='Введите имя'
            minLength={2}
            maxLength={12}
            required
          />
          <p className='form__error'>Что-то пошло не так...</p>
        </div>

        <div className='form__input'>
          <p className='form__input-name'>E-mail</p>
          <input
            type='email'
            className='form__input-data'
            defaultValue='pochta@yandex.ru'
            placeholder='Введите адрес электронной почты'
            required
          />
          <p className='form__error'>Что-то пошло не так...</p>
        </div>

        <div className='form__input'>
          <p className='form__input-name'>Пароль</p>
          <input
            type='password'
            className='form__input-data form__input-data_error'
            minLength={3}
            maxLength={25}
            defaultValue='••••••••••••••'
            placeholder='Введите пароль'
            required
          />
          <p className='form__error form__error-text'>Что-то пошло не так...</p>
        </div>
      </Form>
    </main>
  )
}

export default Register
