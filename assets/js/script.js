//variables//
var citySearchInput = document.getElementById("search-city");
var citySearchBtn = document.getElementById("search-city-button");
var currentCity = document.getElementById("currentCity");
var currentDate = document.getElementById("currentDate")
var nowTemp = document.getElementById("currentTemp");
var humidity = document.getElementById("currentHumidity");
var windSpeed = document.getElementById("current-wind-speed");
var UVindex = document.getElementById("uv-index");
var searchHistory = document.getElementById("#searchHistory");
 var weather = document.getElementById("#weather");
 var futureDateEl = document.querySelector(".future-date");
var searchHistory = JSON.parse(localStorage.getItem("search")) || [];

//Api key goes here//
var APIkey = "f000d8b04a837f2046a405d6dd255126";

//attempting api call//
var currentCityQueryURL =`http://api.openweathermap.org/data/2.5/find?lat={currentdata.coord.lat}&lon={currentdata.coord.lon}&appid={API key}`;
fetch (currentCityQueryURL)
    .then (function (res) {
        return res.json()
    })

    .then (function currentCitydata) {
        currentDate.setAttribute("src", "http://openweather.map.org/img/w/" + currentdata[0].icon + ".png")
        nowTemp.textContent = 'Temperature: ' + currentdata.main.temp + '°F';
        humidity.textContent = 'Feels like: '  + currentdata.main.humidity + '%';
        windSpeed.textContent = 'windSpeed: '  + currentdata.wind.speed + 'MPH';
    }

