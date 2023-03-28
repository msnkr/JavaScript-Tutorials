let weatherCelcius = document.getElementById("weather-celcius");
let weatherTime = document.getElementById("weather-time");


// Functions
function getWeatherData() {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
    .then(res => res.json())
    .then(data => {

        let temperature = data.hourly.temperature_2m;
        let time = data.hourly.time;

        let output = "";
        temperature.forEach((element, index) => {
            let t = time[index]
            output += `<div><p> ${element} ${t} </p></div>`
        });
        weatherCelcius.innerHTML = output
    });
}

getWeatherData();
// Events