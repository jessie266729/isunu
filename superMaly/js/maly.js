var Maly = function(){
	this.speed=10;//初始状态速度
	this.x = 10;//初始状态x
	this.y = 10;//初始状态y
	this.w = 10;
	this.h = 10;
	this.cxt = document.getElementById('maly_canvas').getContext('2d');
}
Maly.prototype.draw = function(){
	this.cxt.fillStyle="green";
	this.cxt.fillRect(this.x,this.y,this.x+this.w,this.y+this.h); 
};
var Bk = function(){
	this.cxt = document.getElementById('maly_canvas').getContext('2d');
	this.w = 200;
	this.h = 200;
}
Bk.prototype.draw = function(){
	this.cxt.fillStyle="#FF0000";
	this.cxt.fillRect(0,0,this.w,this.h); 
}
function start(){
	var maly = new Maly();
	var bk = new Bk();
	bk.draw();
	maly.draw();
}
function init(){
	start();
}
init();



//封装父类
// (function(){
// 	var n = "Lee";
// 	function person(name){
// 		this.name = name;
// 	}
// 	person.prototype.say = function(){
// 		alert("hello"+this.name+n);
// 	}
// 	window.person = person;
// }());
// (function(){
// 	function student(name){
// 		this.name = name;
// 	}
// 	student.prototype = new person();
// 	var superSay = student.prototype.say;
// 	student.prototype.say = function(){
// 		superSay.call(this);
// 		alert("stu-hello"+this.name);
// 	}
// 	window.student = student;
// }())
// var s = new student("jessie");
// s.say();