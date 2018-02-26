var scoreshow = document.getElementById('score');
var canvas = document.getElementById('drawCanvas');
var context =canvas.getContext("2d");
var score =0;
var x =0;
var y =0;
var start = 0;
var count = 10;
var timer= 0;

var scoreshow = document.getElementById('score');
var timeshow = document.getElementById('time');


function startcounting(){
  timer = setTimeout(countdown,1000);
  timeshow.innerHTML = "TIME: " + count;
}

function countdown(){
    count = count - 1;
    timeshow.innerHTML = "TIME: " + count;
    if(count == 0){
      clearTimeout(timer);
      scoreshow.innerHTML = "GAME OVER, SCORE " + score;
      count = 10;
      timer = null;
      score =0;
      context.clearRect(0,0,canvas.width ,canvas.height);
      timeshow.innerHTML = "CLICK TO START AGAIN";
      var wintimer = setTimeout(function startagain(){
        start = 0;
      },1000);//delay after winning
    }
    else{
      timer = setTimeout(countdown,1000);
    }
}

context.clearRect(0,0,canvas.width ,canvas.height);
function Draw(){
  x = getRandomNumber(810);
  y = getRandomNumber(500);
  context.fillStyle= "red";
  context.fillRect(x,y,50,50);
  context.stroke();
}//draw rect



function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}//generate random




function canvasCliked(event){
  if(event.offsetX >= x && event.offsetX <= (x+50) && event.offsetY >=y && event.offsetY <=(y+50)&& start == 1){
    score = score +1;
    scoreshow.innerHTML = "SCORE: " + score;
    context.clearRect(0,0,canvas.width ,canvas.height);
    Draw();
  }
  else if(start == 0){
    scoreshow.innerHTML = "SCORE: " + score;
    Draw();
    start = 1;
    startcounting();
  }

}//click event
