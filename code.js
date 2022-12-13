let text1 = "Welcome to this mystic adventure in which a junior developer will try to get through the dangerous lands of Website Programming.";
let text2 = "Your mission is to help the programmer to get to rescue the Ironhack Princess from the Evil Tower of Javascript.";
let text3 = "Abedul.";

let buttonNext = buttonNext.onclick = document.getElementById('buttonNext');
let buttonPrev = buttonNext.onclick = document.getElementById('buttonPrev');

document.getElementById('introText').innerHTML = text1;

buttonNext.onclick = function (){
    if(document.getElementById('introText').innerHTMLt==text1){
        document.getElementById('introText').innerHTML=text2;
    }
    else if(document.getElementById('introText').innerHTML==text2){
        document.getElementById('introText').innerHTML=text3;
    }
}

buttonPrev.onclick = function (){
    if(document.getElementById('introText').innerHTML==text2){
        document.getElementById('introText').innerHTML=text1;
    }
    else if(document.getElementById('introText').innerHTML==text3){
        document.getElementById('introText').innerHTML=text2;
    }
}