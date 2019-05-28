// TV Schedule example
function retrieveGenres() {
  // AJAX call using jQuery that retrieve and process the result
  $.ajax({
    url: request_url,
    dataType: 'json', // defines the type of result we will be getting back
    beforeSend: function() {
      // do something before running the request
      // can be used if we need to perform something before running the request
    }
  }).done(function(data) {
    // process data
    // handles a response that returns a success status code
  }).fail(function() {
    // code
    // is called when the request fails
  }).always(function() {
    // code that runs regardless of request succeeding or failing
  })
}

function getTomorrowsSchedule(genre) {
  // call to retrieve TV schedule
}

function processEpisode(episode) {
  var item_html = '<li>';
  item_html += '<h2>' + episode.programme.display_title.title + '</h2>';
  // display short short synopsis
  // display image
  // display date and time
  // display duration (seconds to minutes)
  // display the channel or service into a spam called service
}

function formatDate(start, end) {

    var start_date = new Date(start);
    var end_date = new Date(end);

    var day = start_date.getDate();
    var month = start_date.getMonth() + 1; // the returned months are 0-11
    var year = start_date.getFullYear();

    var start_hour = start_date.getHours();
    var start_mins = start_date.getMinutes();

    var end_hour = end_date.getHours();
    var end_mins = end_date.getMinutes();

    var date = day + "/" + month + "/" + year + " ";

    // add leading 0 and return last two characters to make sure we use 00:00 format
    date +=  ("0"+start_hour).slice(-2) + ":" + ("0"+start_mins).slice(-2) + " - " +
        ('0' + end_hour).slice(-2) + ":" +  ( "0" + end_mins).slice(-2);

    return date;
}
