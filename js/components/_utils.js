window.sl = {
  get_options: function(el, args) {
    if (args[0] != null) {
      return args[0];
    } else {
      return $(el).data();
    }
  },
  show_overlay: function() {
    if ($(".overlay").length === 0) {
      $("body").append('<div class="overlay"></div>');
      $("body").addClass("overlay-opened");
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
  }
};
