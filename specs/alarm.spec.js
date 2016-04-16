describe("Test karma runner", function() {
  it("should be an instance of Object", function() {
    var alarm = new window.App.Alarm("#el");
    expect(alarm instanceof Object).toBe(true);
  });
});
