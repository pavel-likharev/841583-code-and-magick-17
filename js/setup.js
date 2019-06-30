'use strict';
(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setupUser = document.querySelector('.setup');
  var openSetup = document.querySelector('.setup-open');
  var closeSetup = document.querySelector('.setup-close');
  var username = document.querySelector('.setup-user-name');
  var submitForm = document.querySelector('.setup-submit');

  // Не знаю, как получить начальные top и left окна, чтобы возващать при закрытии :(
  // штука ниже почти работает...
  // var styleSetup = window.getComputedStyle(setupUser, null);

  var onPopupEscPress = function () {
    document.addEventListener('keydown', function (evt) {
      if (username === document.activeElement) {
        return;
      } else {
        if (evt.keyCode === ESC_KEYCODE) {
          evt.preventDefault();
          setupUser.classList.add('hidden');
        }
      }
    });
  };

  var openPopup = function () {
    setupUser.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setupUser.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setupUser.style.top = '80px';
    setupUser.style.left = '50%';
  };


  openSetup.addEventListener('click', function () {
    openPopup();
  });

  openSetup.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      evt.preventDefault();
      openPopup();
    }

  });

  closeSetup.addEventListener('click', function () {
    closePopup();
  });

  closeSetup.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      evt.preventDefault();
      setupUser.classList.add('hidden');
    }
  });

  submitForm.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      submitForm.submit();
    }
  });

})();

