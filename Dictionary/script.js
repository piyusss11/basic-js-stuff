const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let container = document.querySelector("#container");
let input = document.querySelector("#write-text");
let search = document.querySelector("#search-btn");
let bigWord = document.querySelector("#word-posi");
let audio = document.querySelector("#audio-btn");
let wordMeaning = document.querySelector("#word-mean");
let wordExample = document.querySelector("#word-example");
let italic = document.querySelector("#italic-1");

search.addEventListener("click", () => {
  wordSearch(input.value);
});

async function wordSearch(word) {
  let response = await fetch(url + word);
  if (response.status == 404) {
    bigWord.innerHTML = "Word doesn't exist";
  } else {
    let data = await response.json();
    console.log(data[0].phonetics[0].audio);
    bigWord.innerHTML = data[0].word;
    italic.innerHTML = `${data[0].meanings[0].partOfSpeech}`;
    // container.appendChild(italic)
    wordMeaning.innerHTML = data[0].meanings[0].definitions[0].definition;
    if (!data[0].meanings[0].definitions[0].example) {
    } else {
      wordExample.innerHTML = `<strong>Sentence - </strong>${data[0].meanings[0].definitions[0].example}`;
    }
    const sound = new Audio(data[0].phonetics[0].audio);
    if (!sound) {
      alert("No sound");
    } else {
      audio.addEventListener("click", () => {
        sound.play();
        console.log("audio is clicked");
      });
    }
  }
}

// const apiKey = "99cebff5c9c500c7fc8c03a462be490e";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");

// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

//   if (response.status == 404) {
//     document.querySelector(".error").style.display = "block";
//     document.querySelector(".weather").style.display = "none";
//   } else {
//     var data = await response.json();

//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML =
//       Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

//     if (data.weather[0].main == "Clouds") {
//       weatherIcon.src = "images/clouds.png";
//     } else if (data.weather[0].main == "Clear") {
//       weatherIcon.src = "images/clear.png";
//     } else if (data.weather[0].main == "Rain") {
//       weatherIcon.src = "images/rain.png";
//     } else if (data.weather[0].main == "Drizzle") {
//       weatherIcon.src = "images/drizzle.png";
//     } else if (data.weather[0].main == "Mist") {
//       weatherIcon.src = "images/mist.png";
//     } else if (data.weather[0].main == "Snow") {
//       weatherIcon.src = "images/snow.png";
//     }

//     document.querySelector(".weather").style.display = "block";
//     document.querySelector(".error").style.display = "none";
//   }
// }

// searchBtn.addEventListener("click", () => {
//   checkWeather(searchBox.value);
// });
