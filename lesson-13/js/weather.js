// create an "apiURL" variable
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.98&lon=-77.09&units=metric&exclude=hourly,minutely&appid=83937f4336e9fe98c6f80636490e9e9e"
//banner
const banner = document.getElementById("banner");
const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", () => {
    banner.classList.remove("active");
})

// Use fetch() to request the given apiURL. 
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //today's weather
    let temp = document.querySelector('#current-temp');
    temp.textContent = jsObject.current.temp.toFixed(1);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    const desc = jsObject.current.weather[0].description;
    const humidity = jsObject.current.humidity.toFixed(0);

    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    document.querySelector("#humidity").textContent = humidity;

    //day 2
    let temp2 = document.querySelector("#day-temp2");
    temp2.textContent = jsObject.daily[0].temp.day.toFixed(1);
    const iconsrc2= `https://openweathermap.org/img/w/${jsObject.daily[0].weather[0].icon}.png`;
    let dayname1 = document.querySelector("#dayname1");
    dayname1.textContent = new Date(jsObject.daily[1].dt * 1000).toLocaleDateString("en", {weekday: "long",});
    document.querySelector('#weathericon2').setAttribute('src', iconsrc2);

    //day 3
    let temp3 = document.querySelector("#day-temp3");
    temp3.textContent = jsObject.daily[1].temp.day.toFixed(1);
    const iconsrc3= `https://openweathermap.org/img/w/${jsObject.daily[1].weather[0].icon}.png`;
    let dayname2 = document.querySelector("#dayname2");
    dayname2.textContent = new Date(jsObject.daily[2].dt * 1000).toLocaleDateString("en", {weekday: "long",});
    document.querySelector('#weathericon3').setAttribute('src', iconsrc3);

    //day 4
    let temp4 = document.querySelector("#day-temp4");
    temp4.textContent = jsObject.daily[2].temp.day.toFixed(1);
    const iconsrc4= `https://openweathermap.org/img/w/${jsObject.daily[2].weather[0].icon}.png`;
    let dayname3 = document.querySelector("#dayname3");
    dayname3.textContent = new Date(jsObject.daily[3].dt * 1000).toLocaleDateString("en", {weekday: "long",});
    document.querySelector('#weathericon4').setAttribute('src', iconsrc4);

    });