describe("Display numbers from 1 to 100", function() {
  //Variables
  var i = 0;
  while (i < 100) {
    i++;
  }

  it("returned list of numbers 1 to 100", function() {
      expect(i).toBeGreaterThanOrEqual(100);
  });
});
