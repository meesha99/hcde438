$(document).ready(function() {
  const base_url = "https://api.weather.gov/stations/";
  const endpoint = "/observations/latest";
  // weather update button click
  $("#getwx").on("click", function(e) {
    var mystation = $("input").val();
    var myurl = base_url + mystation + endpoint;
    $("input#my-url").val(myurl);
    // clear out any previous data
    $("ul li").each(function() {
      getElementById("#getwx").disabled=true;
      // enter code to clear each li
    });
    
    console.log("Cleared Elements of UL");
    // execute AJAX call to get and render data
    $.ajax({
      url: myurl,
      dataType: "json",
      success: function(data) {
        var tempC = data["properties"]["temperature"].value.toFixed(1);
        var tempF = (tempC * 9 / 5 + 32).toFixed(1);
        // get wind info and convert m/s to kts
        var windDirection =  data["properties"]["windDirection"].value.toFixed(1);
        var windSpeed = data["properties"]["windSpeed"].value.toFixed(1);
        // uncomment this if you want to dump full JSON to textarea
        var myJSON = JSON.stringify(data);
        $("textarea").val(myJSON);
        var str =
          "<li>Current Temperature: " + tempC + "C, " + tempF + "F" + "</li>" +
        "<li>" + "Current Wind Direction: " + windDirection + "</li>" +
        "<li>" + "Current Wind Speed: " + windSpeed + "mph" + "</li>"
         ;
        $("ul").append(str);
        $("ul li:last").attr("class", "list-group-item");
        
        // add additional code here for the Wind direction, speed, weather contitions and icon image
      }
    });
  });
});  