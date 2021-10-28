let _numberImage = 10 ;
let _countImages = 20;
let _time = new Date(); 
let _hours = _time.getHours().toString();
let _body = document.querySelector("body");
function SetBackground(){
    if(_hours < 6){
        _timesOfDay = "night";
    }else if( _hours < 18){
        _timesOfDay = "morning";
    }else if(_hours >= 18){
        _timesOfDay = "evening";
    }
    checkLengthIsMax();
    document.body.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${_timesOfDay}/${_numberImage}.jpg")`;
    _numberImage++;
}
SetBackground();

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
function SetGreetings(){
    let greetings;
    if(_hours < 6){greetings = "Доброй ночи";}
    else if( _hours < 12 ) {greetings = "Доброе утро"; }
    else if( _hours < 18 ) {greetings = "Добрый день";}
    else if( _hours >= 18) {greetings = "Good Добрый вечер"; }
    document.querySelector(".greetings").innerHTML = greetings + ",";
} 
SetGreetings();