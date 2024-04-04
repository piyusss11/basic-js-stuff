let joke = document.querySelector("#joke");
let btn = document.querySelector("#btn");
console.log("hey");

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let jockey = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            joke.innerHTML = item.joke
        });

}

btn.addEventListener("click", jockey)