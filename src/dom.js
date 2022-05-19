import { getWeatherData, processWeatherData } from "./weather-data";

export function getInput() {
    let form = document.querySelector("form");
    let submitButton = document.querySelector("#submit");
    let input = "";

    submitButton.addEventListener("click", function(e) {
        input = document.getElementById("search").value;
    })

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        populateStats(input);  
    })

}

function populateStats(input) {
    let city = document.querySelector(".city");
    let country = document.querySelector(".country");
    let temp = document.querySelector(".temp");
    let humidity = document.querySelector(".humidity");
    let feelsLike = document.querySelector(".feels-like");
    let wind = document.querySelector(".wind");

    getWeatherData(input)
    .then(function(data) {
        let stats = processWeatherData(data);
        city.textContent = stats.cityName + ", ";
        country.textContent = stats.countryName;
        temp.textContent = stats.currentTemp + "°F";
        humidity.textContent = "Humidity: " + stats.humidity + "%";
        feelsLike.textContent = "Feels Like: " + stats.feelsLike + "°F";
        wind.textContent = "Wind Speed: " + stats.wind + "MPH";
        console.log(stats);
    }) 
}
