(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Game = function (canvas) {
    this.DIM_X = canvas.width;
    this.DIM_Y = canvas.height;
    this.NUM_ASTEROIDS = 5;
    this.allAsteroids = [];
    this.addAsteroids();
  }

  Asteroids.Game.prototype.addAsteroids = function () {
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      this.allAsteroids.push(new Asteroids.Asteroid(
        { pos: this.randomPosition(),
          radius: 5,
          col: "#00FF00",
          game: this
        }));
    };
  }

  Asteroids.Game.prototype.randomPosition = function () {
    var x = Math.random() * this.DIM_X;
    var y = Math.random() * this.DIM_Y;
    return [x, y];
  }

  Asteroids.Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.allAsteroids.forEach( function(asteroid) {
      asteroid.draw(ctx);
    });
  }

  Asteroids.Game.prototype.moveObjects = function (ctx) {
    this.allAsteroids.forEach( function(asteroid) {
      asteroid.move(ctx);
    });
    this.checkCollisions();
  }

  Asteroids.Game.prototype.step = function () {
  }

  Asteroids.Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.allAsteroids.length - 1; i++) {
      for (var j = i + 1; j < this.allAsteroids.length; j++) {
        this.allAsteroids[i].isCollidedWith(this.allAsteroids[j])
      }
    }
  }

  Asteroids.Game.prototype.wrap = function (pos) {
    // pos[0] = pos[0] % this.DIM_X;
    // pos[1] = pos[1] % this.DIM_Y;
    // return pos;

    if (pos[0] > this.DIM_X) {
      pos[0] = pos[0] - this.DIM_X
    } else if (pos[0] < 0) {
      pos[0] = pos[0] + this.DIM_X
    }

    if (pos[1] > this.DIM_Y) {
      pos[1] = pos[1] - this.DIM_Y
    } else if (pos[1] < 1) {
      pos[1] = pos[1] + this.DIM_Y
    }

    return pos
  }

})();
