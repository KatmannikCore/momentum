let clock = document.getElementById("clock");
function LiveClock(){
    let time = new Date(); 
    let hours = (time.getHours()%12).toString();
    let minute = time.getMinutes().toString() ;
    let second = time.getSeconds().toString();

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
 /*
let slideIndex = 1 ;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i ;
    var slides = document.getElementsByClassName("mySlides");
    if (n >slides.length){
        slideIndex = 1 
    }
    if( n < 1){
        slideIndex = slides.length
    }
    for( i=0; i <slides.length; i++){
        slides[i].style.display ="none"
    }
    slides[slideIndex-1].style.display = "block" ;
 }
*/
let _arrImgesUrls = ["image/depositphotos_5214674-stock-photo-tropical-sea-sunset.jpg ", "image/11219_original.jpg" ,"image/udarenie-v-slove-utra.jpg"]
let _indexUrlsArray = 0 ;
let _body = document.querySelector("body");
_body.style.backgroundImage = `url("${_arrImgesUrls[_indexUrlsArray]}")`;
 
function checkLengthIsMax(){
     if (_indexUrlsArray == _arrImgesUrls.length){
        _indexUrlsArray= 0;
     }
 }
function checkLegthIsMin(){
     if ( _indexUrlsArray < 0){
        _indexUrlsArray = _arrImgesUrls.length - 1;
     } 
} 

document.querySelector(".prev").onclick = function(){
    checkLegthIsMin();
    _body.style.backgroundImage = `url("${_arrImgesUrls[_indexUrlsArray]}")` ;
    _indexUrlsArray--;
    plusSlides(-1)
}
document.querySelector(".next").onclick = function(){
    checkLengthIsMax();
    _body.style.backgroundImage = `url("${_arrImgesUrls[_indexUrlsArray]}")` ;
    _indexUrlsArray++;
    plusSlides(1)
}

