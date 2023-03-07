import getKey from "../utilities/myKey";
import WeatherData from "./weatherData";
// API FUNCTION
export async function getWeatherData(location) {
    const API_KEY = getKey()
    const weatherDataObj = new WeatherData()
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`,
        {
          mode: "cors",
        }
      );
      const weatherData = await response.json();
      // Assigning object properties
      weatherDataObj.setCountry(weatherData.sys.country)
    //   weatherDataObj.tempK = weatherData.main.temp;
    //   weatherDataObj.realK = weatherData.main.feels_like;
    //   weatherDataObj.minK = weatherData.main.temp_min;
    //   weatherDataObj.maxK = weatherData.main.temp_max;
    //   weatherDataObj.pressure = weatherData.main.pressure;
    //   weatherDataObj.humidity = weatherData.main.humidity;
    //   weatherDataObj.windSpd = weatherData.wind.speed;
    //   weatherDataObj.state = weatherData.weather[0].main;
    //   weatherDataObj.stateDescription = weatherData.weather[0].description;
    console.log(WeatherData)
    console.log(weatherDataObj)
    return weatherDataObj;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
  