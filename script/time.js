let _time = new Date(); 
let _hours = _time.getHours().toString();
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
function SetGreetings(){
    let greetings;
    if(_hours < 6){greetings = "Доброй ночи";}
    else if( _hours < 12 ) {greetings = "Доброе утро"; }
    else if( _hours < 18 ) {greetings = "Добрый день";}
    else if( _hours >= 18) {greetings = "Добрый вечер"; }
    document.querySelector(".greetings").innerHTML = greetings + ",";
} 
SetGreetings();