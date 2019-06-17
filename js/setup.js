'use strict';

var setupUser = document.querySelector('.setup');
setupUser.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARDS_FIRST_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLOR_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLOR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomWizardFeature(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var wizards = [
  {
    name: WIZARDS_FIRST_NAMES[getRandomWizardFeature(0, WIZARDS_FIRST_NAMES.length)] + ' ' + WIZARDS_SECOND_NAMES[getRandomWizardFeature(0, WIZARDS_SECOND_NAMES.length)],
    coatColor: COLOR_COAT[getRandomWizardFeature(0, COLOR_COAT.length)],
    eyesColor: COLOR_EYES[getRandomWizardFeature(0, COLOR_EYES.length)]
  },
  {
    name: WIZARDS_FIRST_NAMES[getRandomWizardFeature(0, WIZARDS_FIRST_NAMES.length)] + ' ' + WIZARDS_SECOND_NAMES[getRandomWizardFeature(0, WIZARDS_SECOND_NAMES.length)],
    coatColor: COLOR_COAT[getRandomWizardFeature(0, COLOR_COAT.length)],
    eyesColor: COLOR_EYES[getRandomWizardFeature(0, COLOR_EYES.length)]
  },
  {
    name: WIZARDS_FIRST_NAMES[getRandomWizardFeature(0, WIZARDS_FIRST_NAMES.length)] + ' ' + WIZARDS_SECOND_NAMES[getRandomWizardFeature(0, WIZARDS_SECOND_NAMES.length)],
    coatColor: COLOR_COAT[getRandomWizardFeature(0, COLOR_COAT.length)],
    eyesColor: COLOR_EYES[getRandomWizardFeature(0, COLOR_EYES.length)]
  },
  {
    name: WIZARDS_FIRST_NAMES[getRandomWizardFeature(0, WIZARDS_FIRST_NAMES.length)] + ' ' + WIZARDS_SECOND_NAMES[getRandomWizardFeature(0, WIZARDS_SECOND_NAMES.length)],
    coatColor: COLOR_COAT[getRandomWizardFeature(0, COLOR_COAT.length)],
    eyesColor: COLOR_EYES[getRandomWizardFeature(0, COLOR_EYES.length)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createListWizards = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

createListWizards();

setupUser.querySelector('.setup-similar').classList.remove('hidden');
