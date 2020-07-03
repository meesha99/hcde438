function changeText(obj, text) {
  obj.innerText = text;
}
$("li").on("mouseover", function() {
  $(this).attr("id", "selected");
});

$("li").on("mouseleave", function() {
  $(this).attr("id", "deselected");
});
