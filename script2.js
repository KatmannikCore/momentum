let time = new Date(); 
let hours = time.getHours().toString();
function GetTimesOfDay (){    
    if(hours < 6){_timesOfDay = "night";}
    else if( hours < 12 ) {_timesOfDay = "morning"; }
    else if( hours < 18 ) {_timesOfDay = "afternoon";}
    else if( hours >= 18) {_timesOfDay = "evening"; }
    checkLengthIsMax();
    document.body.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${_timesOfDay}/${_numberImage}.jpg")`;
    _numberImage++;
}
function SetGreetings(){
    let greetings;
    if(hours < 6){greetings = "Good night";}
    else if( hours < 12 ) {greetings = "Good morning"; }
    else if( hours < 18 ) {greetings = "Good afternoon";}
    else if( hours >= 18) {greetings = "Good evening"; }
    document.querySelector(".greetings").innerHTML = greetings + ",";
} 
GetTimesOfDay();
SetGreetings();