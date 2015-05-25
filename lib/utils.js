(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Util = {};

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  }

  Asteroids.Util.randomVec = function(length) {
    var neg = [-1, 1][Math.floor(Math.random()*2)];
    var deltaX = ((Math.random() * 2) - 1); // (-1, 1)
    var deltaY = (Math.sqrt(1 - Math.pow(deltaX, 2)) * neg);
    return [deltaX * length, deltaY * length];
  }
})();
