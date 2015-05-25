(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.GameView = {};

  Asteroids.GameView = function(canvas) {
    this.game = new Asteroids.Game();
    this.ctx = canvas.getContext("2d");
  }

  Asteroids.GameView.prototype.start = function () {
    var gameView = this
    setInterval( function () {
      gameView.game.moveObjects(gameView.ctx);
      gameView.game.draw(gameView.ctx);
    }, 20);
  }


})();
