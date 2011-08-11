var RollPresenter = function(roll) {
  var data = {
    dice: [],
    score: roll.score
  };

  for (var i = 0; i < 5; i++) {
    data.dice.push({die: (roll.dice[i] || null)});
  }

  return data;
}