// github user finder example
$(document).ready(function()  {
  $(document).on('keypress', '#username', function(event) {
    if (event.which === 13) { // check the key was <enter>
      var input = $(this);
      var username = input.val();
      showUser(getGithubInfo(username));
    }
  });
});

function getGithubInfo(username) {
  var url = 'http://api.github.com/users/' + username;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, false);
  xmlhttp.send();

//  var data = xmlhttp.responseText;

//console.log(data);

  return xmlhttp;
}

function showUser(xmlhttp) {
  if (xmlhttp.status === 200) {
    // show the user details
    var json = xmlhttp.responseText;
    var user = JSON.parse(json);
    $('#profile h2').text(user['login'] + ' is Github user #' + user['id']);
    $('#profile .information').append('<div class=profile>' + user['html_url'] + '</div>');
    $('#profile .avatar').append('<img src=\'' + user['avatar_url'] + '\' />');
  } else {
    // show an error
    $('#profile h2').text('No such user!');
  }
}
