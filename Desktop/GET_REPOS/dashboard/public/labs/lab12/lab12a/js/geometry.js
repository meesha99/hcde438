window.addEventListener("load", function() {

function calcGeo(radius) {
  const pi = Math.PI;
  var area = pi * radius * radius;
  var circumference = 2 * pi * radius;
  var diameter = 2 * radius;
  var geometries = [area, circumference, diameter];
  console.log(geometries);
  return geometries;
}
  
  var data = ["Radius", "Area", "Circumference", "Diameter", "3", "28.27", "18.854", "6", "6", "113.1", "37.74", "12", "36", "4071.5", "226.194", "72", "72", "16286.02", "452.394", "144"]; 

  var row = 4,
    html = "<table><tr>";
  
  // Loop through array and add table cells
  for (var i = 0; i < data.length; i++) {
    html += "<td>" + data[i] + "</td>";
    var next = i + 1;
    if (next % row == 0 && next != data.length) {
      html += "</tr><tr>";
    }
  }
  html += "</tr></table>";
  document.getElementById("container").innerHTML = html;
});
