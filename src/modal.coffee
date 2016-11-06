adjustModal= (target)->
  if $(target).length>0
    if $(target).outerHeight()>($(window).height()-$(target).css("padding-top").replace("px","")*4)
      $(target).height $(window).height()-$(target).css("padding-top").replace("px","")*4
    $(target).css "top",($(window).height()-$(target).outerHeight())*0.5
    $(target).css "bottom",($(window).height()-$(target).outerHeight())*0.5 if $(target).hasClass "full"
    $(target).css "left",($(window).width()-$(target).outerWidth())*0.5

$.fn.modal = (mode,triggerData)->
  modal=this
  switch mode
    when "show"
      adjustModal this
      $(modal).trigger
        type:"sl.modal.show"
        triggerData:triggerData
      sl.show_overlay()
      this.fadeIn(500,()->
        $(modal).trigger
          type:"sl.modal.shown"
          triggerData:triggerData )
    when "hide"
      $(modal).trigger "sl.modal.hide"
      sl.hide_overlay()
      this.fadeOut(500,()->$(modal).trigger "sl.modal.hidden")
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
  initModal()
