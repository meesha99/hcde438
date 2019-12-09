function changeText(obj, text) {
    obj.innerText = text;
   }

var todos = document.querySelector("ul");

var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {

//console.log(this.id);

$('li').on("mouseover", function() {
  $(this).attr('id', 'selected');
  $(this).text('Focused!');
});

$('li').on("mouseleave", function() {
  $(this).attr('id', 'deselected');
  $(this).text('Not focused');


});

lis[i].addEventListener("click", function () {

this.setAttribute("id", "selected");

this.style.fontWeight="bold";

console.log("clicked");


});

}