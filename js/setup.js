'use strict';

var setupUser = document.querySelector('.setup');
var openSetup = document.querySelector('.setup-open');
var closeSetup = document.querySelector('.setup-close');
var similarListElement = document.querySelector('.setup-similar-list');
var username = document.querySelector('.setup-user-name');
var submitForm = document.querySelector('.setup-submit');
var setupPlayer = document.querySelector('.setup-player');
var colorCoat = setupPlayer.querySelector('.wizard-coat');
var colorEyes = setupPlayer.querySelector('.wizard-eyes');
var colorFireball = setupPlayer.querySelector('.setup-fireball-wrap');
var colorFireballData = document.getElementsByName('fireball-color')[0];

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARDS_FIRST_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLOR_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLOR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var COLOR_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var AMOUNT_WIZARD = 4;

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomWizard() {
  var randomWizard = {
    name: WIZARDS_FIRST_NAMES[getRandomNumber(0, WIZARDS_FIRST_NAMES.length)] + ' ' + WIZARDS_SECOND_NAMES[getRandomNumber(0, WIZARDS_SECOND_NAMES.length)],
    coatColor: COLOR_COAT[getRandomNumber(0, COLOR_COAT.length)],
    eyesColor: COLOR_EYES[getRandomNumber(0, COLOR_EYES.length)]
  };
  return randomWizard;
}

var wizards = [];
for (var i = 0; i < AMOUNT_WIZARD; i++) {
  wizards.push(getRandomWizard());
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createListWizards = function () {
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }

  similarListElement.appendChild(fragment);
};

createListWizards();
setupUser.querySelector('.setup-similar').classList.remove('hidden');

// module-4
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
};


openSetup.addEventListener('click', function () {
  openPopup();
});

openSetup.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.preventDefault();
    setupUser.classList.remove('hidden');
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

colorCoat.addEventListener('click', function () {
  colorCoat.style.fill = COLOR_COAT[getRandomNumber(0, COLOR_COAT.length)];
});

colorEyes.addEventListener('click', function () {
  colorEyes.style.fill = COLOR_EYES[getRandomNumber(0, COLOR_EYES.length)];
});

colorFireball.addEventListener('click', function () {
  var colorName = COLOR_FIREBALL[getRandomNumber(0, COLOR_FIREBALL.length)];
  colorFireball.style.backgroundColor = colorName;
  colorFireballData.value = colorName;
});

