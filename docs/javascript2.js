window.addEventListener('DOMContentLoaded', bunny, false);
function bunny() {
    
    var buttons = document.getElementsByTagName("input")
    buttons[0].addEventListener('click', nlcs1, false)
    buttons[1].addEventListener('click', nlcs2, false)
    buttons[2].addEventListener('click', nlcs3, false)
    buttons[3].addEventListener('click', nlcs4, false)
    buttons[4].addEventListener('click', nlcs5, false)
    buttons[5].addEventListener('click', nlcs6, false)
    
}
function init() {
    var fieldset = document.getElementsByClassName('player');
    for (var i = 0; i < fieldset.length; i++) {
        fieldset[i].addEventListener('mouseover', toggleClass, false);
        fieldset[i].style.backgroundColor = "#1E90FF";
        
    }
}

function toggleClass(mouseover) {
    
      {
        var fieldset = document.getElementsByClassName("player");
        for (var i = 0; i < chars.length; i++) {
            chars[i].classList.toggle("on");
            chars[i].style.backgroundColor = "#1E90FF";
        }
        }
        };
function nlcs1() {
    alert('1981')
    var pars = document.getElementId("1981")
    li.innerHTML = "1981"
    for (var i = 0, length = pars.length; i < length; i++) {
        pars[i].style.backgroundColor = "#1E90FF";
    }
    }
function nlcs2(){
  alert('1988')
    var pars = document.getElementId("1988")
    for (var i = 0, length = pars.length; i < length; i++) {
        pars[i].style.backgroundColor = "DodgerBlue";   
  }  
}
function nlcs3(){
 alert('2017')
    var pars = document.getElementId("2017")
    for (var i = 0, length = pars.length; i < length; i++) {
        pars[i].style.backgroundColor = "DodgerBlue";     
    
}
}
function nlcs4(){
     alert('2018')
    var pars = document.getElementId("1988")
    for (var i = 0, length = pars.length; i < length; i++) {
        pars[i].style.backgroundColor = "DodgerBlue"; 
}
}
function nlcs5(){
     alert('2020')
    var pars = document.getElementId("2020")
    for (var i = 0, length = pars.length; i < length; i++) {
        pars[i].style.backgroundColor = "DodgerBlue"; 
}
}
function nlcs6(){
alert('2024') 
 var pars = document.getElementId("2024")
    for (var i = 0, length = pars.length; i < length; i++) {
        pars[i].style.backgroundColor = "DodgerBlue"; 
}
}