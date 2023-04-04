const apiKey = ""
const main = document.getElementById("main");
const weatherSkies = document.getElementById("weather-skies");
const weatherCelcius = document.getElementById("weather-celcius");
let img = document.getElementById("current-temp");
let descriptionWeather = document.getElementById("description");


function updateDom(temp, skies, description) {

    weatherSkies.innerHTML = skies;
    weatherCelcius.innerHTML = temp;
    img.src = `images/${skies}.png`;
    descriptionWeather.innerHTML = description;
}



async function getWeather(lat, lon) {

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    const data = await res.json();

    let weatherTemp = data.main.temp;
    let weatherDescription = data.weather[0].main;
    let description = data.weather[0].description
    
    updateDom(weatherTemp, weatherDescription, description);
}

async function getCodes() {

    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Johannesburg&limit=5&appid=${apiKey}`);
    const data = await res.json()

    const lat = data[0].lat;
    const lon = data[0].lon;

    getWeather(lat, lon);

};

getCodes();
