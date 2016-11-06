$.fn.toggler = ()->
  options=sl.get_options this,arguments
  el=$(this)
  target =  if options.target? then $(options.target) else $(el.attr "href")
  if $(target).length>0

    if /hidden/.test(el.attr("class")) && options.toggle != "modal"
      $(window).resize ()->
        target.attr("style","")

    el.click (e)->
      $(target).toggleClass "toggle-target-opened" if !$(target).hasClass "modal"
      e.preventDefault()
      switch options.toggle
        when "slide"
          target.stop().slideToggle(options.options)
        when "fade"
          target.stop().fadeToggle(options.options)
        when "modal"
          $(target).modal(options)
          $(target).modal('show',$(el).data())
        else
          target.stop().toggle(options.options)
  return this;

togglerInit= ()->
  $('[data-toggle]').each ()-> $(this).toggler()
  $('.modal').each ()->
    modal= $(this)
    modal.find(".close-modal").each ()->
      $(this).click ()->
        modal.modal("hide")
  $("body").click (e)->
    if !e.target.hasAttribute "data-toggle"
      $('.toggle-target-opened:not(.modal)').hide()
###
 istanbul ignore next
###
$ ()->
  togglerInit()
