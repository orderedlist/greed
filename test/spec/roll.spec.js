describe("Roll", function() {

  it("should have requested number of dice", function() {
    var roll1 = new Roll(5);
    expect(roll1.dice.length).toEqual(5);

    var roll2 = new Roll(1);
    expect(roll2.dice.length).toEqual(1);
  });

  it ("should be able to force specific rolls", function() {
    var roll = new Roll(3, [1,2,3]);
    expect(roll.dice.length).toEqual(3);
    expect(roll.dice[0].number).toEqual(1);
    expect(roll.dice[1].number).toEqual(2);
    expect(roll.dice[2].number).toEqual(3);
  });

  describe("#rolling one dice", function() {
    var roll;

    it("should count a roll of 1 as 100 points", function() {
      roll = new Roll(1, [1]);
      expect(roll.score).toEqual(100);
    });

    it("should count a roll of 5 as 50 points", function() {
      roll = new Roll(1, [5]);
      expect(roll.score).toEqual(50);
    });

    it("should not count any other scores", function() {
      expect((new Roll(1, [2])).score).toEqual(0);
      expect((new Roll(1, [3])).score).toEqual(0);
      expect((new Roll(1, [4])).score).toEqual(0);
      expect((new Roll(1, [6])).score).toEqual(0);
    });
  });

  describe("#rolling two dice", function() {
    var roll;

    it("should count a roll of 1 and [2,3,4,6] as 100 points", function() {
      expect((new Roll(2, [1,2])).score).toEqual(100);
      expect((new Roll(2, [1,3])).score).toEqual(100);
      expect((new Roll(2, [1,4])).score).toEqual(100);
      expect((new Roll(2, [1,6])).score).toEqual(100);
    });

    it("should count a roll of 5 and [2,3,4,6] as 50 points", function() {
      expect((new Roll(2, [5,2])).score).toEqual(50);
      expect((new Roll(2, [5,3])).score).toEqual(50);
      expect((new Roll(2, [5,4])).score).toEqual(50);
      expect((new Roll(2, [5,6])).score).toEqual(50);
    });

    it("should count a roll of 1 and 1 as 200 points", function() {
      expect((new Roll(2, [1,1])).score).toEqual(200);
    });

    it("should count a roll of 1 and 5 as 150 points", function() {
      expect((new Roll(2, [1,5])).score).toEqual(150);
    });

    it("should count a roll of 5 and 5 as 100 points", function() {
      expect((new Roll(2, [5,5])).score).toEqual(100);
    });

  });

  describe("#rolling three dice", function() {
    var roll;

    it("should count a roll of 1,1,1 as 1000 points", function() {
      expect((new Roll(3, [1,1,1])).score).toEqual(1000);
    });

    it("should calculate the points for 3 of the same non-ones", function() {
      expect((new Roll(3, [2,2,2])).score).toEqual(200);
      expect((new Roll(3, [3,3,3])).score).toEqual(300);
      expect((new Roll(3, [4,4,4])).score).toEqual(400);
      expect((new Roll(3, [5,5,5])).score).toEqual(500);
      expect((new Roll(3, [6,6,6])).score).toEqual(600);
    });
  });

  describe("#rolling four dice", function() {
    var roll;

    it("should count a roll of 1,1,1,1 as 1100 points", function() {
      expect((new Roll(4, [1,1,1,1])).score).toEqual(1100);
    });

    it("should calculate the points for 3 of the same non-ones and a non-[1,5]", function() {
      expect((new Roll(4, [2,2,2,2])).score).toEqual(200);
      expect((new Roll(4, [3,3,3,2])).score).toEqual(300);
      expect((new Roll(4, [4,4,4,2])).score).toEqual(400);
      expect((new Roll(4, [5,5,5,2])).score).toEqual(500);
      expect((new Roll(4, [6,6,6,2])).score).toEqual(600);
    });
  });

});