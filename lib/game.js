(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Game = function (canvas) {
    this.DIM_X = canvas.width;
    this.DIM_Y = canvas.height;
    this.NUM_ASTEROIDS = 10;
    this.allAsteroids = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship( { pos: [this.DIM_X / 2, this.DIM_Y / 2] } );
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

  Asteroids.Game.prototype.allObjects = function () {
    return this.allAsteroids.concat( [this.ship] );
  }

  Asteroids.Game.prototype.randomPosition = function () {
    var x = Math.random() * this.DIM_X;
    var y = Math.random() * this.DIM_Y;
    return [x, y];
  }

  Asteroids.Game.prototype.remove = function (asteroid) {
    this.allAsteroids = this.allAsteroids.filter(function (el) {
      return (el.pos[0] !== asteroid.pos[0]) && (el.pos[1] !== asteroid.pos[1]);
    })
  }


  Asteroids.Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.allObjects().forEach( function(object) {
      object.draw(ctx);
    });
  }

  Asteroids.Game.prototype.moveObjects = function (ctx) {
    this.allObjects().forEach( function(object) {
      object.move(ctx);
    });
    this.checkCollisions();
  }

  Asteroids.Game.prototype.step = function () {
  }

  Asteroids.Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.allObjects.length - 1; i++) {
      for (var j = i + 1; j < this.allObjects.length; j++) {
        this.allObjects[i].isCollidedWith(this.allObjects[j])
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
