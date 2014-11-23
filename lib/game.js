(function(){
  
  var Game = Asteroids.Game = function(){
    DIM_X = 700;
    DIM_Y = 700;
<<<<<<< HEAD
    NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.bullets = [];
=======
    NUM_ASTEROIDS = 4;
    this.asteroids = [];
>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe
    this.ship = new Asteroids.Ship(this.randomPosition(), this);
    
    this.addAsteroids();
    this.allObj = this.allObjects();

<<<<<<< HEAD

=======
>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe
  }

  Game.prototype.randomPosition = function(){
    xPos = Math.floor((Math.random() * DIM_X) + 1);
    yPos = Math.floor((Math.random() * DIM_Y) + 1);
    return [xPos, yPos];
  }  

  Game.prototype.addAsteroids = function() {
    while(this.asteroids.length < NUM_ASTEROIDS) {
      this.asteroids.push(new Asteroids.Asteroid(this.randomPosition(), this));
    }
  }

  Game.prototype.draw = function(ctx) {
<<<<<<< HEAD
    ctx.drawImage(img, 0, 0);
    this.allObjects().forEach(function(item) {
=======
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    this.allObj.forEach(function(item) {
>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe
      item.draw(ctx);
    });
  }

  Game.prototype.moveObjects = function() {
<<<<<<< HEAD
    this.allObjects().forEach(function(asteroid) {
=======
    this.allObj.forEach(function(asteroid) {
>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe
      asteroid.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    if ((pos[0] >= DIM_X) || (pos[0] <= 0)) {
      pos[0] = DIM_X - pos[0];
    }

    if ((pos[1] >= DIM_Y) || (pos[1] <= 0)) {
      pos[1] = DIM_Y - pos[1];
    }

    return pos;
  };

  Game.prototype.checkCollisions = function() {
<<<<<<< HEAD
    for (var i = 0; i < this.allObjects().length; i++) {
      for (var j = i + 1; j < this.allObjects().length; j++) {
        if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
          this.allObjects()[i].collideWith(this.allObjects()[j]);
=======
    for (var i = 0; i < this.allObj.length; i++) {
      for (var j = i + 1; j < this.allObj.length; j++) {
        if (this.allObj[i].isCollidedWith(this.allObj[j])) {
          this.allObj[i].collideWith(this.allObj[j]);
>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe
        }
      }
    }
  }

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  }

<<<<<<< HEAD
  Game.prototype.remove = function(obj) {
    if (obj instanceof Asteroids.Asteroid) {
      var group = this.asteroids;
    } else if (obj instanceof Asteroids.Bullet) {
      var group = this.bullets;
    }

    for (var i = 0; i < group.length; i ++) {
      if (group[i] === obj) {
        group.splice(i, 1);
=======
  Game.prototype.remove = function(asteroid) {
    for (var i = 0; i < this.asteroids.length; i ++) {
      if (this.asteroids[i] === asteroid) {
        this.asteroids.splice(i, i);
        return;
>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe
      }
    }
  }

  Game.prototype.allObjects = function() {
    var everything = this.asteroids.slice();
    everything.push(this.ship);
<<<<<<< HEAD

    for (var i = 0; i < this.bullets.length; i ++) {
      everything.push(this.bullets[i]);
    }

    return everything;
  }

  Game.prototype.isOutOfBounds = function(pos) {
    if (pos[0] > DIM_X || pos[0] < 0 || pos[1] > DIM_Y || pos[1] < 0) {
      return true;
    } else {
      return false;
    }
  }

=======
    return everything;
  }

>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe
})();