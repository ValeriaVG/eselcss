$(document).ready(function() {
    if ($(".dropdown").length > 0) {
        $(".dropdown").dropdown();
    }


    var validator = $( ".form" ).validate({
      submitHandler: function(form) {
      alert("its valid");
    }

    });
    validator.form();


});
