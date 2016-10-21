$.fn.dropdown = ()->
  els=this
  $(els).each ()->
    el=this
    event = if (window.ontouchstart!=undefined) then 'click' else 'mouseenter mouseleave'
    $(el).on event, (e)->
        e.preventDefault()
        $(el).find(">ul").stop().slideToggle()
  return this;
