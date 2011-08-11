var Roll = function(num, forced) {
  this.dice = [];
  this.init(num, forced || new Array(num));
}

_.extend(Roll, Lucid.Events);

_.extend(Roll.prototype, Lucid.Events, {
  score: 0,

  init: function(num, forced) {
    for (var i = 0; i < num; i++) {
      this.dice.push(new Die(forced[i]));
    }

    this.process();
  },

  process: function() {
    var numbers = _.pluck(this.dice, 'number'),
        counts  = _.groupBy(numbers, function(n) {return n}),
        self    = this;

    for (num in counts) {
      this.count(num, counts[num].length);
    }

    this.trigger('rolled');
  },

  count: function(number, qty) {
    number = parseInt(number, 10);
    while (qty > 0) {
      console.log(qty, number);
      if (qty > 2) {
        switch(number) {
          case 1:
            this.score += 1000;
            break;
          default:
            this.score += 100 * number;
        }
        qty -= 3;
      } else {
        switch(number) {
          case 1:
            this.score += 100;
            break;
          case 5:
            this.score += 50;
        }
        qty--;
      }
    }
  }
});