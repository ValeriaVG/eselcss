window.sl = {
  get_options: function(el, args) {
    if (args[0] != null) {
      return args[0];
    } else {
      return $(el).data();
    }
  },
  show: function(elClass) {
    if ($("." + elClass).length === 0) {
      $("body").append('<div class="' + elClass + '"></div>');
    }
    return $("." + elClass).fadeIn();
  },
  hide: function(elClass) {
    if ($("." + elClass).length > 0) {
      return $("." + elClass).fadeOut();
    }
  },
  show_overlay: function() {
    $("body").addClass("overlay-opened");
    if ($(".overlay").length === 0) {
      $("body").append('<div class="overlay"></div>');
      $(".overlay").click(function() {
        $(".modal").fadeOut();
        return sl.hide_overlay();
      });
    }
    return $(".overlay").fadeIn();
  },
  hide_overlay: function() {
    $("body").removeClass("overlay-opened");
    if ($(".overlay").length > 0) {
      return $(".overlay").fadeOut();
    }
  },
  toggle_overlay: function() {
    if ($(".overlay").is(":visible")) {
      return sl.hide_overlay();
    } else {
      return sl.show_overlay();
    }
  },
  error: "Error",
  debug: false,
  ajax: function(mod, action, data, callback) {
    return $.ajax({
      url: "/actions/" + mod + "/" + action + "/",
      data: data,
      method: "post",
      success: function(res) {
        if (res.success) {
          return callback(res.data);
        } else {
          return $.jGrowl(res.message, {
            theme: "reded",
            header: sl.error
          });
        }
      },
      error: function(res) {
        return $.jGrowl("<code style='white-space: pre-wrap;break-word:break-all;'>" + res.statusText + "</code>", {
          theme: "reded",
          header: sl.error + " " + res.status
        });
      }
    }).always(function(res) {
      if (sl.debug) {
        return console.log(res);
      }
    });
  },
  askTo: function(label, placeholder, callback) {
    return confirm("<label>" + label + "</label><div class='row'><div class='col phone-8 offset-phone-2 text-center'><input type='text' placeholder='" + placeholder + "'></div></div>", function() {
      return callback($("#customConfirm input").val());
    }, {
      "return": false
    });
  }
};

$.fn.ajaxSubmit = function(callback) {
  var data, form;
  form = this;
  data = $(this).serializeArray();
  $.ajax({
    url: $(form).attr("action"),
    data: data,
    type: $(form).attr("method"),
    dataType: 'json',
    success: function(res) {
      if (callback) {
        return callback(res);
      }
    },
    error: function(res) {
      return console.log(res);
    }
  });
  return this;
};

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
