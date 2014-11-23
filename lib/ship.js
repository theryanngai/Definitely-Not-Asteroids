(function(){

  var Ship = Asteroids.Ship = function (pos, game) {
<<<<<<< HEAD
    var COLOR = 'gray';
=======
    var COLOR = 'red';
>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe
    var RADIUS = 10;
    var attributes = {
      color: COLOR,
      radius: RADIUS,
      pos: pos,
      vel: [0, 0],
      game: game
    };
    Asteroids.MovingObject.call(this, attributes);
  }

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
<<<<<<< HEAD
  }

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  Ship.prototype.fireBullet = function() {
    var bullet = new Asteroids.Bullet(this.pos, this.vel);
    this.game.bullets.push(bullet);
  }
  // Ship.prototype.draw = function(ctx) {
  //   fillColor = this.color;
  //   ctx.fillStyle = fillColor;
  //   ctx.beginPath();
  //   ctx.moveTo(this.pos[0], this.pos[1]);
  //   ctx.lineTo(this.pos[0], this.pos[1]);
  //   ctx.lineTo(this.pos[0], this.pos[1]);
  //   ctx.fill();
  // }

=======
    this.vel = [0, 0];
  }

  Ship.prototype.power = function(impulse) {
    
  }

>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe
})();


