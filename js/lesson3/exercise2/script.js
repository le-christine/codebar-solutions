/* Exercise 2: Color picker */
var colors = ['ffac81', 'ff928b', 'fec3a6', 'efe9ae', 'cdeac0']

function setPreviewColor(color) {
  $('.preview').css('background-color', color);
}

$(document).on('keyup', '#color', function() {
  setPreviewColor($('#color').val());
  //$('.color-code') = $('.preview').css('background-color');
})

function addBox(color) {
  $('#colors').prepend('<div class=\'item\' style=\'background-color: ' + color + ';\'></div>');
}

$(document).on('click', '#add-to-favorite', function() {
  color = $('.preview').css('background-color');
  addBox(color);
  $('#color').val('');
  $('#color').focus();
})

$(document).ready(function() {
  // Code that runs when the document is ready
  colors.forEach(function(color) {
    addBox(color)
  });
  var randomColorPick = Math.floor(Math.random() * colors.length);
  setPreviewColor(colors[randomColorPick]);
});
