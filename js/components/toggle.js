var togglerInit;

$.fn.toggler = function() {
  var el, options, target;
  options = sl.get_options(this, arguments);
  el = $(this);
  target = options.target != null ? $(options.target) : $(el.attr("href"));
  if ($(target).length > 0) {
    if (/hidden/.test(el.attr("class")) && options.toggle !== "modal") {
      $(window).resize(function() {
        return target.attr("style", "");
      });
    }
    el.click(function(e) {
      if (!$(target).hasClass("modal")) {
        $(target).toggleClass("toggle-target-opened");
      }
      e.preventDefault();
      switch (options.toggle) {
        case "slide":
          return target.stop().slideToggle(options.options);
        case "fade":
          return target.stop().fadeToggle(options.options);
        case "modal":
          $(target).modal(options);
          return $(target).modal('show', $(el).data());
        default:
          return target.stop().toggle(options.options);
      }
    });
  }
  return this;
};

togglerInit = function() {
  $('[data-toggle]').each(function() {
    return $(this).toggler();
  });
  $('.modal').each(function() {
    var modal;
    modal = $(this);
    return modal.find(".close-modal").each(function() {
      return $(this).click(function() {
        return modal.modal("hide");
      });
    });
  });
  return $("body").click(function(e) {
    if (!e.target.hasAttribute("data-toggle")) {
      return $('.toggle-target-opened:not(.modal)').hide();
    }
  });
};


/*
 istanbul ignore next
 */

$(function() {
  return togglerInit();
});
