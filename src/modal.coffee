adjustModal= (target)->
  if $(target).outerHeight()>($(window).height()-$(target).css("padding-top").replace("px","")*4)
    $(target).height $(window).height()-$(target).css("padding-top").replace("px","")*4
  $(target).css "top",($(window).height()-$(target).outerHeight())*0.5  
  $(target).css "bottom",($(window).height()-$(target).outerHeight())*0.5 if $(target).hasClass "full"
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
