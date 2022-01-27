{
  const link = document.querySelector('.enter-button')
  const popup = document.querySelector('.modal-login')
  const closePage = document.querySelector('.modal-close')
  const login = popup.querySelector('[name=login]')
  const password = popup.querySelector('[name=password')
  const form = popup.querySelector('form')

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains('modal-show')) {
        evt.preventDefault()
        popup.classList.remove('modal-show')
      }
    }
  })

  link.addEventListener('click', function (evt) {
    evt.preventDefault()
    popup.classList.add('modal-show')

    if (storage) {
      login.value = storage
      password.focus()
    } else {
      login.focus()
    }

    login.focus()
    if (storage) {
      login.value = storage
    }
  })

  closePage.addEventListener('click', function (evt) {
    evt.preventDefault()
    popup.classList.remove('modal-show')
  })

  form.addEventListener('submit', function (evt) {
    if (!login.value || !password.value) {
      evt.preventDefault()
    } else {
      if (isStorageSupport) {
        localStorage.setItem('login', login.value)
      }
    }
  })

  let isStorageSupport = true
  const storage = ''

  try {
    storage = localStorage.getItem('login')
  } catch (err) {
    isStorageSupport = false
  }

  document.getElementById('check').onclick = function() {
    let loginCheck = document.getElementById('login-login').value;
    let passwordCheck = document.getElementById('login-password').value;

    if (loginCheck == 'ivan@mail.ru' && passwordCheck == '777')
      alert('welcome');
     else if (loginCheck == 'vova@mail.ru' && passwordCheck == '888')
      alert('welcome');
     else if (loginCheck == 'moroz@mail.ru' && passwordCheck == '888')
      alert('welcome');
      else alert('incorrect login or password');
  }
}