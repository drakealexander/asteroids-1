(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (options) {
    this.col = 'RED';
    this.radius = 10;
    this.pos = options['pos'];
    this.vel = Asteroids.Util.randomVec(10); //all asteroids have a speed of 10
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
})();
