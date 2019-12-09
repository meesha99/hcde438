var data = [
  {
    day: "fri",
    hi: 82,
    lo: 55
  },
  {
    day: "sat",
    hi: 75,
    lo: 52
  },
  {
    day: "sun",
    hi: 69,
    lo: 52
  },
  {
    day: "mon",
    hi: 69,
    lo: 48
  },
  {
    day: "tue",
    hi: 68,
    lo: 51
  }
];

var sumHigh = data.reduce(function(a, b) {
  return a + b.hi;
}, 0);

var sumLow = data.reduce(function(a, b) {
  return a + b.lo;
}, 0);

var sumAvg = data.reduce(function(a, b) {
  return a + (b.lo + b.hi) / 2;
}, 0);

var avgHigh = sumHigh / data.length;
var avgLow = sumLow / data.length;
var avgTemp = sumAvg / data.length;

document.write("<br>" + "Average of high temperatures: " + avgHigh + "<br>");
document.write("Average of low temperatures: " + avgLow + "<br>");
document.write("Average of all temperatures: " + avgTemp);
