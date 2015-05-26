(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.GameView = {};

  Asteroids.GameView = function(canvas) {
    this.ctx = canvas.getContext("2d");
    this.game = new Asteroids.Game(canvas);
  }

  Asteroids.GameView.prototype.start = function () {
    var gameView = this
    setInterval( function () {
      console.log(gameView.game.allAsteroids[0].pos)
      gameView.game.moveObjects(gameView.ctx);
      gameView.game.draw(gameView.ctx);
    }, 10);
  }


})();
