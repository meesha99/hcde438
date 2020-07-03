// File: index.js

var search_base_url =
  "https://api.spotify.com/v1/search?query={artist_name}&type=artist&market=US&offset=0&limit=20";

// The following are just stored artist IDs for verification -- nothing to do here
//var artist_id = "0TnOYISbd1XYRBk9myaseg";  // Enrique Iglesias
//var artist_id = "3t58jfUhoMLYVO14XaUFLA";  // Pat Metheny
//var artist_id = "5olDKSsFhhmwh8UCWwKtpq";  // Chick Corea
//var artist_id = "6v0d6b30Aw6lK4AtZuOElo";  // Cuong Vu
//var artist_id = "31TPClRtHm23RisEBtV3X7";  // Timberlake

//Create url with artist and token
var base_url = "https://api.spotify.com/v1/search?q=";
var endpoint = "&type=artist";
var artist = "";
var token = "";
$("#send-req").click(function() {
  artist = $("#artist-name").val();
  token = $("#auth-token").val();
  Data();
  $("ul li").each(function() {
    $("ul").empty();
  });
});

//Create data using base url and authorization token.
function Data() {
  var myurl = base_url + artist + endpoint;
  $.ajax({
    method: "GET",
    url: myurl,
    dataType: "json",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    success: function(data) {
      console.log(data);
      var tokendata = data.artists.items[0];
      var id=tokendata.id;
      var name= tokendata.name;
      var genres=tokendata.genres[0];
       var followers= tokendata.followers.total;
      var url=tokendata.images[0].url;
      
     
      var myJSON = JSON.stringify(data);
      $('textarea').val(myJSON);
      
       $('#search-url').val(myurl);
      $('#artist-id').val(id);
 
      var el = document.getElementById("out-name");
     el.textContent = name;
      var el = document.getElementById("followers");
     el.textContent = followers;
       var el = document.getElementById("genre");
     el.textContent = genres;
       var el = document.getElementById("artist-url");
     el.textContent = url;
        var pic= "<img src='" + myurl+" 'width='20%'height='20%' alt='Artist'>";
      $(pic).replaceAll("#pic");
      
      
    },
    error: function(e) {
      let err = JSON.stringify(e);
      console.log(err);
    },
    cache: false
  });
}
});