(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Game = function () {
    this.DIM_X = 100;
    this.DIM_Y = 100;
    this.NUM_ASTEROIDS = 50;
    this.allAsteroids = [];
    this.addAsteroids();
  }

  Asteroids.Game.prototype.addAsteroids = function () {
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      this.allAsteroids.push(new Asteroids.Asteroid({pos: this.randomPosition()}));
    };
  }

  Asteroids.Game.prototype.randomPosition = function () {
    var x = Math.random() * this.DIM_X;
    var y = Math.random() * this.DIM_Y;
    return [x, y];
  }

  Asteroids.Game.prototype.draw = function (ctx) {
    ctx.clearRect();
    this.allAsteroids.forEach( function(asteroid) {
      asteroid.draw(ctx);
    });
  }

  Asteroids.Game.prototype.move = function (ctx) {
    ctx.clearRect();
    this.allAsteroids.forEach( function(asteroid) {
      asteroid.move(ctx);
    });
  }
})();
