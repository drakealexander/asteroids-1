(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var inherits = Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  }

  

})();
