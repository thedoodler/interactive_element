var w_width = window.innerWidth;
var w_height = window.innerHeight;
var x = 80;
var y = 80;
//var wn = w_width/x;
//var hn = w_height/y;
var the_tr;

function tris(p,q,r){
	this.op = p;
	this.oq = q;
	this.or = r;
	this.cp = p;
	this.cq = q;
	this.cr = r;
	this.diff = 50;
}
tris.prototype.show = function(){
	triangle(this.cp.x,this.cp.y,this.cq.x,this.cq.y,this.cr.x,this.cr.y);
}

tris.prototype.reseter = function(){
	console.log(this.op,this.cp);
		this.cp = this.op;
		this.cq = this.oq;
		this.cr = this.or;
}

tris.prototype.changer = function(){
	dp = dist(mouseX,mouseY,this.op.x,this.op.y);
	dq = dist(mouseX,mouseY,this.oq.x,this.oq.y);
	dr = dist(mouseX,mouseY,this.or.x,this.or.y);
//	console.log(p5.Vector.sub(this.p,this.op));
//	console.log(dp)
	if (dp<this.diff){
		rem = this.diff -dp;
//		diff = createVector(5,5);
//		this.cp = p5.Vector.add(this.cp,diff);
		this.cp = createVector(this.op.x,this.op.y+rem);
	}
	else if (dp==50){
		this.cp = this.cp;
	}
	else if (dp>50){
		this.reseter();
		console.log("fck");
	}
	this.show();
}

function avg(p1,p2){
	ans = createVector((p1.x+p2.x)/2,(p1.y+p2.y)/2);
	return ans;
}
	
function random_color(){
	r = random(0,255);
	g = random(0,255);
	b = random(0,255);
	var col = color(r,g,b);
	return col;
}


function aversion(){
	the_tr.changer();
}
function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
	init();
}

window.addEventListener('resize', reportsize);

window.addEventListener('mousemove', aversion);

function init(){
	ww = window.innerWidth;
	wh = window.innerHeight;
	wn = round(ww/x) + 2;
	hn = round(wh/x) + 2;
	canvas = createCanvas(ww,wh);
	background(49,49,49);
	canvas.position(0,0);
	canvas.style('z-index','-1');
	p = createVector(ww/2,50);
	q = createVector(ww-50,wh-50);
	r = createVector(50,wh-50);
	the_tr = new tris(p,q,r);
}


function setup(){
	init();
	
}

function draw(){
	background(49,49,49);
	the_tr.show();
}