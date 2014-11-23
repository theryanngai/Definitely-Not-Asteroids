(function() {
  var GameView = Asteroids.GameView = function(game, ctx){
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
<<<<<<< HEAD
    var that = this;
    this.bindKeyHandlers();

=======
>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe
    setInterval(function() {
      this.game.step();
      this.game.draw(ctx);
    }, 20);
  }

<<<<<<< HEAD
  GameView.prototype.bindKeyHandlers = function() {
    var that = this;
    
    key('up', function() {
      that.game.ship.power([0, -1]);
    });

    key('down', function() {
      that.game.ship.power([0, 1]);
    });

    key('left', function() {
      that.game.ship.power([-1, 0]);
    });

    key('right', function() {
      that.game.ship.power([1, 0]);
    });

    key('space', function() {
      that.game.ship.fireBullet();
    });
  }

=======
>>>>>>> cda4e037565d3a9feef05a9519bb7c6b35e82ebe
})();