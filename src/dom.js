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

    getWeatherData(input)
    .then(function(data) {
        let stats = processWeatherData(data);
        city.textContent = stats.cityName + ", ";
        country.textContent = stats.countryName;
        temp.textContent = stats.currentTemp + "°";
        humidity.textContent = "Humidity: " + stats.humidity;
        console.log(stats);
    }) 
}
