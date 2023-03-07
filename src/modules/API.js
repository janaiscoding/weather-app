import getKey from "../utilities/myKey";
import WeatherClass from "./weatherClass";
const API_KEY = getKey();
const weatherDataObj = new WeatherClass();
// API FUNCTION

export async function getWeatherData() {
  const userInput = document.getElementById("location");
  const location = userInput.value;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`,
      {
        mode: "cors",
      }
    );
    const weatherData = await response.json();
    console.log(weatherData);
    // Assigning object properties  
    // weatherDataObj.setCountry(weatherData.sys.country);
    // weatherDataObj.setTempK(weatherData.main.temp);
    // weatherDataObj.setRealK(weatherData.main.feels_like);
    // weatherDataObj.setMinK(weatherData.main.temp_min);
    // weatherDataObj.setMaxK(weatherData.main.temp_max);
    // weatherDataObj.setPressure(weatherData.main.pressure);
    // weatherDataObj.setHumidity(weatherData.main.humidity);
    // weatherDataObj.setWindSpd(weatherData.wind.speed);
    // weatherDataObj.setState(weatherData.weather[0].main);
    // weatherDataObj.setStateDescription(weatherData.weather[0].description);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
