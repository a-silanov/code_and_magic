'use strict'

var LEFT_DIRECTION = 2;
var RIGHT_DIRECTION = 5;
var ASPECT_RATIO_WIZARD = 1.337;

var fireballSize = 22;

var getFireballSpeed = function (isMovingLeft) {
  return isMovingLeft ? LEFT_DIRECTION : RIGHT_DIRECTION;
}

var wizardWidth = 70;

var getWizardHeight = function () {
  return ASPECT_RATIO_WIZARD * wizardWidth;
}

var wizardSpeed = 3;

var getWizardX = function (gameFieldWidth) {
  return (gameFieldWidth - wizardWidth) / LEFT_DIRECTION;
}

var getWizardY = function (gameFieldHeight) {
  return gameFieldHeight / wizardSpeed;
}
