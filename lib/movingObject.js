(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (options) {
    this.pos =    options["pos"];
    this.vel =    options["vel"];
    this.radius = options["radius"];
    this.col =    options["col"];
    this.game =   options["game"];
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fillStyle=this.col;
    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap.call(this.game, this.pos);
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    distance_btw_centers = (Math.sqrt(Math.pow((this.pos[0] - otherObject.pos[0]),2) +
    Math.pow((this.pos[1] - otherObject.pos[1]), 2)));
    if (distance_btw_centers < 5) {
      alert('COLLISION');
      this.game.remove(otherObject);
      this.game.remove.call(this.game, this);
    }
  }
})();
