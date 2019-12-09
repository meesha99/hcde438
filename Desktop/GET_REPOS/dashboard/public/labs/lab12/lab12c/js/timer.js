var timeleft = 5;
var downloadTimer = setInterval(function() {
  document.getElementById("countdown").innerHTML = "My counter value: " + timeleft + " seconds";
  timeleft -= 1;
     if(timeleft <= 0){
       timeleft=5;
    setInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Blast off!"
  }
}, 
1000);
