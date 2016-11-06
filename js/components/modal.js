var adjustModal, initModal;

adjustModal = function(target) {
  if ($(target).length > 0) {
    if ($(target).outerHeight() > ($(window).height() - $(target).css("padding-top").replace("px", "") * 4)) {
      $(target).height($(window).height() - $(target).css("padding-top").replace("px", "") * 4);
    }
    $(target).css("top", ($(window).height() - $(target).outerHeight()) * 0.5);
    if ($(target).hasClass("full")) {
      $(target).css("bottom", ($(window).height() - $(target).outerHeight()) * 0.5);
    }
    return $(target).css("left", ($(window).width() - $(target).outerWidth()) * 0.5);
  }
};

$.fn.modal = function(mode, triggerData) {
  var modal;
  modal = this;
  switch (mode) {
    case "show":
      adjustModal(this);
      $(modal).trigger({
        type: "sl.modal.show",
        triggerData: triggerData
      });
      sl.show_overlay();
      this.fadeIn(500, function() {
        return $(modal).trigger({
          type: "sl.modal.shown",
          triggerData: triggerData
        });
      });
      break;
    case "hide":
      $(modal).trigger("sl.modal.hide");
      sl.hide_overlay();
      this.fadeOut(500, function() {
        return $(modal).trigger("sl.modal.hidden");
      });
  }
  adjustModal(this);
  return this;
};

initModal = function() {
  return $(window).resize(function() {
    return $(".modal").each(function() {
      return adjustModal(this);
    });
  });
};


/*
 istanbul ignore next
 */

$(function() {
  return initModal();
});
