window.addEventListener('DOMContentLoaded', bunny, false);

function bunny() {
    alert ('Welcome to my javascript page!');
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', changeColor, false);
    buttons[1].addEventListener('click', dodgerInfo, false);
    buttons[2].addEventListener('click', newFunction, false);
    buttons[3].addEventListener('click', anotherFunction, false);
    buttons[4].addEventListener('click', aDifferentFunction, false);
    buttons[5].addEventListener('click', aFourthFunction, false);
    buttons[6].addEventListener('click', aFifthFunction, false);
    buttons[6].addEventListener('click', aSixthFunction, false);}
    function changeColor() {
    var p1 = document.getElementById("colorToggle")
    {
        p1.style.backgroundColor = "DodgerBlue";
    }
    }
    function dodgerInfo() {
    alert('My favorite team is the Los Angeles Dodgers! They will win the World Series this year!')
    var pars = document.getElementId("team")
    for (var i = 0, length = pars.length; i < length; i++) {
        pars[i].style.backgroundColor = "DodgerBlue";
    }
}
    function newFunction(){  
    alert ('I have an older brother named Charlie and a dog named Sandy');
    var pars = document.getElementById("family")
    for (var i = 0, length = li.length; i < length; i++) {
        li[i].style.backgroundColor = "pink";
    }
}
    function anotherFunction(){
    alert('17')
     
     var li = document.getElementById("mvp") 
     li.innerHTML = "Shohei Ohtani (future NL MVP) 17"; 
     for (var i = 0, length = li.length; i < length; i++){
     li[i].style.backgroundColor = "skyblue"    
     }
     }
     function aDifferentFunction(){
     alert('13')
     
     var li = document.getElementById("max") 
     li.innerHTML = "Max Muncy 13"; 
     for (var i = 0, length = li.length; i < length; i++){
     li[i].style.backgroundColor = "skyblue" 
     }
     }
      function aDifferentFunction(){
     alert('13')
     
     var li = document.getElementById("max") 
     li.innerHTML = " Max Muncy 13"; 
     for (var i = 0, length = li.length; i < length; i++){
     li[i].style.backgroundColor = "skyblue" 
     } 
    }
    function aFourthFunction(){
      alert('16')
     
     var li = document.getElementById("will") 
     li.innerHTML = "Will Smith 16"; 
     for (var i = 0, length = li.length; i < length; i++){
     li[i].style.backgroundColor = "skyblue" 
     }   
    }
     function aFifthFunction(){
      alert('5')
     
     var li = document.getElementById("free") 
     li.innerHTML = "Freddie Freeman 5"; 
     for (var i = 0, length = li.length; i < length; i++){
     li[i].style.backgroundColor = "skyblue" 
     }   
    }
     function aSixthFunction(){
      alert('37')
     
     var li = document.getElementById("teo") 
     li.innerHTML = "Teoscar Hernandez 37"; 
     for (var i = 0, length = li.length; i < length; i++){
     li[i].style.backgroundColor = "skyblue" 
     }   
    }
    