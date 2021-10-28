function SetNameForGreetings(){
    let name = document.getElementById("name");
    name.value = localStorage.getItem('name');
    name.oninput = () => {
      localStorage.setItem('name', name.value)
    };
}
function SetSityForGreetings(){
    let sity = document.getElementById("weather-sity");
    sity.value = localStorage.getItem('sity');
    sity.oninput = () => {
      localStorage.setItem('sity', sity.value)
    };
    if(sity.value == ""){
        sity.value = "Минск" 
    }
}
SetNameForGreetings();
SetSityForGreetings();