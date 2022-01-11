$(document).ready(function ($) {
  $('[data-svg]').not('loaded').each(function () {
    var $i = $(this).addClass('loaded');

    $.get($i.data('svg'), function (data) {
      var $svg = $(data).find('svg');

      $svg.attr('class', $i.attr('class'));
      $i.replaceWith($svg);
    }, 'xml');
  });
  $(".choise-step-1 li").click(function () {
    $('.bar').addClass("bar-2");
    $('.step-1').addClass("hide");
    $('.step-2').removeClass("hide");
    $('.num i').html('2');
  });
  $(".choise-step-2 li").click(function () {
    $('.bar').addClass("bar-3");
    $('.step-2').addClass("hide");
    $('.step-3').removeClass("hide");
    $('.num i').html('3');
  });
  $(".choise-step-3 li").click(function () {
    $('.bar').addClass("bar-4");
    $('.step-3').addClass("hide");
    $('.step-4').removeClass("hide");
    $('.num i').html('4');
  });
  // есть класс
  $('.rfield').change(function () {
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    if (firstname.length >= 3, lastname.length >= 3) {
      tmpval = $('#firstname').val();
      tmpval2 = $('#lastname').val();
      if ((tmpval == '') || (tmpval2 == '')) { } else {
        $('.bar').addClass("bar-5");
        $('.step-4').addClass("hide");
        $('.step-5').removeClass("hide");
        $('.num i').html('5');
      }
    };

  });
  $('#email').change(function () {
    email = $(this).val();
    if (email == '') {

    } else {
      $('.bar').addClass("bar-6");
      $('.step-5').addClass("hide");
      $('.step-6').removeClass("hide");
      $('.num i').html('6');
    }
  });
  $('#phone').change(function () {
    phone = $(this).val();
    if (phone == '') {

    } else {
      $('.bar').addClass("bar-7");
      $('.step-6').addClass("hide");
      $('.step-7').removeClass("hide");
      $('.num i').html('7');
    }
  });
  $("#basic-form").validate({
    rules: {
      firstname: {
        required: true,
        minlength: 3
      },
      lastname: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      }
    }
  });
});
