$( document ).ready(function() {

window.setInterval(event, 50);
	$("#valueBox").fadeIn(1600);

var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
	draw();




});
function calc() {
var text = $("#textArea").val()
alert (text);
var after = text.match(/Homework 1.*/gi);
var finalv = after.split('\n');	
	alert(finalv);

}
function event() {
//alert('hi');
draw();
}
function dowork() {
if($('#hello').css("display") == "inline-block")  {
	
	$("#mycanvas")[0].webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT); //Chrome
	$("#mycanvas")[0].mozRequestFullScreen(); //Firefox
	$('#hello').hide();

} else {
	document.webkitCancelFullScreen(); //Chrome
	document.mozCancelFullScreen(); //Firefox
	$('#hello').show();
}


}
function draw() {
var ctx = document.getElementById('canvas').getContext('2d');
	
ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	
	for (var i = 0; i < 1000; i++) {
	
	var randomnumberN=Math.floor(Math.random(new Date().getTime())*100);
	
	var w = Math.floor(window.innerWidth/50);
	var h = Math.floor(window.innerHeight/50);
	
	
	var randomnumber1=Math.floor(Math.random(new Date().getTime())*200);
	var randomnumber2=Math.floor(Math.random(new Date().getTime())*200);
	var randomnumber3=Math.floor(Math.random(new Date().getTime())*200);
	var randomnumberAAA4 = Math.floor(Math.random(new Date().getTime())*w)*(50);
	
	var randomnumberBBB4=Math.floor(Math.random(new Date().getTime())*h)*(50);
	
	
	 ctx.fillStyle = "rgb(" + randomnumber1+","+randomnumber2+"," + randomnumber3+ ")";
	  ctx.fillRect (randomnumberAAA4 , randomnumberBBB4, 100, 100);
	
	}

}
