
var buttonone = document.getElementById("clickcountry"),
  countone = 0;
buttonone.onclick = function() {
  countone += 1;
  document.getElementById("countrycounter").innerHTML = "Counter: " + countone;
};

var buttontwo = document.getElementById("clickquotes"),
  counttwo = 0;
buttontwo.onclick = function() {
  counttwo += 1;
  document.getElementById("quotescounter").innerHTML = "Counter: " + counttwo;
};

var buttonthree = document.getElementById("clickpeople"),
  countthree = 0;
buttonthree.onclick = function() {
  countthree += 1;
  document.getElementById("peoplecounter").innerHTML = "Counter: " + countthree;
};