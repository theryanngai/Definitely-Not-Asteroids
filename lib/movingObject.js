(function(){
  
  var Asteroids = window.Asteroids = window.Asteroids || {};
  
  var MovingObject = Asteroids.MovingObject = function(attributes, game) {
    this.pos = attributes.pos;
    this.vel = attributes.vel;
    this.radius = attributes.radius;
    this.color = attributes.color;
    this.game = attributes.game;
<<<<<<< HEAD
  }
=======
  };
>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe
  
  MovingObject.prototype.draw = function(ctx) {
    fillColor = this.color;
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.moveTo(this.pos[0], this.pos[1]);
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);
    ctx.fill();
<<<<<<< HEAD
  }
=======
  };
>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe
  
  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
<<<<<<< HEAD
    if (this.game.isOutOfBounds(this.pos)) {
      if (this.isWrappable) {
        this.game.wrap(this.pos);
      } else {
        this.game.remove(this);
      }
    }
  }
=======
    this.game.wrap(this.pos);
  };
>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    if ((Math.sqrt(Math.pow((otherObject.pos[1] - this.pos[1]), 2) + 
          Math.pow((otherObject.pos[0] - this.pos[0]), 2)) 
            < (this.radius + otherObject.radius))) {
      return true;
    } else {
      return false;
    }
<<<<<<< HEAD
  }

  MovingObject.prototype.isWrappable = true;

  MovingObject.prototype.collideWith = function(otherObject) {}
=======
  };

  MovingObject.prototype.collideWith = function(otherObject) {
  };
>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe

})();

