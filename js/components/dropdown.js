$.fn.dropdown = function() {
  var els;
  els = this;
  $(els).each(function() {
    var el, event;
    el = this;
    event = typeof window.ontouchstart !== 'undefined' ? 'click' : 'mouseenter mouseleave';
    return $(el).on(event, function(e) {
      e.stopPropagation();
      e.preventDefault();
      return $(el).find(">ul").stop().slideToggle();
    });
  });
  return this;
};

$(function() {
  return $(".dropdown").dropdown();
});
