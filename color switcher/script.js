let main = document.querySelector("#main")

let red = document.querySelector("#red");
let black = document.querySelector("#black");
let gray = document.querySelector("#gray");
let blue = document.querySelector("#blue");

red.addEventListener("click",()=>{
    main.style.color ="black";
    main.style.backgroundColor = "lightcoral";
})
black.addEventListener("click",()=>{
    main.style.backgroundColor = "black";
    main.style.color="white";
    black.style.border = "1px solid white";
})
gray.addEventListener("click",()=>{
    main.style.color ="black";
    main.style.backgroundColor = "lightgray";
})
blue.addEventListener("click",()=>{
    main.style.color ="black";
    main.style.backgroundColor = "lightblue";
})