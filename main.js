canvas=
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var last_position_of_x, last_position_of_y;
var current_position_of_x, current_position_of_y;
var mouseevent="empty";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    radiusofcircle=document.getElementById("radiusofcircle").value;
    color=document.getElementById("color").value;
    widthofcircle=document.getElementById("widthofcircle").value;
    mouseevent="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(){
      mouseevent="mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofcircle;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radiusofcircle ,0 , 2 * Math.PI); 
    ctx.stroke();
    }
}