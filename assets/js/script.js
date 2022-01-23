{
  const link = document.querySelector('.enter-button')
  const popup = document.querySelector('.modal-login')
  const closePage = document.querySelector('.modal-close')
  const login = popup.querySelector('[name=login]')
  const password = popup.querySelector('[name=password')
  const form = popup.querySelector('form')
  const mapLink = document.querySelector('.modal-button')
  const mapPopup = document.querySelector('.modal-map')
  const mapClose = mapPopup.querySelector('.modal-close')

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

  mapLink.addEventListener('click', function (evt) {
    evt.preventDefault()
    mapPopup.classList.add('modal-show')
  })

  mapClose.addEventListener('click', function (evt) {
    evt.preventDefault()
    mapPopup.classList.remove('modal-show')
  })

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains('modal-show')) {
        evt.preventDefault()
        popup.classList.remove('modal-show')
      }
    }
  })

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






  const mainPhoto = document.querySelector('.main-photo');

  if (mainPhoto) {

      const photoItems = document.querySelectorAll('.photo-items');
      const photoList = document.querySelector('.photo-list');

      for (const i = 0; i < photoItems.length; i++) {
          clickPhoto(photoItems[i]);
      }

      function clickPhoto(itemPhoto) {
           itemPhoto.addEventListener('click', function() {
            getPhotoSrc(itemPhoto);
          });
      };

      function getPhotoSrc(itemPhoto) {
          const photoSrc = itemPhoto.getAttribute('src');
          photoList.setAttribute("src", photoSrc);
      };

  }






}
