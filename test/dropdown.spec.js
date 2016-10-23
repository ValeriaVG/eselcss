describe('dropdown', function () {
  it('should open on hover', function () {
    $(".dropdown").trigger("mouseenter");
    expect($(".dropdown>ul").stop(false,true).is(":visible")).toEqual(true);

  });
  it('should close on leave', function () {
    $(".dropdown").trigger("mouseleave");
    expect($(".dropdown>ul").stop(false,true).is(":visible")).toEqual(false);
  });
});
