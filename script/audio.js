let _play = document.querySelector(".play");
let _pause = document.querySelector(".pause") ;
let _audio = document.querySelector("audio");
let _audioPrev = document.querySelector(".audio-prev") ;
let _audioNext = document.querySelector(".audio-next");
let _activeItems = document.querySelectorAll(".play-item");
let _activeIndex = 0;
let _index = 0
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
    RemoveActiveClass()
    _activeIndex-- 
    _activeIndex = IndexIsMin(_activeIndex);
    _activeItems[_activeIndex].classList.add("item-active")
    GetMusic(_activeIndex);
}
_audioNext.onclick = function(){  
    RemoveActiveClass()
    _activeIndex++
    _activeIndex = IndexIsMax(_activeIndex);
    _activeItems[_activeIndex].classList.add("item-active")
    GetMusic(_activeIndex);
}
async function GetMusic(index){ 
    const quotes =  'json/audio.json';
    const res = await fetch(quotes);
    const audio = await res.json();
    _audio.setAttribute("src", audio[index].src);
    _audio.play();
}
 
function RemoveActiveClass(){
    for(let i = 0;i < _activeItems.length; i++)
        _activeItems[i].classList.remove("item-active");
}

function IndexIsMax(index) {
    if (index == _activeItems.length){
        index = 0 ;
    }
    return index
 }
 function IndexIsMin(index) {
       if (index <   0){
        index = _activeItems.length -1;
    }
    return index;
 }