window.addEventListener("load", function() {
  // LET'S SAY THAT WE HAVE A SIMPLE FLAT ARRAY
  var data = [
    "Make",
    "Model",
    "Year",
    "Price",
    "Tesla",
    "Model X",
    "2019",
    "104,990",
    "Toyota",
    "Corolla",
    "2018",
    "22,780",
    "JEEP",
    "Wrangler",
    "2012",
    "29,995",
    "Ferari",
    "Portofino",
    "2020",
    "205,000"
  ];

  // DRAW THE HTML TABLE
  var row = 4,
    html = "<table><tr>";

  // Loop through array and add table cells
  for (var i = 0; i < data.length; i++) {
    html += "<td>" + data[i] + "</td>";
    // Break into next row
    var next = i + 1;
    if (next % row == 0 && next != data.length) {
      html += "</tr><tr>";
    }
  }
  html += "</tr></table>";

  // ATTACH HTML TO CONTAINER
  document.getElementById("container").innerHTML = html;
});
