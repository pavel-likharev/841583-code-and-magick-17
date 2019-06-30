'use strict';

(function () {
  var WIZARDS_FIRST_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COLOR_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var COLOR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var AMOUNT_WIZARD = 4;

  var setupUser = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var getRandomNumber = window.util.getRandomNumber;

  function getRandomWizard() {
    var randomWizard = {
      name: getRandomNumber(WIZARDS_FIRST_NAMES) + ' ' + getRandomNumber(WIZARDS_SECOND_NAMES),
      coatColor: getRandomNumber(COLOR_COAT),
      eyesColor: getRandomNumber(COLOR_EYES)
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

})();
