

var canvas = document.getElementById('canva');
var context = canvas.getContext('2d');

//设置画板宽高
setCanvasSize()
function setCanvasSize() {
  var pageWidth = document.documentElement.clientWidth
  var pageHeight = document.documentElement.clientHeight

  canvas.width = pageWidth
  canvas.height = pageHeight
}


//用户选择

var lineColor = document.getElementById("colors");  //画笔颜色
var lineWidth = document.getElementById("width");  //画笔宽度
var eraser=document.getElementById("e")            //橡皮擦

canvas.onmousedown=function(drew){
  //每次画之前开启新的路径
  context.beginPath();
  //确认颜色
  context.strokeStyle = lineColor.value;
  //确认线条宽度
  context.lineWidth = lineWidth.value;

  /*判断用不用橡皮擦*/
  if(eraser.className=="active"){
      context.strokeStyle = "#fff"
  }
  var x=drew.offsetX;
  var y=drew.offsetY;
  context.moveTo(x,y);
  
  document.onmousemove=function (ev) {
      //鼠标所在的位置
      //ev.offsetX
      //ev.offsetY
      context.lineTo(ev.offsetX,ev.offsetY);
      context.stroke();
       
  };
       
   document.onmouseup=function () {
       console.log("onmouseup");
       document.onmousemove=null;
       document.onmouseup =null;
   }
}


eraser.onclick=function(){
  if(this.className=="active"){
    this.className=""
}else {
    this.className="active"
}
}


/*
  //点击鼠标
 var painting=false;
 var lastPoint={x:undefined,y:undefined};
  canvas.onmousedown=function(aa){
  painting=true;
  var x=aa.offsetX;
  var y=aa.offsetY;
  lastPoint={x:x,y:y};
    
  };
// 移动鼠标
  canvas.onmousemove=function (bb){
     if(painting){
       var x=bb.offsetX;
       var y=bb.offsetY;
     //  drewCrcle(x,y,5);
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
  ctx.fillStyle = lineColor.value;
   ctx.beginPath();
   ctx.arc(x, y,radius,0,Math.PI*2);
   ctx.fill();
 }
  
  //画路径
 function drewLine(x1,y1,x2,y2){
    ctx.strokeStyle = lineColor.value;
   
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineWidth=lineWidth.value;
    
    ctx.closePath();
    ctx.stroke();
 }
//橡皮擦
 */