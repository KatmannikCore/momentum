let clock = document.getElementById("clock");
let _hours;
let _timesOfDay;
function LiveClock(){
    let time = new Date(); 
    let hours = time.getHours().toString();
    let minute = time.getMinutes().toString() ;
    let second = time.getSeconds().toString();
    _hours = hours;
    if (hours.length < 2) {
        hours = "0" + hours;
    }
    if (minute.length < 2) {
        minute = "0" + minute ;
    }
    if (second .length < 2) {
        second = "0" + second ;
    }
    let clockString = hours + ":" + minute + ":" + second ;
    clock.innerHTML = clockString ;
    if(minute == 59 && second == 59 ){
        GetTimesOfDay();
        SetGreetings();
    }
}
setInterval(LiveClock , 1000);
function LiveDate(){
    var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    let date = new Date(); 
    document.querySelector(".day").innerHTML = `${days[date.getDay()]}, ${monthNames[date.getMonth()]} ${date.getDate()}`;
}
LiveDate();
let _numberImage = 10 ;
let _countImages = 20;
let _body = document.querySelector("body");
function checkLengthIsMax(){
     if (_numberImage > _countImages){
        _numberImage= 10;
     }
 }
function checkLengthIsMin(){
     if ( _numberImage < 10){
        _numberImage = _countImages;
     } 
} 

document.querySelector(".prev").onclick = function(){
    checkLengthIsMin();
    _body.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${_timesOfDay}/${_numberImage}.jpg")` ;
    _numberImage--;
}
document.querySelector(".next").onclick = function(){
    checkLengthIsMax();
    _body.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${_timesOfDay}/${_numberImage}.jpg")` ;
    _numberImage++;
}

async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    let text = document.querySelector(".text");
    let author = document.querySelector(".author");
    let index = getRandomInt(3);
    text.innerHTML = data[index].text;
    author.innerHTML = data[index].author
  }
function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}
getQuotes()

document.querySelector(".change-quote").onclick = function() {
    getQuotes();
}



 function getWeather(url) {  
    let data ;
    const res =  fetch(url).then(function (response) {
        response.json().then(function (Data) {
          data = Data;
        }).then(
            function(){
              let weather = document.querySelector(".weather");
              document.getElementById("weather-temperature").innerHTML = Math.round(data.main.temp) + " " + data.weather[0].description;
              document.getElementById("humidity").innerHTML = data.main.humidity+"%";
              document.getElementById("wind-speed").innerHTML = "Скорость вестра: " + Math.round(parseFloat(data.wind.speed) * 10) / 10 +" м/c";
              document.getElementById("weather-sity").innerHTML = data.name; 
              document.getElementById("weather-img").setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`); 
            }
        )
      })   
}
window.onload= function(){
    let sity = document.getElementById("weather-sity").value;
    getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${sity}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`    )
}

//onblur 
document.getElementById("weather-sity").onblur = function() {
    let sity = document.getElementById("weather-sity").value;
    getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${sity}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`)
}

function SetNameForGreetings(){
    let name = document.getElementById("name");
    name.value = localStorage.getItem('name');
    name.oninput = () => {
      localStorage.setItem('name', name.value)
    };
}
function SetSityForGreetings(){
    let sity = document.getElementById("weather-sity");
    sity.value = localStorage.getItem('sity');
    sity.oninput = () => {
      localStorage.setItem('sity', sity.value)
    };
    if(sity.value == ""){
        sity.value = "Минск" 
    }
}
SetNameForGreetings();
SetSityForGreetings()