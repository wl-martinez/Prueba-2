$(document).ready(function () {


  $(function () {
    var effects = "animated pulse faster";
    var effectsEnd =
      "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";

    $("#kk").hover(function () {
      $(this)
        .addClass(effects)
        .one(effectsEnd, function () {
          $(this).removeclass(effects);
        });
    });
  });


  $("#but_sub").click(function () {
    var first_value = $("#FirstName").val();
    var last_value = $("#LastName").val();
    var Email_value = $("#Email").val();
    var Password_value = $("#Password").val();
    var phone_value = $("#PhoneNumber").val();

    alert("First Name: " + first_value + "\nLast Name: " + last_value + "\nEmail: " + Email_value + "\nPassword: " + Password_value + "\nPhone Number: " + phone_value);
    $("#form")[0].reset();
  });
});


