
"use strict";

var body = document.getElementsByTagName("body");
var windowW = body[0].clientWidth,
    windowH = body[0].clientHeight;

var Entity = function(obj){
	this.speed=obj.speed;//
	this.x = obj.x;//初始状态x
	this.y = obj.y;//初始状态y
	this.w = obj.w;
	this.h = obj.h;
	this.color = obj.color;
	this.canvas = document.getElementById('maly_canvas');
	this.ctx = this.canvas.getContext('2d');
}
var Maly = function(obj){
	Entity.call(this,obj);
}
Maly.prototype.draw = function(){
	this.ctx.fillStyle=this.color;
	this.ctx.fillRect(this.x,this.y,this.w,this.h); 
};
function createMaly(){
	var maly = new Maly({
		speed:10,
		w:10,
		h:10,
		x:10,
		y:10,
		color:'yellow'
	});
	return maly;
}
var Cloud = function(obj){
	Entity.call(this,obj);
}
Cloud.prototype.draw1=function(){
	this.ctx.beginPath();
	var radian0 = 30;//弧度大小
	var startX0=this.x+radian0,
		startY0=this.y+this.h,
		endX0=this.x+radian0,
		endY0=this.y+this.h/2,
		controlXI0=this.x,
		controlYI0=this.y+this.h,
		controlXII0=this.x,
		controlYII0=this.y+this.h/2;
	this.ctx.moveTo(startX0,startY0);//起始点
	//控制点1，控制点2，结束点
	this.ctx.bezierCurveTo(controlXI0,controlYI0,controlXII0,controlYII0,endX0,endY0);
	var endX1=this.x+3*radian0,
		endY1=this.y+this.h/4,
		controlXI1=this.x+1.5*radian0,
		controlYI1=this.y;
	//控制点1，结束点
	this.ctx.quadraticCurveTo(controlXI1,controlYI1,endX1,endY1);
	var endX2=this.x+5*radian0,
		endY2=this.y+this.h/3,
		controlXI2=endX1+15,
		controlYI2=this.y-15,
		controlXII2=endX2+10,
		controlYII2=endY2-15;
	//控制点1，控制点2，结束点
	this.ctx.bezierCurveTo(controlXI2,controlYI2,controlXII2,controlYII2,endX2,endY2);
	var endX3=this.x+6*radian0,
		endY3=this.y+this.h/5*3,
		controlXI3=endX3+10,
		controlYI3=this.y+30;
	//控制点1，结束点
	this.ctx.quadraticCurveTo(controlXI3,controlYI3,endX3,endY3);
	var endX4=this.x+5*radian0,
		endY4=this.y+this.h,
		controlXI4=endX3+10,
		controlYI4=endY3,
		controlXII4=endX3+radian0,
		controlYII4=endY4;
	//控制点1，控制点2，结束点
	this.ctx.bezierCurveTo(controlXI4,controlYI4,controlXII4,controlYII4,endX4,endY4);
	this.ctx.lineTo(startX0,startY0);
	this.ctx.closePath();
	this.ctx.fillStyle=this.color;
	this.ctx.fill();
}
function createCloud(){
	var cloud = new Cloud({
		speed:10,
		w:200,
		h:100,
		x:windowW-300,
		y:100,
		color:'#ffffff'
	});
	return cloud;
}

var Bk = function(obj){
	Entity.call(this,obj);
	this.canvas.width = this.w;
	this.canvas.height = this.h;
}
Bk.prototype.draw = function(){
	//start x,start y,end x,end y
	var grd=this.ctx.createLinearGradient(this.x,this.y,this.x,this.y+this.h);
	grd.addColorStop(0,"#46a3ff");
	grd.addColorStop(0.4,"#d2e9ff");
	grd.addColorStop(1,"#d2e9ff");
	this.ctx.fillStyle=grd;
	this.ctx.fillRect(this.x,this.y,this.w,this.h); //start x,start y,width,height
}

function createBk(){
    var width = windowW,
    height = windowH-4;
	var bk = new Bk({
		speed:0,
		w:width,
		h:height,
		x:0,
		y:0,
		color:'#2b5ec8'
	});
	return bk;
}
function keycodeEvent(maly,bk){
	document.onkeydown=function(e){
		if(e && e.keyCode==65){ // a
			//要做的事情
			maly.x -= maly.speed;
		}
		if(e && e.keyCode==68){ // d
			//要做的事情
			maly.x += maly.speed;
		}            
		if(e && e.keyCode==87){ // w
			//要做的事情
			maly.y -= maly.speed;
		}         
		if(e && e.keyCode==83){ // s
			//要做的事情
			maly.y += maly.speed;
		}
		bk.draw();
		maly.draw();
	}; 
}
function start(){
	//create backgroud entity and draw backgroud
	var bk = createBk();
	bk.draw();
	//create maly entity and draw maly
	var maly = createMaly();
	maly.draw();
	//create cloud entity and draw cloud
	var cloud = createCloud();
	cloud.draw1();
	//add keycode event
	keycodeEvent(maly,bk);
}
function init(){
	start();
}
init();