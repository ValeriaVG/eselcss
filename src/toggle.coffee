$.fn.toggler = ()->
  options=sl.get_options this,arguments
  el=$(this)
  target =  if options.target? then $(options.target) else $(el.attr "href")

  el.click (e)->
    $(target).toggleClass "toggle-target-opened"
    e.preventDefault()
    switch options.toggle
        when "slide"
          target.stop().slideToggle(options.options)
        when "fade"
          target.stop().fadeToggle(options.options)
        when "modal"
          $(target).modal(options).stop().fadeToggle(options.options)
        else
          target.stop().toggle(options.options)

  return this;

togglerInit= ()->
  $('[data-toggle]').each ()-> $(this).toggler()
  $('.modal').each ()->
    modal= $(this)
    modal.find(".close-modal").each ()->
      $(this).click ()->
        modal.modal().hide()
  $("body").click (e)->
    if !e.target.hasAttribute "data-toggle"
      $('.toggle-target-opened:not(.modal)').hide()
###
 istanbul ignore next
###
$ ()->
  togglerInit
