describe('dropdown', function () {
  it('should toggle dropdown on hover and leave', function () {


    $(".dropdown").dropdown();
    $(".dropdown").trigger("mouseenter");
    expect($(".dropdown>ul").stop(false,true).is(":visible")).toEqual(true);
    $(".dropdown").trigger("mouseleave");
    expect($(".dropdown>ul").stop(false,true).is(":visible")).toEqual(false);
  });
});
