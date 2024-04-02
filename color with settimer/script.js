// const { random } = require("lodash");

let bg = document.querySelector("#main");
// bg.style.backgroundColor = "black"

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

start.addEventListener("click", autobg);
let intervalId;
function autobg() {
    if(!intervalId){

        intervalId = setInterval(bgColor, 1000);
    }
}

stop.addEventListener("click", endbg);

function endbg() {
  clearInterval(intervalId);
  intervalId = null
}

function bgColor() {
  let hex = "0123456789ABCDEF";
  let randomColor = "";

  randomColor += hex[Math.floor(Math.random() * hex.length)];
  randomColor += hex[Math.floor(Math.random() * hex.length)];
  randomColor += hex[Math.floor(Math.random() * hex.length)];
  randomColor += hex[Math.floor(Math.random() * hex.length)];
  randomColor += hex[Math.floor(Math.random() * hex.length)];
  randomColor += hex[Math.floor(Math.random() * hex.length)];
  //   while (randomColor < hexLength) {
  //     randomColor += hex[Math.floor(Math.random() * hex.length)];
  //   }
  // return randomColor
  bg.style.backgroundColor = `#${randomColor}`;
  console.log(`#${randomColor}`);
}
// console.log(Math.floor(Math.random()*16));
