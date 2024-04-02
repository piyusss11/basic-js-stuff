let main = document.querySelector("#main")

let red = document.querySelector("#red");
let black = document.querySelector("#black");
let gray = document.querySelector("#gray");
let blue = document.querySelector("#blue");

red.addEventListener("click",()=>{
    gsap.from("#red",{
        // x:-10,
        scale:2,
        duration:1
    })
    main.style.color ="black";
    main.style.backgroundColor = "lightcoral";
})
black.addEventListener("click",()=>{

       gsap.from("#black",{
           // x:-10,
           scale:2,
           duration:1
       })

    main.style.backgroundColor = "black";
    main.style.color="white";
    black.style.border = "1px solid white";
})
gray.addEventListener("click",()=>{
    gsap.from("#gray",{
        // x:-10,
        scale:2,
        duration:1
    })
    main.style.color ="black";
    main.style.backgroundColor = "lightgray";
})
blue.addEventListener("click",()=>{
    gsap.from("#blue",{
        // x:-10,
        scale:2,
        duration:1
    })
    main.style.color ="black";
    main.style.backgroundColor = "lightblue";
})