//variables//
var citySearchInput = document.getElementById("#search-city");
var citySearchBtn = document.getElementById("#search-city-button");
var currentCity = document.getElementById("#currentCity");
var currentDate = document.getElementById("#currentDate")
var nowTemp = document.getElementById("#currentTemp");
var humidity = document.getElementById("#currentHumidity");
var windSpeed = document.getElementById("#current-wind-speed");
var uvIndex = document.getElementById("#uv-index");
var searchHistory = document.getElementById("#searchHistory");
 var weather = document.getElementById("#weather");
 var futureDateEl = document.querySelector(".future-date");
var searchHistory = JSON.parse(localStorage.getItem("search")) || [];

//Api key goes here//
var APIkey = "f000d8b04a837f2046a405d6dd255126";

//attempting weather  api call//
// var currentCityQueryURL =`http://api.openweathermap.org/data/2.5/find?lat={currentdata.coord.lat}&lon={currentdata.coord.lon}&appid={API key}`;//
const searchValue = "Grand Junction";
var currentCityQueryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid="+APIkey+"&units=imperial";
fetch (currentCityQueryURL)
    .then (function (res) {
        return res.json()
    })
console.log(currentCity)

 .then (function (currentCitydata) {
        currentDate.setAttribute("src", "http://openweather.map.org/img/w/" + currentdata[0].icon + ".png")
        nowTemp.textContent = 'Temperature: ' + currentdata.main.temp + '°F';
        humidity.textContent = 'Feels like: '  + currentdata.main.humidity + '%';
        windSpeed.textContent = 'windSpeed: '  + currentdata.wind.speed + 'MPH';
    })

//attempting uv api call//

   var uvQueryUrl = "http://api.openweathermap.org/data/2.5/uvi?q=" + searchValue + "&appid="+APIkey+"&units=imperial";
   fetch (uvURL)
    .then (function (res) {
        return res.json()
    })
    .then (function (uvIndexdata) {
    uvIndex.textContent = 'Uv Index' + uvIndexdata.value;
})

   




















// attempt at search history 
    function myFunction() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("#searchHistory");
        filter = input.value.toUpperCase();
        ul = document.getElementById("list");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }