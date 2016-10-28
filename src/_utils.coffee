window.sl=
  get_options: (el,args)->
    if args[0]?
      return args[0]
    else
      return $(el).data()
  show_overlay: ()->
    $("body").addClass("overlay-opened")
    if $(".overlay").length == 0
      $("body").append('<div class="overlay"></div>')
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
  error: "Error"
  debug: false
  ajax: (mod, action, data, callback)->
      $.ajax(
          url: "/actions/" + mod + "/" + action + "/"
          data: data
          method: "post"
          success: (res)->
              if (res.success)
                  callback res.data
              else
                  $.jGrowl(res.message,
                      theme: "reded",
                      header: sl.error
                  )

          error: (res)->
              $.jGrowl("<code style='white-space: pre-wrap;break-word:break-all;'>" + res.statusText + "</code>",
                  theme: "reded",
                  header: sl.error+" "+res.status
              )

      ).always( (res)->
          console.log res if sl.debug
      )
  askTo: (label,placeholder,callback)->
    confirm("<label>#{label}</label><div class='row'><div class='col phone-8 offset-phone-2 text-center'><input type='text' placeholder='#{placeholder}'></div></div>", ()->
        callback($("#customConfirm input").val())
    ,{return: false}
    )
