Roll.bind('rolled', function() {
  $('#results').prepend(ich.roll_template(RollPresenter(this))).find('div.empty').remove();
});