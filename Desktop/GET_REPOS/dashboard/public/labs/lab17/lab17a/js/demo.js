$(document).ready(function () {
// add a 5px red dashed boarder around the panel div

// provide a 10 pixel padding around all of the divs

$('.panel').css('border', '5px dashed red');

$('.panel').css('padding', '10px');

// set all div's padding to 3px
$('div').css('padding', '3px');

// set all divs in the panel to background gray

$('.panel div').css('background', 'gray');

// set all divs of class cat to green

$('.cat').css('background', 'gray').css('color', 'green');

// set all divs of class dog to red

$('.dog').css('background', 'gray').css('color', 'red');;

// set the id of lab to a 1px solid yellow border

$('#lab').css('border', '1px solid yellow');

// set the last div with class dog to background yellow

$('.dog:last').css('background', 'yellow').css('color', 'red');;

// set the calico cat's width to 50%,

$('#calico').css('width', '50%');

// background to green and color to white

$('#calico').css('background', 'green').css('color', 'white');

});