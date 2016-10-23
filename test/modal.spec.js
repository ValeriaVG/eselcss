describe('modal', function () {
  it('should be hidden', function () {
    expect($("#modal").is(":visible")).toEqual(false);
  });

  it('should open on trigger',function(){
    $("#openmodal").click();
    expect($("#modal").stop(false,true).is(":visible")).toEqual(true);
  });

  it('should close on x',function(){
    expect($("#modal").is(":visible")).toEqual(true);
    $(".modal .close-modal").click();
    expect($("#modal").stop(false,true).is(":visible")).toEqual(false);
  });
});
