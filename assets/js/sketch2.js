const body = document.body;
const app = new PIXI.Application({ width: body.clientWidth, height: body.clientHeight, backgroundColor: 0xffffff });
body.appendChild(app.view);

// create a new Sprite from an image path
const bunny = PIXI.Sprite.from('https://placekitten.com/200/300');

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

// Listen for animate update
var counter = 0;
app.ticker.add((delta) => {
	counter += delta;
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    bunny.x = (Math.sin(0.01*counter) + 1)/2*body.clientWidth;
    console.log(bunny.x);
});
