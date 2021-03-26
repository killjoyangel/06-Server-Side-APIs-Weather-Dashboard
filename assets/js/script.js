/* list of saved searches
saved searches

search bar - submitted normal form - make call open weather api search forecast of city
whatever city searched needs to go to local storage

container: name of city from search todays date they searched on, to the right wheather icon
date information - current temperature, current humidity, uv index, windspeed 

5 day forcast container : information in cards specific date, icon, temp, humidity
*/

//form submission
$("#searchbtn").click(function(){
    event.preventDefault()
    console.log("button");
let  cityInput = $("#cityInput").val()
console.log(cityInput);
let requestUrl = "http://www.api.openweathermap.org/data/2.5/forecast?q=" + cityInput  + "&appid=f000d8b04a837f2046a405d6dd255126"
// get correct request URL for open wheather api subsitute name of city whatever user typed in, city 
console.log(requestUrl);
fetch(requestUrl)
/*.then(function (response) {
return response.json();
})*/
.then(function (data) {
    // weather info - weather container
    console.log(data);
   // let  weather = $("#weather")
  //  weather.textContent = data.weather 
    //data.whateverkey.whateverkey
   

})
})

