var Die = function(num) {
  this.roll(num);
};

_.extend(Die.prototype, {
  roll: function(num) {
    this.number = num || Math.ceil(Math.random() * 6);
  }
});