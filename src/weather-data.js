//API key is a free public key, therefore showing it here does not matter

export async function getWeatherData(city) {
    try {
        //convert city name to coordinates
        const responseCoords = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=0a797fb7828e6df998b5f208074b34be", 
        {mode: "cors"});
        const cityCoords = await responseCoords.json();
        let lat = cityCoords[0].lat;
        let lon = cityCoords[0].lon;

        //use coordinates to get weather data
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=0a797fb7828e6df998b5f208074b34be&units=imperial",
        {mode: "cors"});
        const weatherData = await response.json();

        return weatherData; 
    }
    catch(err) {
        console.log(err);
    }
}

export function processWeatherData(weatherData) {
    let weatherStats = {
        cityName: "",
        countryName: "",
        currentTemp: 0,
        humidity: 0
    };
    
    weatherStats.cityName = weatherData.name;
    weatherStats.countryName = weatherData.sys.country;
    weatherStats.currentTemp = weatherData.main.temp;
    weatherStats.humidity = weatherData.main.humidity;

    return weatherStats;
}
