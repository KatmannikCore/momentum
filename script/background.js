let _numberImage = 10 ;
let _countImages = 20;
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
