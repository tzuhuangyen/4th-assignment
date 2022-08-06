$(document).ready(function () {
  $(".navBtn").click(function () {
    $(".nav").slideToggle();
  });

  $(".productType").click(function () {
    // e.preventDefault();
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
  });
});
