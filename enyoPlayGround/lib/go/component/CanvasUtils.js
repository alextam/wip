enyo.kind({
	name: "go.CanvasUtils",
	statics: {
		//Example if (checkCollision(bullet, enemy)) { }
		checkCollision:function (a, b) {
  			return a.x < b.x + b.width &&
         	a.x + a.width > b.x &&
         	a.y < b.y + b.height &&
         	a.y + a.height > b.y;
		}
	}
});