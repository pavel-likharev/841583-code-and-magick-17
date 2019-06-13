var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_IN = 50;
var COLUMN_GAP = 50;
var FONT_GAP = 35;
var TEXT_HEIGHT = 55;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var FONT = '16px PT Mono';

var columnColor = ['rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.4)', 'rgba(0, 0, 255, 0.6)', 'rgba(0, 0, 255, 0.8)', 'rgba(0, 0, 255, 1)'];

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = FONT;
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_IN + (COLUMN_GAP + COLUMN_WIDTH) * i, (COLUMN_HEIGHT + TEXT_HEIGHT + FONT_GAP + (-COLUMN_HEIGHT * times[i]) / maxTime));
    ctx.fillText(names[i], CLOUD_X + GAP_IN + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_Y + FONT_GAP + GAP + GAP + TEXT_HEIGHT + COLUMN_HEIGHT);

    if (names[i] ===  'Вы') {
      ctx.fillStyle = '#ff0000';
    } else {
      ctx.fillStyle = columnColor[i];
    };

    ctx.fillRect(CLOUD_X + GAP_IN + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_Y + TEXT_HEIGHT + COLUMN_HEIGHT + FONT_GAP, COLUMN_WIDTH, (-COLUMN_HEIGHT * times[i]) / maxTime);
  };
}
