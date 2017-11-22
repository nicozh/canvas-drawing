

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
var clear=document.getElementById("c")            //清空
var a=document.getElementById("d")                //下载
var pen=document.getElementById("pencil")        //画笔

//画笔点击事件
pen.onclick=function(){
  if(eraser.className="active"){
    
    eraser.className=""
    canvas.className="pen"
}

}



if('ontouchstart' in document.body){

  canvas.ontouchstart=function(drew){
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
   
    var x=drew.touches[0].clientX-canvas.offsetLeft;
    var y=drew.touches[0].clientY-canvas.offsetTop;
    
    context.moveTo(x,y);
    
    document.ontouchmove=function (ev) {
        //鼠标所在的位置
        //ev.offsetX
        //ev.offsetY
        context.lineTo(ev.touches[0].clientX-canvas.offsetLeft,ev.touches[0].clientY-canvas.offsetTop);
        context.stroke();
         
    };
         
     document.ontouchend=function () {
         document.ontouchmove=null;
         document.ontouchend =null;
     }
  }
  //清空
  clear.onclick=function(){
    context.clearRect(0,0,canvas.width,canvas.height)
  }
  //橡皮擦
  eraser.onclick=function(){
    if(this.className=="active"){
      this.className=""
  }else {
      this.className="active"
  }
  }
   //下载
  a.onclick=function(){
    var url = canvas.toDataURL("image/png")
    a.href = url
    a.download = 'image'
    a.target = '_blank'
  
  }

}else{

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
        context.lineTo(ev.offsetX,ev.offsetY);
        context.stroke();
         
    };
         
     document.onmouseup=function () {
         console.log("onmouseup");
         document.onmousemove=null;
         document.onmouseup =null;
     }
  }
  
  
//清空
clear.onclick=function(){
  context.clearRect(0,0,canvas.width,canvas.height)
}
//橡皮擦
  eraser.onclick=function(){
    if(this.className=="active"){
      this.className=""
      canvas.className="pen"
  }else {
      this.className="active"
      canvas.className="oneraser"
  }
  }
  //下载
  a.onclick=function(){
    var url = canvas.toDataURL("image/png")
    a.href = url
    a.download = 'image'
    a.target = '_blank'
  
  }

}
