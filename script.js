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

    //http://openweathermap.org/img/wn/02d@2x.png
  }
  getWeather()

 /*async function getAudio() {  
    const adio = 'audio.json';
    const res = await fetch(adio);
    const data = await res.json(); 
    let audio = document.querySelector("audio");
    audio.setAttribute("src", data[0].src);
  }
  */
 let _play = document.querySelector(".play")
 let _pause = document.querySelector(".pause") 
 let _audio = document.querySelector("audio")
 let _audioPrev = document.querySelector(".audio-prev") 
 let _audioNext = document.querySelector(".audio-next")
_play.onclick=function(){
    _audio.play();
    _play.hidden = true ;
    _pause.hidden = false ;
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
}
_audioNext.onclick = function(){
    if (_index !=3 ){
        GetMusic(_index);
        _index++
    }else{
        _index = 0;
        GetMusic(_index);
    }
}

async function GetMusic(index){ 
    const quotes =  'audio.json';
    const res = await fetch(quotes);
    const audio = await res.json();
    _audio.setAttribute("src",audio[index].src);
    _audio.play();
    alert(_index);
}
let _index = 1 ;


