window.sl=
  get_options: (el,args)->
    if args[0]?
      return args[0]
    else
      return $(el).data()
  show_overlay: ()->
    if $(".overlay").length == 0
      $("body").append('<div class="overlay"></div>')
      $("body").addClass("overlay-opened")
      $(".overlay").click ()->
        $(".modal").fadeOut()
        sl.hide_overlay()

    $(".overlay").fadeIn()

  hide_overlay: ()->
    $("body").removeClass("overlay-opened")
    if $(".overlay").length > 0
      $(".overlay").fadeOut()

  toggle_overlay: ()->
    if $(".overlay").is(":visible")
      sl.hide_overlay()
    else
      sl.show_overlay()
