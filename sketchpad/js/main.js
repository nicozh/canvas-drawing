


var canvas = document.getElementById('canva');
var ctx = canvas.getContext('2d');

//调整大小

function resize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	render();
}
window.addEventListener('resize', resize, false); resize();
function render() { // draw to screen here
}







  //点击鼠标
 var painting=false;
 var lastPoint={x:undefined,y:undefined};
  document.onmousedown=function(aa){
  painting=true;
  var x=aa.clientX;
  var y=aa.clientY;
  lastPoint={x:x,y:y};
    
  };
// 移动鼠标
   document.onmousemove=function (bb){
     if(painting){
       var x=bb.clientX;
       var y=bb.clientY;
       drewCrcle(x,y,5);
       newPoint={x:x,y:y};
       drewLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
       lastPoint=newPoint;
     }
  else{
    
  }
 };
   //松开鼠标
 document.onmouseup=function(xx){
   painting=false;
 };
 

  //画圆
 function drewCrcle(x,y,radius){
   ctx.beginPath();
   ctx.arc(x, y,radius,0,Math.PI*2);
   ctx.fill();
 }
  
  //画路径
 function drewLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineWidth=10;
    ctx.closePath();
    ctx.stroke();
 }

 