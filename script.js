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
}
setInterval(LiveClock , 1000);
function TimeOfDayDefinitions(){
    if(_hours < 6){
        _timesOfDay = "night";
    }else if( _hours < 18){
        _timesOfDay = "morning";
    }else if(_hours > 18){
        _timesOfDay = "evening";
    }

}
setInterval(TimeOfDayDefinitions , 1000);

let _numberImage = 10 ;
let _countImages = 20;
let _body = document.querySelector("body");
_body.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${_timesOfDay}/${_numberImage}.jpg")`;
 
function checkLengthIsMax(){
     if (_numberImage == _countImages){
        _numberImage= 10;
     }
 }
function checkLegthIsMin(){
     if ( _numberImage < 10){
        _numberImage = _countImages;
     } 
} 

document.querySelector(".prev").onclick = function(){
    checkLegthIsMin();
    _body.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${_numberImage}.jpg")` ;
    _numberImage--;
}
document.querySelector(".next").onclick = function(){
    checkLengthIsMax();
    _body.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${_numberImage}.jpg")` ;
    _numberImage++;
}

