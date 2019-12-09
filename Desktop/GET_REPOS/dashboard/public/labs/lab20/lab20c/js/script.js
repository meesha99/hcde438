var url = "https://api.spotify.com/v1/users/22fqht7zwxutk4p3c6cgb34ra";
$.ajax({
  url: url,
  success: function(result){
 if("copyright" in result) {
  $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
  $("#copyright").text("Image Credits: " + "Meesha Hussain");
 }
  
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
  }
  $("#reqObject").text(url);
  //$("#returnObject").text(JSON.stringify(result, null, 4));  
  $("#apod_img_id").text(result.images.url);
  $("#apod_overview").text("Type: " + result.type);
  $("#apod_title").text("Display Name: " + result.display_name);
    $("#apod_link").text("Account Link: " + result.external_urls.spotify);
     $("#apod_followers").text("Followers: " + result.followers.total);
}
});

