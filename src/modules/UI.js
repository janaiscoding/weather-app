import loadHTML from "./loadHTML";

export default class UI {
  static loadHomepage() {
    loadHTML();
  }
  static initializeButtons() {
    const userInput = document.getElementById("location");
    const submitButton = document.getElementById("submit");
  }
  static setLocation(){
    const location = userInput.value;

  }
}
//A USER WILL SELECT A LOCATION
const setLocation = () => {
    location = userInput.value;
    return location;
  };
  
  // HANDLE KEYPRESS
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setLocation();
      getWeatherData(location);
    }
  });
  
  // HANDLE SUBMIT BUTTON
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    setLocation();
    getWeatherData(location);
  });