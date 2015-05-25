(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Game = function () {
    this.DIM_X = 500;
    this.DIM_Y = 500;
    this.NUM_ASTEROIDS = 50;
    this.allAsteroids = [];
    this.addAsteroids();
  }

  Asteroids.Game.prototype.addAsteroids = function () {
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      this.allAsteroids.push(new Asteroids.Asteroid(
        { pos: this.randomPosition(),
          radius: 5,
          col: "#00FF00"
        }));
    };
  }

  Asteroids.Game.prototype.randomPosition = function () {
    var x = Math.random() * this.DIM_X;
    var y = Math.random() * this.DIM_Y;
    return [x, y];
  }

  Asteroids.Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, 500, 500);
    this.allAsteroids.forEach( function(asteroid) {
      asteroid.draw(ctx);
    });
  }

  Asteroids.Game.prototype.moveObjects = function (ctx) {
    this.allAsteroids.forEach( function(asteroid) {
      asteroid.move(ctx);
    });
  }
})();
