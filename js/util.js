'use strict';

(function () {
  window.util = {
    getRandomNumber: function (feature) {
      return feature[Math.floor(feature.length * Math.random())];
    }
  };
})();
