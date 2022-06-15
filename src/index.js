import { isThisWeek, isToday, parseISO } from 'date-fns';
import './style.css';


window.SubmitClick = () => {
  let submittedCity = document.getElementById('submit-form').value;
  Submit(submittedCity)
}
async function Submit(city) {

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=62210f355f86e20464dff962fe8f357b`, {mode: 'cors'});
  const weatherData = await response.json();
  if(weatherData.name === undefined){
    alert("could not locate city or state by that name");
  }
  else {
    // let outputDiv = document.getElementById('output');
    document.getElementById('city').innerHTML = "City: " + weatherData.name;
    document.getElementById('temp').innerHTML = "Temp: " + weatherData.main.temp + "F";
    document.getElementById('clouds').innerHTML = "Clouds: " + weatherData.weather[0].description
    document.getElementById('feels-like').innerHTML = "Feels Like: " + weatherData.main.feels_like + "F";
  }



}
window.Submit = Submit;