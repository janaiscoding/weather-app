import loadHTML from "./loadHTML";
import { getWeatherData } from "./API";

export default class UI {
  static loadHomepage() {
    loadHTML();
    UI.handleSubmitButton()
    UI.handleKeypress()
  }
  static setLocation(){
    const userInput = document.getElementById("location");
    let location = userInput.value;
    console.log(location)
    return location;
  }
  static handleSubmitButton(){
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      UI.setLocation();
      getWeatherData(location);
    });
  }
  static handleKeypress(){
    const userInput = document.getElementById("location");
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        UI.setLocation();
        getWeatherData(location);
      }
    });  
  }
}
