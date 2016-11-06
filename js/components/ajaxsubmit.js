$.fn.ajaxSubmit = function(callback) {
  var data, form;
  form = this;
  data = $(this).serializeArray();
  $.ajax({
    url: $(form).attr("action"),
    data: data,
    type: $(form).attr("method"),
    dataType: 'json',
    success: function(res) {
      if (callback) {
        return callback(res);
      }
    },
    error: function(res) {
      return console.log(res);
    }
  });
  return this;
};
