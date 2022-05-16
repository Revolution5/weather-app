//API key is a free public key, therefore showing it here does not matter

export async function getWeatherData(city) {
    //convert city name to coordinates
    const responseCoords = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=0a797fb7828e6df998b5f208074b34be", {mode: "cors"});
    const cityCoords = await responseCoords.json();
    console.log(cityCoords);
    //use coordinates to get weather data
}