var Entity = function(obj){
	this.speed=obj.speed;//
	this.x = obj.x;//初始状态x
	this.y = obj.y;//初始状态y
	this.w = obj.w;
	this.h = obj.h;
	this.color = obj.color;
	this.cxt = document.getElementById('maly_canvas').getContext('2d');
}
var Maly = function(obj){
	Entity.call(this,obj);
}
Maly.prototype.draw = function(){
	this.cxt.fillStyle=this.color;
	this.cxt.fillRect(this.x,this.y,this.w,this.h); 
};
var Cloud = function(obj){
	Entity.call(this,obj);
}
Cloud.prototype.draw=function(){
	this.cxt.beginPath();
}

var Bk = function(obj){
	Entity.call(this,obj);
}
Bk.prototype.draw = function(){
	//start x,start y,end x,end y
	var grd=this.cxt.createLinearGradient(this.x,this.y,this.x,this.y+this.h);
	grd.addColorStop(0,"#46a3ff");
	grd.addColorStop(0.4,"#d2e9ff");
	grd.addColorStop(1,"#d2e9ff");
	this.cxt.fillStyle=grd;
	this.cxt.fillRect(this.x,this.y,this.w,this.h); //start x,start y,width,height
}
function creatMaly(){
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
function creatBk(){
	var bk = new Bk({
		speed:0,
		w:500,
		h:500,
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
	//create maly entity
	var maly = creatMaly();
	//create backgroud entity
	var bk = creatBk();
	//draw backgroud
	bk.draw();
	//draw maly
	maly.draw();
	//add keycode event
	keycodeEvent(maly,bk);
}
function init(){
	start();
}
init();