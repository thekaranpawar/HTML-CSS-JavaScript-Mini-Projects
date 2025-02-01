
const temp = document.querySelector(".temperature");
const cityName = document.querySelector(".city-name"); 
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

const search = document.querySelector(".search");
const btn = document.querySelector("button");

const apiKey = "6567f292934b3e0e48778bc52d1120c3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if (data.cod === "404") {
        alert("City not found! Please enter a valid city name.");
        return;
    }
    cityName.innerHTML = data.name; 
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";
    
    if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./img/rain.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./img/clear.png";
    }
    else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./img/clouds.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./img/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./img/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./img/snow.png";
    }
}
btn.addEventListener("click", () => {
    const city = search.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name!");
    }
});




