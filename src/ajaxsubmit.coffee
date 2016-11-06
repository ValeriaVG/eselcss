$.fn.ajaxSubmit = (callback)->

  form=this
  data=$(this).serializeArray()
  $.ajax(
    url:$(form).attr("action")
    data:data
    type:$(form).attr("method")
    dataType:'json'    
    success:(res)->
      callback(res) if callback
    error: (res)->
      console.log(res)
  )
  return this;
