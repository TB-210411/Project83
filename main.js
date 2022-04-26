
var last_position_of_X, last_position_of_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
width=screen.width;
new_width=screen.width-70;
new_height=screen.height-400;
if (width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touch_start);
function my_touch_start(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
    last_position_of_X=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_Y=e.touches[0].clientY-canvas.offsetTop; 
}
canvas.addEventListener("touchmove",my_touch_move);
function my_touch_move(e){
    current_position_of_X=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_Y=e.touches[0].clientY-canvas.offsetTop;

 ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(last_position_of_X,last_position_of_Y);
    ctx.lineTo(current_position_of_X,current_position_of_Y);
    ctx.stroke();

last_position_of_X=current_position_of_X;
last_position_of_Y=current_position_of_Y;
}


function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}