import { getWeatherData, processWeatherData } from "./weather-data";

export function populateStats(city) {

    getWeatherData(city)
    .then(function(data) {
        let stats = processWeatherData(data);
        console.log(stats);
    }) 
}
