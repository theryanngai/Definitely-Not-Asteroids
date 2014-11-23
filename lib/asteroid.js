(function(){

  var Asteroid = Asteroids.Asteroid = function (pos, game) {
    var COLOR = 'green';
    var radius = Asteroids.Util.randomRad(50);
    var vec = Asteroids.Util.randomVec(5);
    var attributes =  {
      color: COLOR,
      radius: radius,
      pos: pos,
      vel: vec,
      game: game
    };
    
    Asteroids.MovingObject.call(this, attributes);
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
<<<<<<< HEAD
    } else if (otherObject instanceof Asteroids.Bullet) {
      otherObject.collideWith(this);
=======
>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe
    }
  }

})();


