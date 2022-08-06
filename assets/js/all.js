"use strict";

$(document).ready(function () {
  $(".navBtn").click(function () {
    $(".nav").slideToggle();
  });
  $("li").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
  });
});
//# sourceMappingURL=all.js.map
