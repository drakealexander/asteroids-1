(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (options) {
    this.pos =    options["pos"];
    this.vel =    options["vel"];
    this.radius = options["radius"];
    this.col =    options["col"];
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fillStyle=this.col;
    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos += this.vel * TIME
  };

  var mo = new Asteroids.MovingObject(
    { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
  );

  debugger
})();
