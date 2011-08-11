$(function() {
  $('[data-roll]').mouseenter(function() {
    $('[data-roll]').removeClass('active');
    var q = parseInt($(this).attr('data-roll'), 10);
    for (q; q > 0; q--) {
      $('#d' + q).addClass('active');
    }
  }).click(function() {
    var q = parseInt($(this).attr('data-roll'), 10);
    new Roll(q);
  });

  $('#dice').mouseleave(function() {
    $('[data-roll]').removeClass('active');
  });
});