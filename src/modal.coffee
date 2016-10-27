adjustModal= (target)->
  console.log(target)
  if $(target).outerHeight()>($(window).height()-$(target).css("padding-top").replace("px","")*4)
    $(target).height $(window).height()-$(target).css("padding-top").replace("px","")*4
  $(target).css "top",($(window).height()-$(target).outerHeight())*0.5
  $(target).css "left",($(window).width()-$(target).outerWidth())*0.5

$.fn.modal = (mode)->
  switch mode
    when "show"
      adjustModal this
      sl.show_overlay()
      this.fadeIn()
    when "hide"
      sl.hide_overlay()
      this.fadeOut()

    else
      adjustModal this
  return this

initModal = ()->
  $(window).resize ()->
    console.log("resising")
    $(".modal").each ()->
      adjustModal this


###
 istanbul ignore next
###
$ ()->
  initModal
