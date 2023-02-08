var APIkey = "d2293f90cfd082b6965ab5c95c4fbe70";
var lat;
var lon;
var cityInput = document.querySelector("#cityInput");
var submitbtn = document.querySelector("#searchbtn");
var cityList = document.querySelector(".cityList");
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={d2293f90cfd082b6965ab5c95c4fbe70}

submitbtn.addEventListener("click" , function(event) {
var city = cityInput.value;
localStorage.setItem("city", city);
var citybtn = document.createElement("button");
cityList.appendChild(citybtn);
cityList.setAttribute("type", "button;");
getLongLat(city);
})

function getLongLat(city) {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q='+ city +'&limit=1&appid='+ APIkey, {
        //   method: 'GET', //GET is the default.
        //   credentials: 'same-origin', // include, *same-origin, omit
        //   redirect: 'follow', // manual, *follow, error
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data[0].lat);
            console.log(data[0].lon);
            lat = data[0].lat;
            lon = data[0].lon;
            console.log(lat,lon);
getWeather(lat,lon);
        });

}

function getWeather(lat, lon) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?cnt=40&lat='+ lat +'&lon='+ lon + '&appid='+ APIkey)  .then(function (response) {
        return response.json();
    })
        .then(function (data) {
            console.log(data);
            console.log(data.city.name);
            console.log(data.list[0]);
            console.log(data.list[0].dt_text);
            console.log(data.list[0].weather[2]);
        });
        // displayWeather(data);
}

// function displayWeather( )

