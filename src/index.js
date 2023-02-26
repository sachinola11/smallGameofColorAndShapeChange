import "./styles.css";
("use strict");

// Changing Color
var button1 = document.getElementById("btn1");

function randomColors() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

button1.addEventListener("click", function () {
  document.getElementById("outer-box").style.backgroundColor = randomColors();
});

// ------------------------------------------------

var button2 = document.getElementById("btn2");

function randomShape() {
  var randomNumber = Math.floor(Math.random() * 10);
  var shapeList = [
    "square",
    "circle",
    "oval",
    "triangle-up",
    "triangle-down",
    "triangle-left",
    "triangle-right",
    "triangle-topleft",
    "triangle-topright",
    "triangle-bottomleft",
    "triangle-bottomright"
  ];

  return shapeList[randomNumber];
}

button2.addEventListener("click", function () {
  document.getElementById("inner-box").className = randomShape();
});
