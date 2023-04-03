const apiKey = "888fc6acf8d5a7a7b9e51209de4178cc"
// const main = document.getElementById("main");


function updateDom(temp, skies) {

    main.innerHTML = `<h2>${temp}°C</h2>`
    

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
