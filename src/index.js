import { getWeatherData, processWeatherData } from "./weather-data";

let data = getWeatherData("fountain valley");

let stats = processWeatherData(data);

console.log(stats);
