let clock = document.getElementById("clock");

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
        SetBackground();
    }
}
setInterval(LiveClock , 1000);
function LiveDate(){
    var days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота' 
      ];
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let date = new Date(); 
    document.querySelector(".day").innerHTML = `${days[date.getDay()]}, ${monthNames[date.getMonth()]} ${date.getDate()}`;
}
LiveDate();

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


 let _play = document.querySelector(".play");
 let _pause = document.querySelector(".pause") ;
 let _audio = document.querySelector("audio");
 let _audioPrev = document.querySelector(".audio-prev") ;
 let _audioNext = document.querySelector(".audio-next");
 let _activeItems = document.querySelectorAll(".play-item");
 let _activeIndex = 0;
 
_play.onclick=function(){
    _audio.play();
    _play.hidden = true ;
    _pause.hidden = false ;
    _activeItems[_activeIndex].classList.add("item-active")
}
_pause.onclick=function(){
    _audio.pause();
    _play.hidden = false;
    _pause.hidden = true ;
   }
_pause.hidden = true ;
_audioPrev.onclick = function(){
    if (_index >= 0 ){
        GetMusic(_index);
    }else{
        _index = 3
        GetMusic(_index);
    }
    _index--
    RemoveActiveClass()
    _activeIndex--
    IndexIsMin() 
    _activeItems[_activeIndex].classList.add("item-active")
}
_audioNext.onclick = function(){
    if (_index !=3 ){
        GetMusic(_index);
    }else{
        _index = 0;
        GetMusic(_index);
    }
    _index++
    RemoveActiveClass()
    _activeIndex++ 
    IndexIsMax()
    _activeItems[_activeIndex].classList.add("item-active")
  
}

async function GetMusic(index){ 
    const quotes =  'audio.json';
    const res = await fetch(quotes);
    const audio = await res.json();
    _audio.setAttribute("src",audio[index].src);
    _audio.play();
}
let _index = 1 ;
 
function RemoveActiveClass(){
    for(let i = 0;i < _activeItems.length; i++)
        _activeItems[i].classList.remove("item-active");
}
 function IndexIsMax() {
   if (_activeIndex == _activeItems.length){
      _activeIndex = 0 ;
   }
 }
 function IndexIsMin() {
    if (_activeIndex <  0){
       _activeIndex = _activeItems.length -1;
    }
  }
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
