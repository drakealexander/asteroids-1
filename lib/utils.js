(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Util = {};

  var inherits = Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  }

  var randomVec = Asteroids.Util.randomVec = function(length) {
    var deltaX = (Math.random(2) - 1); // (-1, 1)
    var deltaY = (Math.sqrt(1 - Math.pow(deltaX, 2)));
    return [deltaX * length, deltaY * length]
  }

})();
