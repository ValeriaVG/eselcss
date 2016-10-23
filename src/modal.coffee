adjustModal= (target)->
  if $(target).outerHeight()>($(window).height()-$(target).css("padding-top").replace("px","")*4)
    $(target).height $(window).height()-$(target).css("padding-top").replace("px","")*4
  $(target).css "top",($(window).height()-$(target).outerHeight())*0.5
  $(target).css "left",($(window).width()-$(target).outerWidth())*0.5

$.fn.modal = ()->
  sl.toggle_overlay()
  adjustModal this
  return this

initModal = ()->
    $(window).resize ()->
    $(".modal").each ()->
      adjustModal this
###
 istanbul ignore next
###
$ ()->
  initModal
