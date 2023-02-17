var APIkey = "d2293f90cfd082b6965ab5c95c4fbe70";
var lat;
var lon;
var cityInput = document.querySelector("#cityInput");
var submitbtn = document.querySelector("#searchbtn");
var cityList = document.querySelector(".cityList");
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={d2293f90cfd082b6965ab5c95c4fbe70}
document.getElementById("displayWeather").style.display = "none";
document.getElementById("forecastList").style.display = "none"

submitbtn.addEventListener("click", function (event) {
    document.getElementById("displayWeather").style.display = "flex";
    document.getElementById("forecastList").style.display = "flex"
    var city = cityInput.value;
    localStorage.setItem("city", city);
    var citybtn = document.createElement("button");
    // citybtn.setAttribute("style", "background-color: blue")
    citybtn.innerHTML = city;
    cityList.appendChild(citybtn);

    getLongLat(city);
    
})

$("#cityList").on("click", function(event) {
    console.log(event.target.innerHTML)
    getLongLat(event.target.innerHTML)
    cityInput.value = event.target.innerHTML;
    
})


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
            console.log(data.list[0].weather[0].icon);
            console.log(data.list[0].main.temp);
            console.log(data.list[0].main.humidity);
            console.log(data.list[0].wind.speed);
            displayWeather(data);
            displayForecast(data);
            //THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
        });

}

function displayWeather(data) {

    $("#cityName").text(data.city.name);
    $("#displaydate").text(data.list[0].dt_txt.split(" ")[0]);
    $("#temp").text(data.list[0].main.temp);
    $("#humidity").text(data.list[0].main.humidity);
    $("#windspeed").text(data.list[0].wind.speed);
    var icon = data.list[0].weather[0].icon;
    $("#wicon").attr("src","http://openweathermap.org/img/w/"+icon+".png");

    // cityname.innerHTML = data.city.name;
    // displaydate.innerHTML = data.list[0].dt_txt;
    // icon = data.list[0].weather[0].icon;
    // temp.innerHTML = data.list[0].main.temp;
    // humidity.innerHTML = data.list[0].main.humidity;
    // windspeed.innerHTML = data.list[0].wind.speed;
}

function displayForecast(data) {

        $("#fdate1").text(data.list[8].dt_txt.split(" ")[0]);
        $("#ftemp1").text(data.list[8].main.temp);
        var icon1= data.list[8].weather[0].icon;
        $("#wicon1").attr("src", "http://openweathermap.org/img/w/"+icon1+".png")
        $("#fhum1").text(data.list[24].main.humidity);
        $("#fwindsp1").text(data.list[24].wind.speed);

        $("#fdate2").text(data.list[16].dt_txt.split(" ")[0]);
        $("#ftemp2").text(data.list[16].main.temp);
        var icon2 = data.list[16].weather[0].icon;
        console.log(icon2)
        $("#wicon2").attr("src", "http://openweathermap.org/img/w/"+icon2+".png")
        $("#fhum2").text(data.list[16].main.humidity);
        $("#fwindsp2").text(data.list[16].wind.speed);

        $("#fdate3").text(data.list[24].dt_txt.split(" ")[0]);
        $("#ftemp3").text(data.list[24].main.temp);
        var icon3 =  data.list[24].weather[0].icon;
        $("#wicon3").attr("src", "http://openweathermap.org/img/w/"+icon3+".png")
        $("#fhum3").text(data.list[24].main.humidity);
        $("#fwindsp3").text(data.list[24].wind.speed);
        
        $("#fdate4").text(data.list[32].dt_txt.split(" ")[0]);
        $("#ftemp4").text(data.list[32].main.temp);
        var icon4 = data.list[32].weather[0].icon;
        $("#wicon4").attr("src", "http://openweathermap.org/img/w/"+icon4+".png")
        $("#fhum4").text(data.list[32].main.humidity);
        $("#fwindsp4").text(data.list[32].wind.speed);

        $("#fdate5").text(data.list[39].dt_txt.split(" ")[0]);
        $("#ftemp5").text(data.list[39].main.temp);
        var icon5 = data.list[39].weather[0].icon;
        $("#wicon5").attr("src", "http://openweathermap.org/img/w/"+icon5+".png")
        $("#fhum5").text(data.list[39].main.humidity);
        $("#fwindsp5").text(data.list[39].wind.speed);
    }
