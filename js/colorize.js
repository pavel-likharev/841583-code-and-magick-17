'use strict';

(function () {
  var COLOR_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var COLOR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var COLOR_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupPlayer = document.querySelector('.setup-player');
  var colorCoat = setupPlayer.querySelector('.wizard-coat');
  var colorEyes = setupPlayer.querySelector('.wizard-eyes');
  var colorFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var colorFireballData = document.getElementsByName('fireball-color')[0];

  var getRandomNumber = window.util.getRandomNumber;

  colorCoat.addEventListener('click', function () {
    colorCoat.style.fill = getRandomNumber(COLOR_COAT);
  });

  colorEyes.addEventListener('click', function () {
    colorEyes.style.fill = getRandomNumber(COLOR_EYES);
  });

  colorFireball.addEventListener('click', function () {
    var colorName = getRandomNumber(COLOR_FIREBALL);
    colorFireball.style.backgroundColor = colorName;
    colorFireballData.value = colorName;
  });
})();
