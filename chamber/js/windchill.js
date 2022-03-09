//Weather
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3919968&units=metric&appid=83937f4336e9fe98c6f80636490e9e9e";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let temp = document.querySelector('#current-temp');
    temp.textContent = jsObject.main.temp.toFixed(1);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const windspeed = jsObject.wind.speed.toFixed(1);
    const windchill = jsObject.main.feels_like.toFixed(1);

    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    document.querySelector('#windspeed').textContent = windspeed;
    document.querySelector("#windchill").textContent = windchill;
    // windchill.textContent = windChill(temp, windchill);
  });
// const calWindChill = (temperature, speed) => {
//     return (temperature >= 10 && speed > 3) 
//     ?
//         Math.round(
//             35.74 
//             + 0.6215 
//             * temperature 
//             - 35.75 
//             * Math.pow(speed, 0.16) 
//             + 0.4275 
//             * temperature 
//             * Math.pow(speed, 0.16) 
//             )
//     :
//     "N/A";
// }
const windChill = (celsiusTemp, windS) => {
  return (celsiusTemp <= 10 && windS > 4.8)
  ?
    Math.round(0.6215 * celsiusTemp - 11.37 *
      Math.pow(windS, 0.16) + 0.3965 * celsiusTemp * 
      Math.pow(windS, 0.16) + 13.12)
  :
    "N/A";
}


// const displayWindChill = () => {
//     let temperature = document.querySelector("#current-temp");
//     let wind = document.querySelector("#windspeed");
//     wind.textContent = calWindChill()
//     let result = calWindChill(temperature, wind);
//     console.log(temperature, wind, result);
//     document.querySelector("#chillWind").innerHTML = result;
// }

// displayWindChill();