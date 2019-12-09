
var myTableData = [];
myTableData.push(["Microsoft", 381.7, 86.8, 22.1, 128000]);
myTableData.push(["Symetra Financial", 2.7, 2.2, 254.4, 1400]);
myTableData.push(["Micron Technology", 37.6, 16.2, 3.0, 30400]);
myTableData.push(["F5 Networks", 9.5, 1.7, 311.2, 3834]);
myTableData.push(["Expedia", 10.8, 5.8, 398.1, 18210]);
myTableData.push(["Nautilus", 476, 274.4, 18.8, 340]);
myTableData.push(["Heritage Financial", 531, 137.6, 21, 748]);
myTableData.push(["Cascade Microtech", 239, 136, 9.9, 449]);
myTableData.push(["Nike", 83.1, 27.8, 2.7, 56500]);
myTableData.push(["Alaska Air Group", 7.9, 5.4, 605, 13952]);

var el = document.getElementById("data");


function hitEvent() {
  console.log("Button Hit!");
  buildTableBody();
}

function buildTableBody() {
  myTableData.forEach(buildTableRows);
}


function buildTableRows(v,i) {
  console.log(i,v);
  // on the initial row clear out the innerHTML
  if(i==0) {
    el.innerHTML = buildRowHtml(v);
  } else {
    el.innerHTML += buildRowHtml(v);
  }
}


function buildRowHtml(x) {
  console.log(x);
  var s = "<tr><td>{1}</td><td>{2}</td><td>{3}</td><td>{4}</td><td>{5}</td></tr>";
  s = s.replace("{1}", x[0]);
  s = s.replace("{2}", x[1]);
  s = s.replace("{3}", x[2]);
  s = s.replace("{4}", x[3]);
  s = s.replace("{5}", x[4]);
  return s;
}