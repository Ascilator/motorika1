$(function () {
  $('.burger').click(function () {
    $('.mobile_menu').toggleClass('_active');
    $('body').toggleClass('_lock');
    $('.burger').toggleClass('_active');
  });

  setInterval(() => {
    $('._app').toggleClass('_active');
  }, 4000);
});
