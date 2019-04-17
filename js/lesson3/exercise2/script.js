/* Exercise 2: Color picker */

function setPreviewColor(color) {
  $('.preview').css('background-color', color);
}

$(document).on('keyup', '#color', function() {
  setPreviewColor($('#color').val());
  $('.color-code') = $('.preview').css('background-color');
})

function addBox(color) {
  $('#colors').prepend('<div class=\'item\' style=\'background-color: ' + color + ';\'></div>');
}
