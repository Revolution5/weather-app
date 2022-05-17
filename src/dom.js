import { getWeatherData, processWeatherData } from "./weather-data";

export function populateStats() {
    getWeatherData("fountain valley")
    .then((data) => {
        let stats = processWeatherData(data);
        console.log(stats);
    }) 
}
