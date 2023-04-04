const apiKey = "888fc6acf8d5a7a7b9e51209de4178cc"
const main = document.getElementById("main");
const weatherSkies = document.getElementById("weather-skies");
const weatherCelcius = document.getElementById("weather-celcius");
let img = document.getElementById("current-temp")


function updateDom(temp, skies) {

    weatherSkies.innerHTML = skies;
    weatherCelcius.innerHTML = temp;
    img.src = `images/${skies}.png`

}



async function getWeather(lat, lon) {

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    const data = await res.json();

    let weatherTemp = data.main.temp;
    let weatherDescription = data.weather[0].main;
    
    updateDom(weatherTemp, weatherDescription);
}

async function getCodes() {

    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Johannesburg&limit=5&appid=${apiKey}`);
    const data = await res.json()

    const lat = data[0].lat;
    const lon = data[0].lon;

    getWeather(lat, lon);

};

getCodes();
