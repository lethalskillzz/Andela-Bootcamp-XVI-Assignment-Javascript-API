$('#action-button').click(function() {
  //alert("I am an alert box!");
   $.ajax({
      url: 'https://dl.dropboxusercontent.com/u/2142726/jssamples/20160208-1.0_day.geojson',
      data: {
         format: 'json'
      },
      error: function() {
         $('#info').html('<p>An error has occurred</p>');
      },
      dataType: 'jsonp',
      success: function(data) {
         var $title = $('<h1>').text(data.talks[0].talk_title);
         var $description = $('<p>').text(data.talks[0].talk_description);
         $('#info')
            .append($title)
            .append($description);
      },
      type: 'GET'
   });
});