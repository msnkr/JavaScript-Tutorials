let weatherCelcius = document.getElementById("weather-celcius");
let weatherTime = document.getElementById("weather-time");


let weatherData = [];
getWeatherData();

// Functions
// Display each item in data

// Unpack the data
// function unpackData(defaultData = weatherData) {

//     // let weather = weatherData.temperature_2m[0];
//     // let time = weatherData.time[0];
//     // console.log(weather, time);
//     console.log(weatherData[0].temperature_2m[0]);
// }

async function getWeatherData() {

    let weather = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m");
    let data = await weather.json();

    weatherData.push(data.hourly);
    // unpackData();
}

// Events