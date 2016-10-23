describe('toggler', function () {
  it('should show hidden content', function () {
    expect($("#hidden").is(":visible")).toEqual(false);
    $("[data-toggle]").click();
    expect($("#hidden").is(":visible")).toEqual(true);
  });

  it('should hide shown content', function () {
    $("[data-toggle]").click();
    expect($("#hidden").is(":visible")).toEqual(false);
  });



});
