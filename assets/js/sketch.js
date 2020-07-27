var canvas;
const body = document.body;
const container = document.querySelector(".main-content");
// var width = canvasDiv.offsetWidth;
// var height = canvasDiv.offsetHeight;
// console.log(width);
// console.log(height);

var rectSize = 20;
// console.log(rectSize);
var area = rectSize*rectSize;
var sumR, sumG, sumB;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight, P2D);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	// background(255);
	strokeWeight(2);	
	// for (let y = -height/2; y < height/2; y += 5) {
	// 	for (let x = -width/2; x < width/2; x += 5){
	for (let y = 0; y < height; y += 5) {
		for (let x = 0; x < width; x += 5){
			let noiseVal = norm(noise(x*0.005, y*0.005, 0), 0, 0.75);
			let alphaVal = norm(noiseVal, 0.8, 1);
			// noiseVal *= 255;
			alphaVal *= 255;
			// stroke(255, 255, 255, alphaVal);
			stroke(100, 100, 100, alphaVal);
			// stroke(255*(1-alphaVal));
			point(x, y);
		}		
	}
}

function update(noiseZ) {
	clear();
	// background(255);
	// for (let y = -height/2; y < height/2; y += 5) {
	// 	for (let x = -width/2; x < width/2; x += 5){
	for (let y = 0; y < height; y += 5) {
		for (let x = 0; x < width; x += 5){
			let noiseVal = norm(noise(x*0.005, y*0.005, noiseZ*0.001), 0, 0.75);
			let alphaVal = norm(noiseVal, 0.8, 1);
			// noiseVal *= 255;
			alphaVal *= 255;
			// stroke(255, 255, 255, alphaVal);
			stroke(100, 100, 100, alphaVal);
			// stroke(255*(1-alphaVal));
			point(x, y);
		}
	}
}

function draw() {

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {

}

body.onscroll = function(){
	// console.log(window.scrollY);
	// console.log("merde");
	update(window.scrollY);
};