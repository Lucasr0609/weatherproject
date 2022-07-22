var submitbutton = document.getElementById('btn')
var input = document.getElementById('citysearch')
var label = document.getElementById('label')
var temp = document.getElementById('display-current-temp')
var wind = document.getElementById('display-current-wind')
var humidity = document.getElementById('display-current-humidity')
var uvIndex = document.getElementById('display-current-uvindex')

var getCityWeather = function (cityname) {
    //format the github api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=4bba3cfced2651343b44d79c2548661a";
       
    // make a request to the url
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
        response.json().then(function(data) {
            displayCurrent(data);
            getUVData(data);
            getFiveDayData(data);
            saveCityName(cityname);
        });
    } else {
        alert('Error: City Not Found');
    }
    });
    
};