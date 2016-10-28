window.sl = {
  get_options: function(el, args) {
    if (args[0] != null) {
      return args[0];
    } else {
      return $(el).data();
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
