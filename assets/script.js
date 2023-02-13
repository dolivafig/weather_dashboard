var APIkey = "d2293f90cfd082b6965ab5c95c4fbe70";
var lat;
var lon;
var cityInput = document.querySelector("#cityInput");
var submitbtn = document.querySelector("#searchbtn");
var cityList = document.querySelector(".cityList");
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={d2293f90cfd082b6965ab5c95c4fbe70}

submitbtn.addEventListener("click", function (event) {
    var city = cityInput.value;
    localStorage.setItem("city", city);
    var citybtn = document.createElement("button");
    citybtn.innerHTML = city;
    cityList.appendChild(citybtn);

    getLongLat(city);
})
$(".cityList").on("click", function (event) {
    displayWeather();
    displayForecast();
}
)

function getLongLat(city) {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=' + APIkey, {
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
            console.log(lat, lon);
            getWeather(lat, lon);
        });

}

function getWeather(lat, lon) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?units=imperial&cnt=40&lat=' + lat + '&lon=' + lon + '&appid=' + APIkey).then(function (response) {
        return response.json();
    })
        .then(function (data) {
            console.log(data);
            console.log(data.city.name);
            console.log(data.list[0]);
            console.log(data.list[0].dt_txt);
            console.log(data.list[0].weather.icon);
            console.log(data.list[0].main.temp);
            console.log(data.list[0].main.humidity);
            console.log(data.list[0].wind.speed);
            displayWeather(data);
            displayForecast(data);
            //THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
        });

}

var cityname = document.querySelector("#cityName");
var displaydate = document.querySelector("#displaydate");
var temp = document.querySelector("#temp");
var humidity = document.querySelector("#humidity");
var windspeed = document.querySelector("#windspeed");
var icon = "";

function displayWeather(data) {

    cityname.innerHTML = data.city.name;
    displaydate.innerHTML = data.list[0].dt_txt;
    icon = data.list[0].weather.icon;
    temp.innerHTML = data.list[0].main.temp;
    humidity.innerHTML = data.list[0].main.humidity;
    windspeed.innerHTML = data.list[0].wind.speed;

}

function displayForecast(data) {
        var displayfdate = document.querySelector("#fdate1");
        var ftemp = document.querySelector("#ftemp1");
        var fhumidity = document.querySelector("#fhum1");
        var fwindspeed = document.querySelector("#fwindsp1");
        var ficon = document.querySelector("#ficon1");

        displayfdate.innerHTML = data.list[8].dt_txt.split(" ")[0];
        ficon = data.list[8].weather.icon;
        ftemp.innerHTML = data.list[8].main.temp;
        fhumidity.innerHTML = data.list[8].main.humidity;
        fwindspeed.innerHTML = data.list[8].wind.speed;

        displayAll (data);
    }

    function displayAll(data){
        $("#fdate2").text(data.list[16].dt_txt);
        $("#ftemp2").text(data.list[16].main.temp);
        $("#ficon2").text(data.list[16].weather.icon);
        $("#fhum2").text(data.list[16].main.humidity);
        $("#fwindsp2").text(data.list[16].wind.speed);

        $("#fdate3").text(data.list[24].dt_txt);
        $("#ftemp3").text(data.list[24].main.temp);
        $("#ficon3").text(data.list[24].weather.icon);
        $("#fhum3").text(data.list[24].main.humidity);
        $("#fwindsp3").text(data.list[24].wind.speed);
        
        $("#fdate4").text(data.list[32].dt_txt);
        $("#ftemp4").text(data.list[32].main.temp);
        $("#ficon4").text(data.list[32].weather.icon);
        $("#fhum4").text(data.list[32].main.humidity);
        $("#fwindsp4").text(data.list[32].wind.speed);

        $("#fdate5").text(data.list[39].dt_txt);
        $("#ftemp5").text(data.list[39].main.temp);
        $("#ficon5").text(data.list[39].weather.icon);
        $("#fhum5").text(data.list[39].main.humidity);
        $("#fwindsp5").text(data.list[39].wind.speed);
    }
