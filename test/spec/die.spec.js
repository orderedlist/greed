describe("Die", function() {
  var die;

  it("should roll a number", function() {
    die = new Die();

    expect(die.number).toBeBetween(1, 6);
  });

  it("should be able to roll a specific number", function() {
    die = new Die(4);
    expect(die.number).toEqual(4);
  });

});