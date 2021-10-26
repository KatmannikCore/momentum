function Temp (){
    let time = new Date(); 
    let hours = time.getHours().toString();
    if(hours < 6){
        _timesOfDay = "night";
    }else if( hours < 18){
        _timesOfDay = "morning";
    }else if(hours >= 18){
        _timesOfDay = "evening";
    }
    checkLengthIsMax();
    document.body.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${_timesOfDay}/${_numberImage}.jpg")`;
    _numberImage++;
}
Temp();
