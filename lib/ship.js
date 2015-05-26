(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Ship = function(options) {
    this.pos = options["pos"]
    this.radius = 10;
    this.col = "BLUE";
    this.vel = [0, 0];
  }

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);
})();
