beforeEach(function() {
  this.addMatchers({
    toBeBetween: function(min, max) {
      if (this.actual >= min && this.actual <= max) {
        return true;
      } else {
        return false;
      }
    }
  })
});
