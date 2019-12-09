// FadeOut
$(document).ready(function() {
  $("li").css("margin", "10px");

  $("li").attr("id", "uw");

  $("#p1 li").click(function() {
    console.log("$(this):" + $(this));

    $(this).fadeOut(2000, function() {
      console.log("fadeout complete!");
    });
  });
});

// FadeIn

$(document).ready(function() {
  $("li").css("margin", "10px");

  $("li").attr("id", "uw");

  $("#p2 li").click(function() {
    console.log("$(this):" + $(this));

    $(this).fadeIn(2000, function() {
      console.log("fadein complete!");
    });
  });
});

// FadeTo

$(document).ready(function() {
  $("li").css("margin", "10px");

  $("li").attr("id", "uw");

  $("#p3 li").click(function() {
    console.log("$(this):" + $(this));

    $(this).fadeTo(100, 0.4, function() {
      console.log("fadeto complete!");
    });
  });
});

// Fade toggle
$(document).ready(function() {
  $("li").css("margin", "10px");

  $("li").attr("id", "uw");

  $("#p4 li").click(function() {
    console.log("$(this):" + $(this));

    $(this).fadeToggle(4000, function() {
      console.log("fadetoggle complete!");
    });
  });
});
