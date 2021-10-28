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
        Temp();
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
async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Москва&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    console.log(data);
    console.log( data.weather[0].description, data.main.temp);
    let weather = document.querySelector(".weather");
  }
  getWeather()

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
        _index--
    }else{
        _index = 3
        GetMusic(_index);
    }
    RemoveActiveClass()
    _activeIndex--
    IndexIsMin() 
    _activeItems[_activeIndex].classList.add("item-active")
}
_audioNext.onclick = function(){
    if (_index !=3 ){
        GetMusic(_index);
        _index++
    }else{
        _index = 0;
        GetMusic(_index);
    }
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