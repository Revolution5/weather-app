import { getWeatherData, processWeatherData } from "./weather-data";

let data = await getWeatherData("fountain valley");

let stats = processWeatherData(data);
console.log(stats);






