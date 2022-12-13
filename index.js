//Intro texts
let text1 = "Be the fastest cowboy in all around the Old West.  1/4";
let text2 =
  "Try shooting at least 100 times in 10 seconds by clicking on the target. 2/4";
let text3 =
  "Introduce your information and hit the button to start your challenge! 3/4";
let text4 = "Good luck ol' chap! 4/4";
//Declaring all buttons
let buttonNext = document.getElementById("buttonNext");
let buttonPrev = document.getElementById("buttonPrev");
let buttonStart = document.getElementById("btnStart");
//Drawing what is inside the intro section
buttonNext.innerHTML = ">";
buttonPrev.innerHTML = "<";

document.getElementById("introText").innerHTML = text1;

//Functions for both buttons to change the text so you can read the intro properlly
buttonNext.onclick = function () {
  if (document.getElementById("introText").innerHTML == text1) {
    document.getElementById("introText").innerHTML = text2;
  } else if (document.getElementById("introText").innerHTML == text2) {
    document.getElementById("introText").innerHTML = text3;
  } else if (document.getElementById("introText").innerHTML == text3) {
    document.getElementById("introText").innerHTML = text4;
  }
};

buttonPrev.onclick = function () {
  if (document.getElementById("introText").innerHTML == text2) {
    document.getElementById("introText").innerHTML = text1;
  } else if (document.getElementById("introText").innerHTML == text3) {
    document.getElementById("introText").innerHTML = text2;
  } else if (document.getElementById("introText").innerHTML == text4) {
    document.getElementById("introText").innerHTML = text3;
  }
};
