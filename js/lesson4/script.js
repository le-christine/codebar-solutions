// github user finder example
$(document).ready(function()  {
  $(document).on('keypress', '#username', function(event) {
    if (event.which === 13) { // check the key was <enter>
      var input = $(this);
      var username = input.val();

      console.log('username was: ', username);
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

  } else {
    // show an error
  }
}
