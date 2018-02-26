var x =0;
var y = 0;
var endx =0;
var endy = 0;
function beginPath(){
  x= event.clientX;
  y=event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("drawCanvas").innerHTML = coords;
}

function endPath(){
  endx = event.clientX;
  endy = event.clientY;
  var c = document.getElementById("drawCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(endx, endy);
ctx.stroke();
}
