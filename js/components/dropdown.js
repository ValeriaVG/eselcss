$.fn.dropdown = function() {
  var els;
  els = this;
  $(els).each(function() {
    var el, event;
    el = this;
    event = window.ontouchstart !== void 0 ? 'click' : 'mouseenter mouseleave';
    return $(el).on(event, function(e) {
      e.preventDefault();
      return $(el).find(">ul").stop().slideToggle();
    });
  });
  return this;
};
