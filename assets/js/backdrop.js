const body = document.body;
// Get the screen width and height
var width = window.innerWidth;
var height = window.innerHeight;

// const app = new PIXI.Application({
// 	//autoResize: true,
// 	resolution: devicePixelRatio,
// 	width: width,
// 	height: height
// });

var sprite = new PIXI.Sprite(PIXI.Texture.WHITE);

var uniforms = {}
uniforms.param = {
		type:"f",
		value:0
}

uniforms.seed = {
	type:"i",
	value: getRandomInt(500)
}

uniforms.u_resolution = {
	type: "v2",
	value: {x: width, y:height}
}

sprite.width = width;
sprite.height = height;

// Chooses either WebGL if supported or falls back to Canvas rendering
var renderer = new PIXI.autoDetectRenderer(width, height);
// Add the render view object into the page
body.appendChild(renderer.view);

// The stage is the root container that will hold everything in our scene
var stage = new PIXI.Container();
// Add it to the screen
stage.addChild(sprite);

function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
}

//Get shader code as a string
//var fragCode = document.getElementById("perlin-1").innerHTML;

PIXI.loader.add("../assets/glsl/clouds.frag");
PIXI.loader.load( function() { //once loaded, do:
	var fragCode = PIXI.loader.resources["../assets/glsl/clouds.frag"].data;
	//Create our Pixi filter using our custom shader code
	var simpleShader = new PIXI.AbstractFilter('',fragCode, uniforms);
	//Apply it to our object
	sprite.filters = [simpleShader];
	renderer.render(stage);
});

body.onscroll = function(){
	uniforms.param.value = (window.scrollY / 3) / height;
	renderer.render(stage);
}

// body.addEventListener('mousemove', e => {
// 	uniforms.param.value = e.offsetX / width;
// 	renderer.render(stage);
// })

window.onresize = function() {
	width = window.innerWidth;
	height = window.innerHeight;
	renderer.resize(width, height);
	sprite.width = width;
	sprite.height = height;
}