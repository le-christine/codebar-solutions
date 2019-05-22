/* Exercise 2: Color picker */
var colors = ['ffac81', 'ff928b', 'fec3a6', 'efe9ae', 'cdeac0']
var previewColor;
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

  var numColors = $('#colors .item');

  if (numColors.length > 16) {
    numColors.last().remove();
  }
})

$(document).ready(function() {
  // Code that runs when the document is ready
  colors.forEach(function(color) {
    addBox(color)
  });
  var randomColorPick = Math.floor(Math.random() * colors.length);
  setPreviewColor(colors[randomColorPick]);
  previewColor = colors[randomColorPick];

});

$(document).on('mouseenter', '#colors .item', function() {
  var previewColor = $(this).css('background-color');
  setPreviewColor(previewColor);
})

$(document).on('mouseleave', '#colors .item', function() {
  setPreviewColor(previewColor);
})
