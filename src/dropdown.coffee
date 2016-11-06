$.fn.dropdown = ()->
  els=this
  $(els).each ()->
    el=this
    event = if typeof window.ontouchstart isnt 'undefined' then 'click' else 'mouseenter mouseleave'
    $(el).on event, (e)->
      e.stopPropagation()
      e.preventDefault()
      $(el).find(">ul").stop().slideToggle()
  return this;

$ ()->
  $(".dropdown").dropdown()
