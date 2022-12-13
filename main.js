/* Disclaimer
Using "let" is not an option, it does not work that way so excuse my "let"s
There are some code that I could have merged into a function but because of these weird problems with the canvas functions for moving objects weren´t working.*/

//__________________________________________________________________________________________________________
//____________________letiables and value declarations___________________________
//Getting values from the url coming from the previous page's input
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

//we name the canvas and the type: 2d
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let score = 0;
let health = 3;
let time = 10;
let userPad = document.getElementById("userPad");
document.getElementById("name").innerHTML = urlParams.get("userName");
document.getElementById("score").innerHTML = "SCORE: " + score;
document.getElementById("time").innerHTML = "TIME: " + time;

//letiables
let xBall = 400;
let yBall = 400;
let xMouse = 0;
let yMouse = 0;

//let timeLeft = setTimeout(timeOut, 6000);

//Writing on the user pad

//__________________________________________________________________________________________________________
//__________________________________functions_________________________________________
//function to get a random number in a range
function generateRandom(min, max) {
  let differ = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * differ);
  rand = rand + min;
  return rand;
}

//draw background blue and yellow desert

//______________clouds_______________
//cloud1
class cloud {
  constructor(xCloud, yCloud) {
    this.xCloud = xCloud;
    this.yCloud = yCloud;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.ellipse(this.xCloud, this.yCloud, 50, 25, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.ellipse(this.xCloud + 20, this.yCloud + 20, 50, 25, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.ellipse(this.xCloud + 50, this.yCloud, 50, 25, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.ellipse(this.xCloud + 80, this.yCloud + 20, 50, 25, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    if (this.xCloud1 <= 1100) {
      this.xCloud1 = this.xCloud1 + 1.5;
    } else {
      this.xCloud1 = -200;
      this.yCloud1 = generateRandom(20, 300);
    }
  }
}

//__________cacti function________________
class cacti {
  constructor(xCacti, yCacti) {
    this.xCacti = xCacti;
    this.yCacti = yCacti;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "#2E6021";
    ctx.rect(this.xCacti, this.yCacti, 30, 120);
    ctx.fillStyle = "#2E6020";
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "#2E6021";
    ctx.rect(this.xCacti, this.yCacti + 30, 60, 20);
    ctx.fillStyle = "#2E6020";
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "#2E6021";
    ctx.rect(this.xCacti + 60, this.yCacti + 50, 20, -60);
    ctx.fillStyle = "#2E6020";
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "#2E6021";
    ctx.rect(this.xCacti - 40, this.yCacti + 50, 40, 20);
    ctx.fillStyle = "#2E6020";
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "#2E6021";
    ctx.rect(this.xCacti - 40, this.yCacti + 50, 20, -30);
    ctx.fillStyle = "#2E6020";
    ctx.fill();
    ctx.closePath();
  }
}

//_______target class_________________
class target {
  constructor(xTarget, yTarget, radius, color) {
    this.xTarget = xTarget;
    this.yTarget = yTarget;
    this.radius = radius;
    this.color = color;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.arc(this.xTarget, this.yTarget, this.radius, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.fillStyle = urlParams.get("userColor");
    ctx.fill();
  }
  //function to recognize when the circle is clicked
  clickTarget(xmouse, ymouse) {
    const distance = Math.sqrt(
      (xmouse - this.xTarget) * (xmouse - this.xTarget) +
        (ymouse - this.yTarget) * (ymouse - this.yTarget)
    );
    if (distance < this.radius) {
      console.log("Hit!");
      score++;
      document.getElementById("score").innerHTML = "SCORE: " + score;
    } else {
      console.log("Miss");
    }
  }
}
//________________________________________
function background() {
  ctx.beginPath();
  ctx.fillStyle = "#fef6a3 ";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#8dc2f2";
  ctx.fillRect(0, 0, canvas.width, canvas.height / 2);
  ctx.closePath();
  //cloud1
  let cloud1 = new cloud(500, 200);
  cloud1.draw(ctx);
  //cloud2
  let cloud2 = new cloud(700, 50);
  cloud2.draw(ctx);
  //cloud2
  let cloud3 = new cloud(200, 100);
  cloud3.draw(ctx);
  //cactus1
  let cactus1 = new cacti(500, 450);
  cactus1.draw(ctx);
  //cactus2
  let cactus2 = new cacti(200, 250);
  cactus2.draw(ctx);
  //cactus3
  let cactus3 = new cacti(800, 350);
  cactus3.draw(ctx);
  //cactus4
  let cactus4 = new cacti(50, 500);
  cactus4.draw(ctx);
}
background();
//target
let target1 = new target(500, 300, 50);
target1.draw(ctx);
//shooting event
canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  target1.clickTarget(x, y);
});
//setTimeOut for 10 seconds (time is declared in the top of this Js)
const callbackFunction = function () {
  timeoutId = setTimeout(callbackFunction, 1000);
  document.getElementById("time").innerHTML = "TIME: " + time;

  time -= 1;

  if (time < 0) {
    userPadInfo.style.display = "none";

    if (score >= 100) {
      ctx.beginPath();
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, canvas.width, canvas.height, 0, 0.5);
      ctx.globalAlpha = 1;
      ctx.strokeStyle = "black";
      ctx.font = "100px arial";
      let finalScore = `Final Score: ${score}`;
      ctx.strokeText(finalScore, 180, 300);
      ctx.strokeText("You Won!", 270, 450);
    } else {
      ctx.beginPath();
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, canvas.width, canvas.height, 0, 0.5);
      ctx.globalAlpha = 1;
      ctx.strokeStyle = "black";
      ctx.font = "100px sheriff";
      let finalScore = `Final Score: ${score}`;
      ctx.strokeText(finalScore, 180, 300);
      ctx.strokeText("Try Again!", 270, 450);
    }
    clearTimeout(timeoutId);
  }
};

let timeoutId = setTimeout(callbackFunction, 1000);
