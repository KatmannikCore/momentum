function getWeather(url) {  
    let data ;
    const res =  fetch(url).then(function (response) {
        response.json().then(function (Data) {
            data = Data;
        }).then(
            function(){
                try{
                    let weather = document.querySelector(".weather");
                    document.getElementById("weather-temperature").innerHTML = Math.round(data.main.temp) + " " + data.weather[0].description;
                    document.getElementById("humidity").innerHTML = data.main.humidity+"%";
                    document.getElementById("wind-speed").innerHTML = "Скорость вестра: " + Math.round(parseFloat(data.wind.speed) * 10) / 10 +" м/c";
                    document.getElementById("weather-sity").innerHTML = data.name; 
                    document.getElementById("weather-img").setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`); 
                }catch(err){
                    document.querySelector(".info").innerHTML = "Вы неверно ввели город"
                }
            }
        )
    }); 
}
window.onload= function(){
    let sity = document.getElementById("weather-sity").value;
    getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${sity}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`)
}
document.getElementById("weather-sity").onblur = function() {
    let sity = document.getElementById("weather-sity").value;
    getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${sity}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`)
}
