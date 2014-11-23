(function(){

  var Bullet = Asteroids.Bullet = function (pos, vel) {
    var COLOR = 'white';
    var RADIUS = 3;
    var newVel = [vel[0]*3, vel[1]*3];
    debugger;

    var pos = [pos[0], pos[1]];
    var attributes = {
      color: COLOR,
      radius: RADIUS,
      pos: pos,
      vel: newVel,
      game: game
    };
    
    Asteroids.MovingObject.call(this, attributes);
  }

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
    }
  }

  Bullet.prototype.isWrappable = false;

})();


