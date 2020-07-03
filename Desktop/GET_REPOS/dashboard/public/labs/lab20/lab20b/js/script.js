var url = "https://api.themoviedb.org/3/movie/18785?api_key=140c28f3184cfd5caa4a443faf4340e5";


$.ajax({
  url: url,
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Tagline: " + result.tagline);
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
  $("#apod_title").text(result.title);
  $("#apod_overview").text(result.overview);
  $("#apod_homepage").text("Homepage: " +result.homepage);
  $("#apod_rev").text("Revenue: $" +result.revenue);
  $("#apod_vote").text("Average Vote: " +result.vote_average);
}
});
